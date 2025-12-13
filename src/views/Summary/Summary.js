import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CCard, CCardBody, CButton, CRow, CCol, CCollapse } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { 
  cilArrowLeft, 
  cilChevronRight,
  cilChevronBottom,
  cilCheckCircle,
  cilWarning,
  cilMedicalCross,
  cilSpeedometer,
  cilChart,
  cilNotes,
  cilBell,
  cilHeart,
  cilStar,
  cilCalendar
} from '@coreui/icons';

// Comprehensive Health Report JSON Data
const reportData = {
  "overallHealthScore": {
    "score": 75,
    "maxScore": 100,
    "rating": "Good",
    "ratingColor": "green",
    "assessment": "Overall health is good with some areas needing attention."
  },
  "outOfRangeValues": [
    {
      "parameter": "LDL Cholesterol",
      "yourValue": "131 mg/dL",
      "yourValueNumeric": 131,
      "idealRange": "<100 mg/dL",
      "rangeMin": 0,
      "rangeMax": 200,
      "idealMin": 0,
      "idealMax": 100,
      "status": "High",
      "severity": "Moderate",
      "severityColor": "orange",
      "percentageOutOfRange": 31,
      "category": "Heart Health"
    },
    {
      "parameter": "Vitamin B12",
      "yourValue": "156 pg/mL",
      "yourValueNumeric": 156,
      "idealRange": "187 - 883 pg/mL",
      "rangeMin": 0,
      "rangeMax": 1000,
      "idealMin": 187,
      "idealMax": 883,
      "status": "Low",
      "severity": "Moderate",
      "severityColor": "orange",
      "percentageOutOfRange": 16.58,
      "category": "Nutritional Health"
    },
    {
      "parameter": "Vitamin D 25 Hydroxy",
      "yourValue": "20.2 ng/mL",
      "yourValueNumeric": 20.2,
      "idealRange": "30 - 100 ng/mL",
      "rangeMin": 0,
      "rangeMax": 150,
      "idealMin": 30,
      "idealMax": 100,
      "status": "Insufficient",
      "severity": "Mild",
      "severityColor": "yellow",
      "percentageOutOfRange": 32.67,
      "category": "Nutritional Health"
    }
  ],
  "withinRangeValues": [
    { "parameter": "Hemoglobin", "value": "15.1 g/dL", "range": "13.0 - 17.0 g/dL", "category": "Blood" },
    { "parameter": "RBC Count", "value": "5.2 million/µL", "range": "4.5 - 5.5 million/µL", "category": "Blood" },
    { "parameter": "WBC Count", "value": "7,500 /µL", "range": "4,000 - 11,000 /µL", "category": "Blood" },
    { "parameter": "Platelet Count", "value": "250,000 /µL", "range": "150,000 - 400,000 /µL", "category": "Blood" },
    { "parameter": "Creatinine", "value": "1.0 mg/dL", "range": "0.7 - 1.3 mg/dL", "category": "Kidney" },
    { "parameter": "BUN", "value": "15 mg/dL", "range": "7 - 20 mg/dL", "category": "Kidney" },
    { "parameter": "ALT", "value": "25 U/L", "range": "7 - 56 U/L", "category": "Liver" },
    { "parameter": "AST", "value": "22 U/L", "range": "10 - 40 U/L", "category": "Liver" },
    { "parameter": "Total Cholesterol", "value": "195 mg/dL", "range": "<200 mg/dL", "category": "Heart Health" },
    { "parameter": "HDL Cholesterol", "value": "55 mg/dL", "range": ">40 mg/dL", "category": "Heart Health" },
    { "parameter": "Triglycerides", "value": "140 mg/dL", "range": "<150 mg/dL", "category": "Heart Health" },
    { "parameter": "Fasting Glucose", "value": "92 mg/dL", "range": "70 - 100 mg/dL", "category": "Metabolic" }
  ],
  "summary": {
    "brief": "The health report indicates good overall health with a few parameters out of the ideal range. LDL cholesterol is moderately high, and there are deficiencies in Vitamin B12 and Vitamin D. Kidney and liver functions are within normal limits.",
    "reportDate": "2025-10-06",
    "patientInfo": {
      "name": "Mr Utkarsh Dubey",
      "age": "26",
      "gender": "Male"
    }
  },
  "detailedAnalysis": {
    "byCategory": [
      {
        "category": "Cardiovascular Health",
        "icon": "heart",
        "score": 60,
        "maxScore": 100,
        "findings": "LDL cholesterol is moderately high, which may increase cardiovascular risk.",
        "keyPoints": [
          "LDL cholesterol is above the ideal range.",
          "Consider dietary and lifestyle changes to improve cardiovascular health."
        ]
      },
      {
        "category": "Nutritional Health",
        "icon": "nutrition",
        "score": 50,
        "maxScore": 100,
        "findings": "Deficiencies in Vitamin B12 and Vitamin D noted.",
        "keyPoints": [
          "Vitamin B12 is below the normal range.",
          "Vitamin D is insufficient."
        ]
      },
      {
        "category": "Kidney Function",
        "icon": "kidney",
        "score": 95,
        "maxScore": 100,
        "findings": "Kidney function markers are within normal limits.",
        "keyPoints": [
          "Creatinine and BUN levels are normal.",
          "Good kidney filtration efficiency."
        ]
      },
      {
        "category": "Liver Function",
        "icon": "liver",
        "score": 92,
        "maxScore": 100,
        "findings": "Liver enzymes are within healthy ranges.",
        "keyPoints": [
          "ALT and AST levels are normal.",
          "No signs of liver stress."
        ]
      }
    ]
  },
  "areasOfConcern": [
    {
      "parameter": "LDL Cholesterol",
      "value": "131 mg/dL",
      "severity": "Moderate",
      "whyItMatters": "High LDL cholesterol can lead to atherosclerosis and increase the risk of heart disease.",
      "potentialCauses": [
        "Diet high in saturated fats",
        "Lack of physical activity"
      ],
      "riskLevel": "Medium",
      "targetValue": "<100 mg/dL",
      "immediateAction": "Adopt a heart-healthy diet and increase physical activity."
    },
    {
      "parameter": "Vitamin B12",
      "value": "156 pg/mL",
      "severity": "Moderate",
      "whyItMatters": "Vitamin B12 deficiency can lead to anemia and neurological issues.",
      "potentialCauses": [
        "Dietary deficiency",
        "Malabsorption"
      ],
      "riskLevel": "Medium",
      "targetValue": "187 - 883 pg/mL",
      "immediateAction": "Consider Vitamin B12 supplementation."
    },
    {
      "parameter": "Vitamin D 25 Hydroxy",
      "value": "20.2 ng/mL",
      "severity": "Mild",
      "whyItMatters": "Vitamin D is essential for bone health and immune function.",
      "potentialCauses": [
        "Lack of sun exposure",
        "Dietary deficiency"
      ],
      "riskLevel": "Low",
      "targetValue": "30 - 100 ng/mL",
      "immediateAction": "Increase sun exposure and consider Vitamin D supplementation."
    }
  ],
  "positiveIndicators": [
    {
      "parameter": "Kidney Function",
      "value": "Normal",
      "why": "Good kidney filtration and waste removal.",
      "maintain": "Keep current habits and monitor regularly."
    },
    {
      "parameter": "Liver Function",
      "value": "Normal",
      "why": "Efficient liver function with normal enzyme levels.",
      "maintain": "Continue healthy lifestyle choices."
    },
    {
      "parameter": "Blood Count",
      "value": "Normal",
      "why": "Healthy red and white blood cell counts.",
      "maintain": "Maintain balanced nutrition."
    }
  ],
  "recommendations": {
    "immediate": {
      "timeframe": "1-2 weeks",
      "actions": [
        {
          "action": "Start Vitamin D supplementation",
          "details": "2000-4000 IU daily",
          "priority": "High"
        },
        {
          "action": "Increase dietary intake of Vitamin B12",
          "details": "Include more animal products or fortified foods",
          "priority": "High"
        }
      ]
    },
    "shortTerm": {
      "timeframe": "1-3 months",
      "dietary": [
        "Reduce saturated fat intake",
        "Increase fiber intake"
      ],
      "lifestyle": [
        "Increase physical activity",
        "Monitor cholesterol levels"
      ],
      "supplements": [
        "Vitamin B12",
        "Vitamin D"
      ]
    },
    "longTerm": {
      "timeframe": "3-6 months",
      "habits": [
        "Maintain a balanced diet",
        "Regular exercise routine"
      ],
      "monitoring": [
        "Monitor lipid profile",
        "Check vitamin levels"
      ]
    }
  },
  "followUp": {
    "retestTimeline": [
      {
        "timeframe": "3 months",
        "tests": [
          "Lipid panel",
          "Vitamin D levels"
        ]
      }
    ],
    "discussWithDoctor": [
      "Cholesterol management",
      "Vitamin supplementation"
    ],
    "warningSigns": [
      "Unexplained fatigue",
      "Muscle weakness"
    ]
  },
  "healthScoreBreakdown": {
    "cardiovascular": {
      "score": 15,
      "maxScore": 25,
      "status": "Needs Improvement"
    },
    "metabolic": {
      "score": 18,
      "maxScore": 25,
      "status": "Good"
    },
    "organFunction": {
      "score": 21,
      "maxScore": 25,
      "status": "Good"
    },
    "nutritional": {
      "score": 16,
      "maxScore": 25,
      "status": "Fair"
    }
  }
};

