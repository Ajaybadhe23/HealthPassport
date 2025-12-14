import React, { useState, useRef, useEffect } from "react";
import { CButton, CSpinner } from "@coreui/react";
import { uploadDocument } from "../services/uploadService";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function FloatingAddButton({ onUploadSuccess }) {
  const [open, setOpen] = useState(false);
  const [selectedReports, setSelectedReports] = useState([]);
  const [selectedPrescriptions, setSelectedPrescriptions] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const containerRef = useRef(null);
  const reportInputRef = useRef(null);
  const prescriptionInputRef = useRef(null);

  // Handle file selection - supports multiple files
  const handleReportFile = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setSelectedReports(prev => [...prev, ...files]);
      setOpen(true); // Keep menu open to show submit button
    }
  };

  const handlePrescriptionFile = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setSelectedPrescriptions(prev => [...prev, ...files]);
      setOpen(true); // Keep menu open to show submit button
    }
  };

  // Remove a specific file
  const removeReport = (index) => {
    setSelectedReports(prev => prev.filter((_, i) => i !== index));
  };

  const removePrescription = (index) => {
    setSelectedPrescriptions(prev => prev.filter((_, i) => i !== index));
  };

  // Handle submit/upload
  const handleSubmit = async () => {
    if (selectedReports.length === 0 && selectedPrescriptions.length === 0) {
      alert("Please select at least one file to upload");
      return;
    }

    setIsUploading(true);

    try {
      const uploadPromises = [];

      // Upload all reports
      selectedReports.forEach(file => {
        uploadPromises.push(uploadDocument(file));
      });

      // Upload all prescriptions
      selectedPrescriptions.forEach(file => {
        uploadPromises.push(uploadDocument(file));
      });

      // Wait for all uploads to complete
      const results = await Promise.all(uploadPromises);

      // Reset state
      setSelectedReports([]);
      setSelectedPrescriptions([]);
      setOpen(false);
      
      // Reset file inputs
      if (reportInputRef.current) {
        reportInputRef.current.value = '';
      }
      if (prescriptionInputRef.current) {
        prescriptionInputRef.current.value = '';
      }

      // Call success callback if provided
      if (onUploadSuccess) {
        onUploadSuccess(results);
      }

      const totalFiles = selectedReports.length + selectedPrescriptions.length;
      // alert(`${totalFiles} file${totalFiles > 1 ? 's' : ''} uploaded successfully!`);
    } catch (error) {
      console.error("Upload error:", error);
      alert(`Upload failed: ${error.response?.data?.message || error.message || 'Unknown error'}`);
    } finally {
      setIsUploading(false);
    }
  };

  const totalFilesCount = selectedReports.length + selectedPrescriptions.length;

  // Detect clicks outside the floating menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false); // Close menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <>
      {/* Loading Overlay */}
      {isUploading && (
        <div style={styles.loaderOverlay}>
          <div style={styles.loaderContent}>
            <CSpinner color="primary" size="lg" />
            <p style={styles.loaderText}>Uploading files...</p>
          </div>
        </div>
      )}

      {/* Hidden file inputs with multiple support */}
      <input
        type="file"
        ref={reportInputRef}
        style={{ display: "none" }}
        onChange={handleReportFile}
        accept=".pdf,.jpg,.png"
        multiple
      />
      <input
        type="file"
        ref={prescriptionInputRef}
        style={{ display: "none" }}
        onChange={handlePrescriptionFile}
        accept=".pdf,.jpg,.png"
        multiple
      />

      {/* Floating Button Container */}
      <div style={styles.fabContainer} ref={containerRef}>
        {/* Mini buttons */}
        {open && (
          <div style={styles.miniButtons}>
            {/* Reports Section */}
            <div style={styles.fileSection}>
              <CButton
                color="info"
                style={styles.miniBtn}
                onClick={() => reportInputRef.current.click()}
                disabled={isUploading}
              >
                📄 Add Reports {selectedReports.length > 0 && `(${selectedReports.length})`}
              </CButton>
              
              {/* Show selected reports */}
              {selectedReports.length > 0 && (
                <div style={styles.fileList}>
                  {selectedReports.map((file, index) => (
                    <div key={index} style={styles.fileItem}>
                      <span style={styles.fileName}>{file.name}</span>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeReport(index)}
                        disabled={isUploading}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Prescriptions Section */}
            <div style={styles.fileSection}>
              <CButton
                color="warning"
                style={styles.miniBtn}
                onClick={() => prescriptionInputRef.current.click()}
                disabled={isUploading}
              >
                💊 Add Prescriptions {selectedPrescriptions.length > 0 && `(${selectedPrescriptions.length})`}
              </CButton>
              
              {/* Show selected prescriptions */}
              {selectedPrescriptions.length > 0 && (
                <div style={styles.fileList}>
                  {selectedPrescriptions.map((file, index) => (
                    <div key={index} style={styles.fileItem}>
                      <span style={styles.fileName}>{file.name}</span>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removePrescription(index)}
                        disabled={isUploading}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit button - only show if files are selected */}
            {totalFilesCount > 0 && (
              <CButton
                color="success"
                style={styles.submitBtn}
                onClick={handleSubmit}
                disabled={isUploading}
              >
                {isUploading && (
                  <CSpinner as="span" size="sm" aria-hidden="true" style={{ marginRight: "8px" }} />
                )}
                {isUploading ? "Uploading..." : `Upload ${totalFilesCount} File${totalFilesCount > 1 ? 's' : ''}`}
              </CButton>
            )}
          </div>
        )}

        {/* Main FAB */}
        <CButton
          color="primary"
          shape="rounded-pill"
          className="fab-enhanced"
          style={styles.fab}
          onClick={() => setOpen(!open)}
        >
          <span style={{ fontSize: "32px", lineHeight: "1" }}>+</span>
        </CButton>
      </div>
    </>
  );
}

// ----------------- Styles -----------------
const styles = {
  fabContainer: {
    position: "fixed",
    bottom: 30,
    right: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 1000,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    fontSize: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  miniButtons: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    animation: "fadeIn 0.3s ease-out",
    maxWidth: "280px",
  },
  fileSection: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  miniBtn: {
    textAlign: "center",
    borderRadius: "12px",
    padding: "10px 20px",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  },
  fileList: {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "8px",
    padding: "8px",
    maxHeight: "120px",
    overflowY: "auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  fileItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 8px",
    borderRadius: "4px",
    background: "#f8f9fa",
    marginBottom: "4px",
    fontSize: "0.8rem",
  },
  fileName: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "180px",
    color: "#495057",
  },
  removeBtn: {
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    fontSize: "14px",
    lineHeight: "1",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
    flexShrink: 0,
  },
  submitBtn: {
    textAlign: "center",
    borderRadius: "12px",
    padding: "12px 24px",
    fontWeight: 700,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loaderOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  loaderContent: {
    backgroundColor: "white",
    padding: "30px 40px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
  },
  loaderText: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
    color: "#495057",
  },
};
