import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilArrowLeft, cilFile } from '@coreui/icons';

function Summary() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const document = location.state?.document;

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "24px"
    }}>
      <CButton
        color="secondary"
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          borderRadius: "8px",
          padding: "8px 20px"
        }}
      >
        <CIcon icon={cilArrowLeft} className="me-2" />
        Back
      </CButton>

      <CCard style={{
        borderRadius: "20px",
        border: "none",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)"
      }}>
        <CCardHeader style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          borderRadius: "20px 20px 0 0",
          padding: "24px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CIcon icon={cilFile} size="lg" style={{ color: "#fff" }} />
            <h3 style={{ margin: 0, color: "#fff", fontWeight: 600 }}>
              Document Summary
            </h3>
          </div>
        </CCardHeader>
        <CCardBody style={{ padding: "32px" }}>
          {document ? (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <h4 style={{ 
                  color: "#495057", 
                  marginBottom: "12px",
                  fontWeight: 600
                }}>
                  Document Information
                </h4>
                <div style={{
                  background: "#f8f9fa",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef"
                }}>
                  <p style={{ margin: "8px 0" }}>
                    <strong>Name:</strong> {document.name}
                  </p>
                  <p style={{ margin: "8px 0" }}>
                    <strong>Type:</strong> {document.type?.toUpperCase() || "N/A"}
                  </p>
                  <p style={{ margin: "8px 0" }}>
                    <strong>Document ID:</strong> {document.id || "N/A"}
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ 
                  color: "#495057", 
                  marginBottom: "12px",
                  fontWeight: 600
                }}>
                  Summary
                </h4>
                <div style={{
                  background: "#fff",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef",
                  minHeight: "200px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
                }}>
                  <p style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.8",
                    margin: 0
                  }}>
                    This is a summary view for the document. You can add detailed summary information here.
                    The document details and analysis can be displayed in this section.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
                Document information not available. Document ID: {id}
              </p>
            </div>
          )}
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Summary;

