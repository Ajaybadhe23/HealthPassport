import React, { useState, useRef, useEffect } from "react";
import { CButton, CSpinner } from "@coreui/react";
import { uploadDocument } from "../services/uploadService";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function FloatingAddButton({ onUploadSuccess }) {
  const [open, setOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const containerRef = useRef(null);
  const reportInputRef = useRef(null);
  const prescriptionInputRef = useRef(null);

  // Handle file selection
  const handleReportFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedReport(file);
      setOpen(true); // Keep menu open to show submit button
    }
  };

  const handlePrescriptionFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPrescription(file);
      setOpen(true); // Keep menu open to show submit button
    }
  };

  // Handle submit/upload
  const handleSubmit = async () => {
    if (!selectedReport && !selectedPrescription) {
      alert("Please select at least one file to upload");
      return;
    }

    setIsUploading(true);

    try {
      const uploadPromises = [];

      // Upload report if selected
      if (selectedReport) {
        uploadPromises.push(uploadDocument(selectedReport));
      }

      // Upload prescription if selected
      if (selectedPrescription) {
        uploadPromises.push(uploadDocument(selectedPrescription));
      }

      // Wait for all uploads to complete
      const results = await Promise.all(uploadPromises);

      // Reset state
      setSelectedReport(null);
      setSelectedPrescription(null);
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

      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert(`Upload failed: ${error.response?.data?.message || error.message || 'Unknown error'}`);
    } finally {
      setIsUploading(false);
    }
  };

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

      {/* Hidden file inputs */}
      <input
        type="file"
        ref={reportInputRef}
        style={{ display: "none" }}
        onChange={handleReportFile}
        accept=".pdf,.jpg,.png"
      />
      <input
        type="file"
        ref={prescriptionInputRef}
        style={{ display: "none" }}
        onChange={handlePrescriptionFile}
        accept=".pdf,.jpg,.png"
      />

      {/* Floating Button Container */}
      <div style={styles.fabContainer} ref={containerRef}>
        {/* Mini buttons */}
        {open && (
          <div style={styles.miniButtons}>
            <CButton
              color="info"
              style={styles.miniBtn}
              onClick={() => reportInputRef.current.click()}
              disabled={isUploading}
            >
              {selectedReport ? `Report: ${selectedReport.name}` : "Add Report"}
            </CButton>

            <CButton
              color="warning"
              style={styles.miniBtn}
              onClick={() => prescriptionInputRef.current.click()}
              disabled={isUploading}
            >
              {selectedPrescription ? `Prescription: ${selectedPrescription.name}` : "Add Prescription"}
            </CButton>

            {/* Submit button - only show if files are selected */}
            {(selectedReport || selectedPrescription) && (
              <CButton
                color="success"
                style={styles.submitBtn}
                onClick={handleSubmit}
                disabled={isUploading}
              >
                {isUploading && (
                  <CSpinner as="span" size="sm" aria-hidden="true" style={{ marginRight: "8px" }} />
                )}
                {isUploading ? "Uploading..." : "Submit"}
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
  },
  miniBtn: {
    textAlign: "center",
    borderRadius: "12px",
    padding: "10px 20px",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