// Dotted Circle Component for Score
const DottedCircle = ({ score, color = "#667eea" }) => {
  const radius = 65;
  const dots = 24;
  
  return (
    <div style={{ position: "relative", width: "180px", height: "180px", margin: "0 auto" }}>
      <svg width="180" height="180">
        {Array.from({ length: dots }).map((_, i) => {
          const angle = (i * 360) / dots;
          const radian = (angle * Math.PI) / 180;
          const x = 90 + radius * Math.cos(radian);
          const y = 90 + radius * Math.sin(radian);
          const fillProgress = (i / dots) <= (score / 100);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={fillProgress ? color : "#e0e0e0"}
              opacity={fillProgress ? 1 : 0.5}
            />
          );
        })}
      </svg>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
      }}>
        <div style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          color: color,
          lineHeight: 1
        }}>
          {score}
        </div>
      </div>
    </div>
  );
};

// Range Bar Component - shows where value lies in range
const RangeBar = ({ value, rangeMin, rangeMax, idealMin, idealMax, status }) => {
  const totalRange = rangeMax - rangeMin;
  const valuePosition = ((value - rangeMin) / totalRange) * 100;
  const idealStart = ((idealMin - rangeMin) / totalRange) * 100;
  const idealEnd = ((idealMax - rangeMin) / totalRange) * 100;
  
  const getStatusColor = () => {
    if (status === 'High') return '#ef5350';
    if (status === 'Low' || status === 'Insufficient') return '#ff9800';
    return '#4caf50';
  };

  return (
    <div style={{ marginTop: "12px", marginBottom: "8px" }}>
      <div style={{
        position: "relative",
        height: "8px",
        background: "#f0f0f0",
        borderRadius: "4px",
        overflow: "visible"
      }}>
        {/* Ideal range highlight */}
        <div style={{
          position: "absolute",
          left: `${idealStart}%`,
          width: `${idealEnd - idealStart}%`,
          height: "100%",
          background: "rgba(76, 175, 80, 0.3)",
          borderRadius: "4px"
        }} />
        
        {/* Value indicator */}
        <div style={{
          position: "absolute",
          left: `${Math.min(Math.max(valuePosition, 2), 98)}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "16px",
          height: "16px",
          background: getStatusColor(),
          borderRadius: "50%",
          border: "3px solid #fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          zIndex: 2
        }} />
      </div>
      
      {/* Range labels */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "6px",
        fontSize: "0.7rem",
        color: "#999"
      }}>
        <span>{rangeMin}</span>
        <span style={{ color: "#4caf50", fontWeight: 600 }}>Ideal: {idealMin}-{idealMax}</span>
        <span>{rangeMax}</span>
      </div>
    </div>
  );
};

// Mini Progress Bar Component
const MiniProgressBar = ({ score, maxScore, color }) => {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div style={{
      width: "100%",
      height: "6px",
      background: "#e9ecef",
      borderRadius: "3px",
      overflow: "hidden"
    }}>
      <div style={{
        width: `${percentage}%`,
        height: "100%",
        background: color,
        borderRadius: "3px",
        transition: "width 0.5s ease"
      }} />
    </div>
  );
};

// Severity Badge Component
const SeverityBadge = ({ severity, color }) => {
  const bgColors = {
    'Mild': '#fff3e0',
    'Moderate': '#ffebee',
    'Severe': '#fce4ec'
  };
  const textColors = {
    'Mild': '#e65100',
    'Moderate': '#c62828',
    'Severe': '#ad1457'
  };
  
  return (
    <span style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "12px",
      fontSize: "0.75rem",
      fontWeight: 600,
      background: bgColors[severity] || '#f5f5f5',
      color: textColors[severity] || '#666'
    }}>
      {severity}
    </span>
  );
};

// Risk Level Indicator
const RiskIndicator = ({ level }) => {
  const colors = {
    'Low': '#4caf50',
    'Medium': '#ff9800',
    'High': '#f44336'
  };
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: colors[level] || '#999'
      }} />
      <span style={{ fontSize: "0.85rem", color: "#495057" }}>{level} Risk</span>
    </div>
  );
};

function Summary() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedConcern, setExpandedConcern] = useState(null);
  const [showAllWithinRange, setShowAllWithinRange] = useState(false);
  
  const withinRangeCount = reportData.withinRangeValues.length;
  const outOfRangeCount = reportData.outOfRangeValues.length;

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      paddingBottom: "40px"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px 16px",
        paddingTop: "16px"
      }}>
        <CButton
          color="link"
          onClick={() => navigate(-1)}
          style={{
            color: "#fff",
            padding: "8px 0",
            marginBottom: "8px"
          }}
        >
          <CIcon icon={cilArrowLeft} className="me-2" />
          Back
        </CButton>
        
        <div style={{ color: "#fff" }}>
          <div style={{ fontSize: "0.85rem", opacity: 0.9, marginBottom: "4px" }}>
            Report Date: {reportData.summary.reportDate}
          </div>
          <h2 style={{ margin: 0, fontWeight: 700, fontSize: "1.5rem" }}>
            Health Analysis Report
          </h2>
          <div style={{ fontSize: "0.9rem", marginTop: "8px", opacity: 0.95 }}>
            {reportData.summary.patientInfo.name} • {reportData.summary.patientInfo.age} years • {reportData.summary.patientInfo.gender}
          </div>
        </div>
      </div>

      <div style={{ padding: "16px" }}>
        
        {/* Report Overview Card */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px",
          overflow: "hidden"
        }}>
          <CCardBody style={{ padding: "24px" }}>
            <div style={{
              background: "linear-gradient(135deg, #f8f9fa 0%, #fff 100%)",
              borderRadius: "12px",
              padding: "8px",
              textAlign: "center",
              marginBottom: "24px"
            }}>
              <span style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#6c757d",
                letterSpacing: "2px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                padding: "6px 16px",
                borderRadius: "20px"
              }}>
                REPORT OVERVIEW
              </span>
            </div>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#495057",
                marginBottom: "16px"
              }}>
                Report Score
              </div>
              <DottedCircle score={reportData.overallHealthScore.score} color="#667eea" />
              <div style={{
                marginTop: "16px",
                display: "inline-block",
                background: "#e8f5e9",
                padding: "6px 16px",
                borderRadius: "20px",
                color: "#2e7d32",
                fontWeight: 600,
                fontSize: "0.9rem"
              }}>
                {reportData.overallHealthScore.rating}
              </div>
            </div>

            {/* Parameter Count Boxes */}
            <CRow className="g-3" style={{ marginBottom: "0" }}>
              <CCol xs={6}>
                <div style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "2px solid #4caf50",
                  textAlign: "center"
                }}>
                  <div style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#2e7d32",
                    letterSpacing: "0.5px",
                    marginBottom: "8px"
                  }}>
                    WITHIN RANGE
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "4px" }}>
                    <span style={{ fontSize: "1.8rem", fontWeight: 700, color: "#2e7d32" }}>
                      {withinRangeCount}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#4caf50" }}>Parameters</span>
                  </div>
                </div>
              </CCol>
              <CCol xs={6}>
                <div style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "2px solid #ef5350",
                  textAlign: "center"
                }}>
                  <div style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#c62828",
                    letterSpacing: "0.5px",
                    marginBottom: "8px"
                  }}>
                    OUT OF RANGE
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "4px" }}>
                    <span style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c62828" }}>
                      {outOfRangeCount}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#ef5350" }}>Parameters</span>
                  </div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        {/* Health Score Breakdown */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <CIcon icon={cilSpeedometer} style={{ color: "#667eea", fontSize: "1.2rem" }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Health Score Breakdown
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {Object.entries(reportData.healthScoreBreakdown).map(([key, data]) => {
                const percentage = (data.score / data.maxScore) * 100;
                const getColor = () => {
                  if (percentage >= 80) return '#4caf50';
                  if (percentage >= 60) return '#ff9800';
                  return '#f44336';
                };
                
                return (
                  <div key={key}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center",
                      marginBottom: "6px"
                    }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#495057", textTransform: "capitalize" }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: getColor() }}>
                        {data.score}/{data.maxScore}
                      </span>
                    </div>
                    <MiniProgressBar score={data.score} maxScore={data.maxScore} color={getColor()} />
                    <div style={{ 
                      fontSize: "0.75rem", 
                      color: getColor(), 
                      marginTop: "4px",
                      fontWeight: 500
                    }}>
                      {data.status}
                    </div>
                  </div>
                );
              })}
            </div>
          </CCardBody>
        </CCard>

        {/* Out of Range Parameters - Detailed */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px"
            }}>
              <div style={{
                width: "4px",
                height: "24px",
                background: "#ef5350",
                borderRadius: "2px"
              }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Parameter Overview
              </span>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              color: "#c62828",
              fontSize: "0.9rem",
              fontWeight: 600
            }}>
              <CIcon icon={cilWarning} />
              {outOfRangeCount} Out of range parameters
            </div>

            {reportData.outOfRangeValues.map((param, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  borderRadius: "12px",
                  padding: "16px",
                  marginBottom: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onClick={() => setExpandedConcern(expandedConcern === index ? null : index)}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start"
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#212529",
                      marginBottom: "4px"
                    }}>
                      {param.parameter}
                    </div>
                    <div style={{
                      fontSize: "0.75rem",
                      color: "#6c757d",
                      marginBottom: "8px"
                    }}>
                      {param.category}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: param.status === 'High' ? '#ef5350' : '#ff9800'
                    }}>
                      {param.yourValueNumeric}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#999" }}>
                      Range: {param.idealRange}
                    </div>
                  </div>
                  <CIcon 
                    icon={expandedConcern === index ? cilChevronBottom : cilChevronRight} 
                    style={{ color: "#adb5bd", marginLeft: "8px", marginTop: "4px" }} 
                  />
                </div>

                {/* Range Bar */}
                <RangeBar 
                  value={param.yourValueNumeric}
                  rangeMin={param.rangeMin}
                  rangeMax={param.rangeMax}
                  idealMin={param.idealMin}
                  idealMax={param.idealMax}
                  status={param.status}
                />

                {/* Expanded Details */}
                <CCollapse visible={expandedConcern === index}>
                  <div style={{
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px dashed #e0e0e0"
                  }}>
                    {reportData.areasOfConcern.find(c => c.parameter === param.parameter) && (
                      <div>
                        <div style={{ marginBottom: "12px" }}>
                          <div style={{ 
                            fontSize: "0.8rem", 
                            fontWeight: 600, 
                            color: "#495057",
                            marginBottom: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                          }}>
                            <CIcon icon={cilWarning} style={{ color: "#ff9800" }} />
                            Why It Matters
                          </div>
                          <p style={{ fontSize: "0.85rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                            {reportData.areasOfConcern.find(c => c.parameter === param.parameter)?.whyItMatters}
                          </p>
                        </div>
                        
                        <div style={{ marginBottom: "12px" }}>
                          <div style={{ 
                            fontSize: "0.8rem", 
                            fontWeight: 600, 
                            color: "#495057",
                            marginBottom: "6px"
                          }}>
                            Potential Causes
                          </div>
                          <ul style={{ 
                            margin: 0, 
                            paddingLeft: "20px",
                            fontSize: "0.85rem",
                            color: "#666"
                          }}>
                            {reportData.areasOfConcern.find(c => c.parameter === param.parameter)?.potentialCauses.map((cause, i) => (
                              <li key={i} style={{ marginBottom: "4px" }}>{cause}</li>
                            ))}
                          </ul>
                        </div>

                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "12px"
                        }}>
                          <SeverityBadge severity={param.severity} />
                          <RiskIndicator level={reportData.areasOfConcern.find(c => c.parameter === param.parameter)?.riskLevel} />
                        </div>

                        <div style={{
                          background: "#e3f2fd",
                          padding: "12px",
                          borderRadius: "8px",
                          borderLeft: "4px solid #2196f3"
                        }}>
                          <div style={{ 
                            fontSize: "0.8rem", 
                            fontWeight: 600, 
                            color: "#1565c0",
                            marginBottom: "4px"
                          }}>
                            Immediate Action
                          </div>
                          <p style={{ fontSize: "0.85rem", color: "#1976d2", margin: 0 }}>
                            {reportData.areasOfConcern.find(c => c.parameter === param.parameter)?.immediateAction}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CCollapse>
              </div>
            ))}
          </CCardBody>
        </CCard>

        {/* Within Range Parameters */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px"
            }}>
              <div style={{
                width: "4px",
                height: "24px",
                background: "#4caf50",
                borderRadius: "2px"
              }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Within Range Parameters
              </span>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              color: "#2e7d32",
              fontSize: "0.9rem",
              fontWeight: 600
            }}>
              <CIcon icon={cilCheckCircle} />
              {withinRangeCount} parameters within normal range
            </div>

            {(showAllWithinRange ? reportData.withinRangeValues : reportData.withinRangeValues.slice(0, 4)).map((param, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: index < (showAllWithinRange ? reportData.withinRangeValues.length : 4) - 1 ? "1px solid #f0f0f0" : "none"
                }}
              >
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "#212529" }}>
                    {param.parameter}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6c757d" }}>
                    {param.category}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#2e7d32" }}>
                    {param.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#999" }}>
                    {param.range}
                  </div>
                </div>
              </div>
            ))}

            {reportData.withinRangeValues.length > 4 && (
              <CButton
                color="link"
                onClick={() => setShowAllWithinRange(!showAllWithinRange)}
                style={{
                  width: "100%",
                  marginTop: "12px",
                  color: "#667eea",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem"
                }}
              >
                {showAllWithinRange ? 'Show less' : `Show ${reportData.withinRangeValues.length - 4} more parameters`}
                <CIcon icon={showAllWithinRange ? cilChevronBottom : cilChevronRight} className="ms-2" />
              </CButton>
            )}
          </CCardBody>
        </CCard>

        {/* Detailed Analysis by Category */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <CIcon icon={cilChart} style={{ color: "#667eea", fontSize: "1.2rem" }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Detailed Analysis
              </span>
            </div>

            <CRow className="g-3">
              {reportData.detailedAnalysis.byCategory.map((cat, index) => {
                const percentage = (cat.score / cat.maxScore) * 100;
                const getColor = () => {
                  if (percentage >= 80) return '#4caf50';
                  if (percentage >= 60) return '#ff9800';
                  return '#f44336';
                };
                
                return (
                  <CCol key={index} xs={12} md={6}>
                    <div style={{
                      background: "#f8f9fa",
                      borderRadius: "12px",
                      padding: "16px",
                      height: "100%"
                    }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "12px"
                      }}>
                        <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#212529" }}>
                          {cat.category}
                        </span>
                        <span style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: getColor()
                        }}>
                          {cat.score}%
                        </span>
                      </div>
                      
                      <MiniProgressBar score={cat.score} maxScore={cat.maxScore} color={getColor()} />
                      
                      <p style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        margin: "12px 0 0 0",
                        lineHeight: 1.5
                      }}>
                        {cat.findings}
                      </p>
                    </div>
                  </CCol>
                );
              })}
            </CRow>
          </CCardBody>
        </CCard>

        {/* Positive Indicators */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px",
          background: "linear-gradient(135deg, #e8f5e9 0%, #fff 100%)"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <CIcon icon={cilStar} style={{ color: "#4caf50", fontSize: "1.2rem" }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Positive Indicators
              </span>
            </div>

            {reportData.positiveIndicators.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "16px",
                  marginBottom: index < reportData.positiveIndicators.length - 1 ? "12px" : 0,
                  borderLeft: "4px solid #4caf50"
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px"
                }}>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#212529" }}>
                    {item.parameter}
                  </span>
                  <span style={{
                    background: "#e8f5e9",
                    color: "#2e7d32",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}>
                    {item.value}
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#666", margin: "0 0 8px 0" }}>
                  {item.why}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#4caf50", margin: 0, fontStyle: "italic" }}>
                  💡 {item.maintain}
                </p>
              </div>
            ))}
          </CCardBody>
        </CCard>

        {/* Recommendations */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <CIcon icon={cilNotes} style={{ color: "#667eea", fontSize: "1.2rem" }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Recommendations
              </span>
            </div>

            {/* Immediate Actions */}
            <div style={{
              background: "#fff3e0",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "16px",
              borderLeft: "4px solid #ff9800"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px"
              }}>
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#e65100" }}>
                  Immediate Actions
                </span>
                <span style={{
                  fontSize: "0.75rem",
                  color: "#ff9800",
                  fontWeight: 600
                }}>
                  {reportData.recommendations.immediate.timeframe}
                </span>
              </div>
              
              {reportData.recommendations.immediate.actions.map((action, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "12px",
                    marginBottom: index < reportData.recommendations.immediate.actions.length - 1 ? "8px" : 0
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#212529" }}>
                        {action.action}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "4px" }}>
                        {action.details}
                      </div>
                    </div>
                    <span style={{
                      background: action.priority === 'High' ? '#ffebee' : '#e3f2fd',
                      color: action.priority === 'High' ? '#c62828' : '#1565c0',
                      padding: "2px 8px",
                      borderRadius: "8px",
                      fontSize: "0.7rem",
                      fontWeight: 600
                    }}>
                      {action.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Short Term */}
            <div style={{
              background: "#e3f2fd",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "16px",
              borderLeft: "4px solid #2196f3"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px"
              }}>
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1565c0" }}>
                  Short-Term Goals
                </span>
                <span style={{
                  fontSize: "0.75rem",
                  color: "#2196f3",
                  fontWeight: 600
                }}>
                  {reportData.recommendations.shortTerm.timeframe}
                </span>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[...reportData.recommendations.shortTerm.dietary, ...reportData.recommendations.shortTerm.lifestyle].map((item, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#fff",
                      padding: "6px 12px",
                      borderRadius: "16px",
                      fontSize: "0.8rem",
                      color: "#1565c0"
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Long Term */}
            <div style={{
              background: "#e8f5e9",
              borderRadius: "12px",
              padding: "16px",
              borderLeft: "4px solid #4caf50"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px"
              }}>
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#2e7d32" }}>
                  Long-Term Habits
                </span>
                <span style={{
                  fontSize: "0.75rem",
                  color: "#4caf50",
                  fontWeight: 600
                }}>
                  {reportData.recommendations.longTerm.timeframe}
                </span>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {reportData.recommendations.longTerm.habits.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#fff",
                      padding: "6px 12px",
                      borderRadius: "16px",
                      fontSize: "0.8rem",
                      color: "#2e7d32"
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </CCardBody>
        </CCard>

        {/* Follow-up */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          marginBottom: "16px"
        }}>
          <CCardBody style={{ padding: "20px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}>
              <CIcon icon={cilCalendar} style={{ color: "#667eea", fontSize: "1.2rem" }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#212529" }}>
                Follow-up Plan
              </span>
            </div>

            <CRow className="g-3">
              <CCol xs={12} md={4}>
                <div style={{
                  background: "#f3e5f5",
                  borderRadius: "12px",
                  padding: "16px",
                  height: "100%"
                }}>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#7b1fa2", marginBottom: "12px" }}>
                    🗓️ Retest Timeline
                  </div>
                  {reportData.followUp.retestTimeline.map((item, index) => (
                    <div key={index}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#9c27b0" }}>
                        {item.timeframe}
                      </div>
                      <ul style={{ margin: "8px 0 0 0", paddingLeft: "16px", fontSize: "0.8rem", color: "#666" }}>
                        {item.tests.map((test, i) => (
                          <li key={i}>{test}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CCol>
              
              <CCol xs={12} md={4}>
                <div style={{
                  background: "#e3f2fd",
                  borderRadius: "12px",
                  padding: "16px",
                  height: "100%"
                }}>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#1565c0", marginBottom: "12px" }}>
                    👨‍⚕️ Discuss with Doctor
                  </div>
                  <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "0.8rem", color: "#666" }}>
                    {reportData.followUp.discussWithDoctor.map((item, index) => (
                      <li key={index} style={{ marginBottom: "4px" }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CCol>
              
              <CCol xs={12} md={4}>
                <div style={{
                  background: "#ffebee",
                  borderRadius: "12px",
                  padding: "16px",
                  height: "100%"
                }}>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#c62828", marginBottom: "12px" }}>
                    ⚠️ Warning Signs
                  </div>
                  <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "0.8rem", color: "#666" }}>
                    {reportData.followUp.warningSigns.map((item, index) => (
                      <li key={index} style={{ marginBottom: "4px" }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        {/* Summary Brief */}
        <CCard style={{
          borderRadius: "16px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}>
          <CCardBody style={{ padding: "24px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px"
            }}>
              <CIcon icon={cilMedicalCross} style={{ color: "#fff", fontSize: "1.2rem" }} />
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
                Summary
              </span>
            </div>
            
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.95)",
              margin: 0,
              lineHeight: 1.7
            }}>
              {reportData.summary.brief}
            </p>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
}

export default Summary;
