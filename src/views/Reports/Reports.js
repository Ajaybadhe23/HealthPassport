import { useState } from 'react';
import DocumentListWithPreview from '../../components/docVeiwer'
import FloatingAddButton from '../../components/floatingAction';
export const documentsList = [
  {
    id: 1,
    name: "Blood Report.pdf",
    type: "pdf",
    url: "C:\Users\MHKTN20\Downloads\pdf-test.pdf",
  },
  {
    id: 2,
    name: "Chest X-Ray.png",
    type: "image",
    url: "https://www.bing.com/th/id/OIP.5-YNnF3PvmgIEg5FqpRzQwHaGR?w=262&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.5&pid=3.1&rm=2&ucfimg=1",
  },
];


function Reports() {
  const [documents, setDocuments] = useState(documentsList);

  // Handle successful upload
  const handleUploadSuccess = (uploadResults) => {
    // Add uploaded documents to the documents list
    // Assuming the API returns document objects with id, name, type, url
    const newDocuments = uploadResults.map((result) => ({
      id: result.id || Date.now() + Math.random(),
      name: result.name || result.fileName,
      type: result.type || (result.fileName?.endsWith('.pdf') ? 'pdf' : 'image'),
      url: result.url || result.fileUrl,
    }));

    setDocuments((prevDocuments) => [...prevDocuments, ...newDocuments]);
  };

  



  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "24px"
    }}>
      <div style={{ 
        marginBottom: "24px",
        padding: "20px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      }}>
        <h2 style={{ 
          margin: 0, 
          fontWeight: 700,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Reports & Prescriptions
        </h2>
        <p style={{ margin: "8px 0 0 0", color: "#6c757d" }}>
          View and manage your medical documents
        </p>
      </div>
      <DocumentListWithPreview documents={documents}/>
      <FloatingAddButton onUploadSuccess={handleUploadSuccess}/>
    </div>
  )
}

export default Reports