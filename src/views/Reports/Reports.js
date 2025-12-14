import { useEffect } from 'react';
import DocumentListWithPreview from '../../components/docVeiwer'
import FloatingAddButton from '../../components/floatingAction';
import { usePatient } from '../../context/PatientContext';

function Reports() {
  const { reportList, setReportList, getReportList, reportsLoading } = usePatient();

  useEffect(() => {
    getReportList();
  }, [getReportList]);

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

    // setReportList((prevDocuments) => [...prevDocuments, ...newDocuments]);
    getReportList();
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
      <DocumentListWithPreview documents={reportList} loading={reportsLoading}/>
      <FloatingAddButton onUploadSuccess={handleUploadSuccess}/>
    </div>
  )
}

export default Reports