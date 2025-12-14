// import Modal from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserId, usePatient } from "../context/PatientContext";
import axiosInstance from "../Helper/axiosIntercepter";
import CIcon from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";

import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CSpinner,
} from "@coreui/react";


// Simple file icon thumbnail
function FileThumbnail({ type, contentType, name }) {
    const isPdf = type === "pdf" || type === "pddf" || contentType === "application/pdf";
    
    return (
        <div 
            className="document-thumbnail"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "150px",
                background: isPdf 
                    ? "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%)" 
                    : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                cursor: "pointer"
            }}
        >
            <div style={{
                fontSize: "4rem",
                marginBottom: "12px"
            }}>
                {isPdf ? "📄" : "🖼️"}
            </div>
            <span style={{ 
                fontSize: "0.85rem", 
                color: "#495057",
                fontWeight: 500,
                textAlign: "center",
                padding: "0 12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "100%"
            }}>
                {isPdf ? "PDF Document" : "Image File"}
            </span>
        </div>
    );
}


export default function DocumentListWithPreview({ documents }) {
    const [selectedDoc, setSelectedDoc] = useState(null);
    const navigate = useNavigate();
    const { patientData } = usePatient();
    
    const handleViewSummary = (doc, e) => {
        e.stopPropagation();
        const userId = getCurrentUserId();
        const fileId = doc.fileId || encodeURIComponent(doc.url);
        navigate(`/summary/${userId}/${fileId}`, { 
            state: { document: doc } 
        });
    };

    const handleDownload = async (doc, e) => {
        e.stopPropagation();
        const userId = getCurrentUserId();
        const originalFileName = doc.originalFileName || doc.name;
        
        if (!originalFileName) {
            alert("File name not available");
            return;
        }

        try {
            const response = await axiosInstance.get(
                `/api/users/${userId}/files/download/${encodeURIComponent(originalFileName)}`,
                {
                    responseType: 'blob'
                }
            );

            // Create blob URL and trigger download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', originalFileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download error:", error);
            alert(`Download failed: ${error.response?.data?.message || error.message || 'Unknown error'}`);
        }
    };
    
    if (!documents || documents.length === 0) {
        return (
            <div style={{
                textAlign: "center",
                padding: "60px 20px",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
            }}>
                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>📁</div>
                <h3 style={{ 
                    color: "#495057",
                    marginBottom: "10px",
                    fontWeight: 600
                }}>
                    No Documents Yet
                </h3>
                <p style={{ 
                    color: "#6c757d",
                    margin: 0
                }}>
                    Click the + button to add your first document
                </p>
            </div>
        );
    }
    
    return (
        <>
            <div className="document-grid">
                {documents.map((doc) => (
                    <div 
                        key={doc.id || doc.url} 
                        className="document-card fade-in"
                        // onClick={() => { setSelectedDoc(doc) }}
                    >
                        <div className="document-thumbnail-container">
                            {/* Document name and type badge at the top */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "12px",
                                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)",
                                zIndex: 2,
                                pointerEvents: "none"
                            }}>
                                <p className="document-name" style={{
                                    margin: 0,
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                                    flex: 1,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                }}>
                                    {doc.originalFileName}
                                </p>
                                <div className="document-type-badge" style={{ marginLeft: "8px", pointerEvents: "auto" }}>
                                    {doc.contentType === "application/pdf" || doc.type === "pddf" ? "PDF" : "IMAGE"}
                                </div>
                            </div>
                            <FileThumbnail type={doc.type} contentType={doc.contentType} name={doc.name} />
                        </div>
                        <div className="document-info" style={{ display: "flex", gap: "2px" }}>
                            <CButton
                                color="primary"
                                size="sm"
                                disabled={!doc.processed}
                                onClick={(e) => handleViewSummary(doc, e)}
                                style={{
                                    borderRadius: "8px",
                                    padding: "6px 16px",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
                                    transition: "all 0.3s ease",
                                    flex: 7,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px"
                                }}
                                onMouseEnter={(e) => {
                                    if (doc.processed) {
                                        e.target.style.transform = "translateY(-2px)";
                                        e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (doc.processed) {
                                        e.target.style.transform = "translateY(0)";
                                        e.target.style.boxShadow = "0 2px 8px rgba(102, 126, 234, 0.3)";
                                    }
                                }}
                            >
                                {!doc.processed ? (
                                    <>
                                        <CSpinner size="sm" style={{ width: "14px", height: "14px" }} />
                                        Generating Summary
                                    </>
                                ) : (
                                    "View Summary"
                                )}
                            </CButton>
                            <CButton
                                color="success"
                                size="sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(doc, e);
                                }}
                                style={{
                                    borderRadius: "8px",
                                    padding: "6px 16px",
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 2px 8px rgba(40, 167, 69, 0.3)",
                                    transition: "all 0.3s ease",
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-2px)";
                                    e.target.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)";
                                    e.target.style.boxShadow = "0 2px 8px rgba(40, 167, 69, 0.3)";
                                }}
                            >
                                <CIcon icon={cilCloudDownload} size="lg" style={{ color: "#fff" }} />
                            </CButton>
                        </div>
                    </div>
                ))}
            </div>

            {/* <CModal 
                visible={!!selectedDoc} 
                onClose={() => { setSelectedDoc(null) }} 
                size="xl"
                className="document-modal"
            >
                <CModalHeader style={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    borderBottom: "none"
                }}>
                    <CModalTitle style={{ color: "#fff", fontWeight: 600 }}>
                        {selectedDoc?.name}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody style={{ height: "auto", padding: "40px", background: "#f8f9fa" }}>
                    {selectedDoc && (
                        <div style={{ 
                            display: "flex", 
                            flexDirection: "column",
                            alignItems: "center", 
                            justifyContent: "center",
                            padding: "40px 20px",
                            background: "white",
                            borderRadius: "16px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ fontSize: "5rem", marginBottom: "20px" }}>
                                {selectedDoc.type === "pdf" || selectedDoc.type === "pddf" || selectedDoc.contentType === "application/pdf" ? "📄" : "🖼️"}
                            </div>
                            <h4 style={{ 
                                margin: "0 0 8px 0", 
                                fontWeight: 600, 
                                color: "#212529",
                                textAlign: "center",
                                wordBreak: "break-word"
                            }}>
                                {selectedDoc.name}
                            </h4>
                            <p style={{ 
                                margin: "0 0 20px 0", 
                                color: "#6c757d",
                                fontSize: "0.9rem"
                            }}>
                                {selectedDoc.type === "pdf" || selectedDoc.type === "pddf" || selectedDoc.contentType === "application/pdf" ? "PDF Document" : "Image File"}
                            </p>
                            {selectedDoc.url && (
                                <CButton
                                    color="primary"
                                    href={selectedDoc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ borderRadius: "8px", padding: "10px 24px" }}
                                >
                                    Open File
                                </CButton>
                            )}
                        </div>
                    )}
                </CModalBody>
                <CModalFooter style={{ borderTop: "1px solid #dee2e6" }}>
                    <CButton 
                        color="secondary" 
                        onClick={() => { setSelectedDoc(null) }}
                        style={{ borderRadius: "8px", padding: "8px 20px" }}
                    >
                        Close
                    </CButton>
                </CModalFooter>
            </CModal> */}
        </>
    );
}
