import React, { useState, useRef, useEffect } from "react";
import { CButton } from "@coreui/react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function FloatingAddButton() {
  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);
  const reportInputRef = useRef(null);
  const prescriptionInputRef = useRef(null);

  // Handle file selection
  const handleReportFile = (event) => {
    const file = event.target.files[0];
    if (file) alert(`Report selected: ${file.name}`);
  };

  const handlePrescriptionFile = (event) => {
    const file = event.target.files[0];
    if (file) alert(`Prescription selected: ${file.name}`);
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
            >
              Add Report
            </CButton>

            <CButton
              color="warning"
              style={styles.miniBtn}
              onClick={() => prescriptionInputRef.current.click()}
            >
              Add Prescription
            </CButton>
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
    // width: 150,
    textAlign: "center",
    borderRadius: "12px",
    padding: "10px 20px",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
  },
};
