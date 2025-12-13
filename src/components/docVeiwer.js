// import Modal from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from "@coreui/react";


function ImageThumbnail({ url }) {
    return (
        <img
            src={url}
            alt="preview"
            className="document-thumbnail"
        />
    );
}

function PdfThumbnail({ url, onClick }) {
    // For local file paths, show placeholder
    const isLocalPath = url && (url.startsWith('C:\\') || url.startsWith('file://'));
    
    if (isLocalPath) {
        return (
            <div 
                className="document-thumbnail pdf-thumbnail pdf-placeholder"
                onClick={onClick}
                style={{ cursor: "pointer" }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "#667eea",
                    fontSize: "3rem"
                }}>
                    📄
                    <span style={{ fontSize: "0.9rem", marginTop: "8px", color: "#495057" }}>PDF Document</span>
                </div>
            </div>
        );
    }
    
    return (
        <div 
            className="document-thumbnail pdf-thumbnail"
            onClick={onClick}
            style={{ 
                position: "relative",
                cursor: "pointer",
                overflow: "hidden"
            }}
        >
            <iframe
                src={`${url}#page=1&zoom=fit`}
                title="PDF Preview"
                style={{ 
                    border: "none",
                    width: "100%",
                    height: "200px",
                    pointerEvents: "none" // Prevent iframe from capturing clicks
                }}
            />
            {/* Click overlay to ensure clicks are captured */}
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1
                }}
                onClick={onClick}
            />
        </div>
    );
}

function PdfViewer({ url }) {
    return (
        <iframe
            src={url}
            width="100%"
            height="100%"
            title="PDF Viewer"
            style={{ border: "none" }}
        />
    );
}


export default function DocumentListWithPreview({ documents }) {
    const [selectedDoc, setSelectedDoc] = useState(null);
    const navigate = useNavigate();
    
    const getFileIcon = (type) => {
        return type === "pdf" || type === "pddf" ? "📄" : "🖼️";
    };
    
    const handleViewSummary = (doc, e) => {
        e.stopPropagation();
        navigate(`/summary/${doc.id || encodeURIComponent(doc.url)}`, { 
            state: { document: doc } 
        });
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
                        onClick={() => { setSelectedDoc(doc) }}
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
                                    {doc.name}
                                </p>
                                <div className="document-type-badge" style={{
                                    marginLeft: "8px",
                                    pointerEvents: "auto"
                                }}>
                                    {doc.type === "pdf" || doc.type === "pddf" ? "PDF" : "IMAGE"}
                                </div>
                            </div>
                            {doc.type === "pdf" || doc.type === "pddf" ? (
                                <PdfThumbnail 
                                    url={doc.url} 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedDoc(doc);
                                    }}
                                />
                            ) : (
                                <ImageThumbnail url={doc.url} />
                            )}
                        </div>
                        <div className="document-info">
                            <CButton
                                color="primary"
                                size="sm"
                                onClick={(e) => handleViewSummary(doc, e)}
                                style={{
                                    borderRadius: "8px",
                                    padding: "6px 16px",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
                                    transition: "all 0.3s ease",
                                    width: "100%"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-2px)";
                                    e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)";
                                    e.target.style.boxShadow = "0 2px 8px rgba(102, 126, 234, 0.3)";
                                }}
                            >
                                View Summary
                            </CButton>
                        </div>
                    </div>
                ))}
            </div>

            <CModal 
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
                <CModalBody style={{ height: "80vh", padding: 0, background: "#f8f9fa" }}>
                    {selectedDoc && (
                        selectedDoc.type === "pdf" || selectedDoc.type === "pddf" ? (
                            <PdfViewer url={selectedDoc.url} />
                        ) : (
                            <div style={{ 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center",
                                height: "100%",
                                padding: "20px"
                            }}>
                                <ImageThumbnail url={selectedDoc.url} />
                            </div>
                        )
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
            </CModal>
        </>
    );
}
