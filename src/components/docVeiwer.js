// import Modal from "react-bootstrap";
import { useState } from "react";

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
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
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
    return (
        <>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {documents.map((doc) => (
                    <div key={doc.url} onClick={()=>{setSelectedDoc(doc)}} style={{width:150,height:150}}>
                        {
                            doc.type === "pddf" ? (
                                <PdfViewer url={doc.url} />
                            ) : (
                                <ImageThumbnail url={doc.url} />
                            )
                        }
                    </div>
                ))}
            </div>


            <CModal visible={!!selectedDoc} onClose={() => { setSelectedDoc(null) }} size="xl">
                <CModalHeader>
                    <CModalTitle>{selectedDoc?.name}</CModalTitle>
                </CModalHeader>
                <CModalBody style={{ height: "80vh" }}>
                    {selectedDoc && (
                        
                            selectedDoc.type === "pddf" ? (
                                <PdfViewer url={selectedDoc.url} />
                            ) : (
                                <ImageThumbnail url={selectedDoc.url} />
                            )
                        
                    )}
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => { setSelectedDoc(null) }}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}
