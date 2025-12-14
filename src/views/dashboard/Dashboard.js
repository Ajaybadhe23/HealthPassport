// import React from 'react'
// import classNames from 'classnames'

// import {
//   CAvatar,
//   CButton,
//   CButtonGroup,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import {
//   cibCcAmex,
//   cibCcApplePay,
//   cibCcMastercard,
//   cibCcPaypal,
//   cibCcStripe,
//   cibCcVisa,
//   cibGoogle,
//   cibFacebook,
//   cibLinkedin,
//   cifBr,
//   cifEs,
//   cifFr,
//   cifIn,
//   cifPl,
//   cifUs,
//   cibTwitter,
//   cilCloudDownload,
//   cilPeople,
//   cilUser,
//   cilUserFemale,
// } from '@coreui/icons'

// import avatar1 from 'src/assets/images/avatars/1.jpg'
// import avatar2 from 'src/assets/images/avatars/2.jpg'
// import avatar3 from 'src/assets/images/avatars/3.jpg'
// import avatar4 from 'src/assets/images/avatars/4.jpg'
// import avatar5 from 'src/assets/images/avatars/5.jpg'
// import avatar6 from 'src/assets/images/avatars/6.jpg'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'
// import MainChart from './MainChart'

// const Dashboard = () => {
//   const progressExample = [
//     { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
//     { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
//     { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
//     { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
//     { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
//   ]

//   const progressGroupExample1 = [
//     { title: 'Monday', value1: 34, value2: 78 },
//     { title: 'Tuesday', value1: 56, value2: 94 },
//     { title: 'Wednesday', value1: 12, value2: 67 },
//     { title: 'Thursday', value1: 43, value2: 91 },
//     { title: 'Friday', value1: 22, value2: 73 },
//     { title: 'Saturday', value1: 53, value2: 82 },
//     { title: 'Sunday', value1: 9, value2: 69 },
//   ]

//   const progressGroupExample2 = [
//     { title: 'Male', icon: cilUser, value: 53 },
//     { title: 'Female', icon: cilUserFemale, value: 43 },
//   ]

//   const progressGroupExample3 = [
//     { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
//     { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
//     { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
//     { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
//   ]

//   const tableExample = [
//     {
//       avatar: { src: avatar1, status: 'success' },
//       user: {
//         name: 'Yiorgos Avraamu',
//         new: true,
//         registered: 'Jan 1, 2023',
//       },
//       country: { name: 'USA', flag: cifUs },
//       usage: {
//         value: 50,
//         period: 'Jun 11, 2023 - Jul 10, 2023',
//         color: 'success',
//       },
//       payment: { name: 'Mastercard', icon: cibCcMastercard },
//       activity: '10 sec ago',
//     },
//     {
//       avatar: { src: avatar2, status: 'danger' },
//       user: {
//         name: 'Avram Tarasios',
//         new: false,
//         registered: 'Jan 1, 2023',
//       },
//       country: { name: 'Brazil', flag: cifBr },
//       usage: {
//         value: 22,
//         period: 'Jun 11, 2023 - Jul 10, 2023',
//         color: 'info',
//       },
//       payment: { name: 'Visa', icon: cibCcVisa },
//       activity: '5 minutes ago',
//     },
//     {
//       avatar: { src: avatar3, status: 'warning' },
//       user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
//       country: { name: 'India', flag: cifIn },
//       usage: {
//         value: 74,
//         period: 'Jun 11, 2023 - Jul 10, 2023',
//         color: 'warning',
//       },
//       payment: { name: 'Stripe', icon: cibCcStripe },
//       activity: '1 hour ago',
//     },
//     {
//       avatar: { src: avatar4, status: 'secondary' },
//       user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
//       country: { name: 'France', flag: cifFr },
//       usage: {
//         value: 98,
//         period: 'Jun 11, 2023 - Jul 10, 2023',
//         color: 'danger',
//       },
//       payment: { name: 'PayPal', icon: cibCcPaypal },
//       activity: 'Last month',
//     },
//     {
//       avatar: { src: avatar5, status: 'success' },
//       user: {
//         name: 'Agapetus Tadeáš',
//         new: true,
//         registered: 'Jan 1, 2023',
//       },
//       country: { name: 'Spain', flag: cifEs },
//       usage: {
//         value: 22,
//         period: 'Jun 11, 2023 - Jul 10, 2023',
//         color: 'primary',
//       },
//       payment: { name: 'Google Wallet', icon: cibCcApplePay },
//       activity: 'Last week',
//     },
//     {
//       avatar: { src: avatar6, status: 'danger' },
//       user: {
//         name: 'Friderik Dávid',
//         new: true,
//         registered: 'Jan 1, 2023',
//       },
//       country: { name: 'Poland', flag: cifPl },
//       usage: {
//         value: 43,
//         period: 'Jun 11, 2023 - Jul 10, 2023',
//         color: 'success',
//       },
//       payment: { name: 'Amex', icon: cibCcAmex },
//       activity: 'Last week',
//     },
//   ]

//   return (
//     <>
//       <WidgetsDropdown className="mb-4" />
//       <CCard className="mb-4">
//         <CCardBody>
//           <CRow>
//             <CCol sm={5}>
//               <h4 id="traffic" className="card-title mb-0">
//                 Traffic
//               </h4>
//               <div className="small text-body-secondary">January - July 2023</div>
//             </CCol>
//             <CCol sm={7} className="d-none d-md-block">
//               <CButton color="primary" className="float-end">
//                 <CIcon icon={cilCloudDownload} />
//               </CButton>
//               <CButtonGroup className="float-end me-3">
//                 {['Day', 'Month', 'Year'].map((value) => (
//                   <CButton
//                     color="outline-secondary"
//                     key={value}
//                     className="mx-0"
//                     active={value === 'Month'}
//                   >
//                     {value}
//                   </CButton>
//                 ))}
//               </CButtonGroup>
//             </CCol>
//           </CRow>
//           <MainChart />
//         </CCardBody>
//         <CCardFooter>
//           <CRow
//             xs={{ cols: 1, gutter: 4 }}
//             sm={{ cols: 2 }}
//             lg={{ cols: 4 }}
//             xl={{ cols: 5 }}
//             className="mb-2 text-center"
//           >
//             {progressExample.map((item, index, items) => (
//               <CCol
//                 className={classNames({
//                   'd-none d-xl-block': index + 1 === items.length,
//                 })}
//                 key={index}
//               >
//                 <div className="text-body-secondary">{item.title}</div>
//                 <div className="fw-semibold text-truncate">
//                   {item.value} ({item.percent}%)
//                 </div>
//                 <CProgress thin className="mt-2" color={item.color} value={item.percent} />
//               </CCol>
//             ))}
//           </CRow>
//         </CCardFooter>
//       </CCard>
//       <WidgetsBrand className="mb-4" withCharts />
//       <CRow>
//         <CCol xs>
//           <CCard className="mb-4">
//             <CCardHeader>Traffic {' & '} Sales</CCardHeader>
//             <CCardBody>
//               <CRow>
//                 <CCol xs={12} md={6} xl={6}>
//                   <CRow>
//                     <CCol xs={6}>
//                       <div className="border-start border-start-4 border-start-info py-1 px-3">
//                         <div className="text-body-secondary text-truncate small">New Clients</div>
//                         <div className="fs-5 fw-semibold">9,123</div>
//                       </div>
//                     </CCol>
//                     <CCol xs={6}>
//                       <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
//                         <div className="text-body-secondary text-truncate small">
//                           Recurring Clients
//                         </div>
//                         <div className="fs-5 fw-semibold">22,643</div>
//                       </div>
//                     </CCol>
//                   </CRow>
//                   <hr className="mt-0" />
//                   {progressGroupExample1.map((item, index) => (
//                     <div className="progress-group mb-4" key={index}>
//                       <div className="progress-group-prepend">
//                         <span className="text-body-secondary small">{item.title}</span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <CProgress thin color="info" value={item.value1} />
//                         <CProgress thin color="danger" value={item.value2} />
//                       </div>
//                     </div>
//                   ))}
//                 </CCol>
//                 <CCol xs={12} md={6} xl={6}>
//                   <CRow>
//                     <CCol xs={6}>
//                       <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
//                         <div className="text-body-secondary text-truncate small">Pageviews</div>
//                         <div className="fs-5 fw-semibold">78,623</div>
//                       </div>
//                     </CCol>
//                     <CCol xs={6}>
//                       <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
//                         <div className="text-body-secondary text-truncate small">Organic</div>
//                         <div className="fs-5 fw-semibold">49,123</div>
//                       </div>
//                     </CCol>
//                   </CRow>

//                   <hr className="mt-0" />

//                   {progressGroupExample2.map((item, index) => (
//                     <div className="progress-group mb-4" key={index}>
//                       <div className="progress-group-header">
//                         <CIcon className="me-2" icon={item.icon} size="lg" />
//                         <span>{item.title}</span>
//                         <span className="ms-auto fw-semibold">{item.value}%</span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <CProgress thin color="warning" value={item.value} />
//                       </div>
//                     </div>
//                   ))}

//                   <div className="mb-5"></div>

//                   {progressGroupExample3.map((item, index) => (
//                     <div className="progress-group" key={index}>
//                       <div className="progress-group-header">
//                         <CIcon className="me-2" icon={item.icon} size="lg" />
//                         <span>{item.title}</span>
//                         <span className="ms-auto fw-semibold">
//                           {item.value}{' '}
//                           <span className="text-body-secondary small">({item.percent}%)</span>
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <CProgress thin color="success" value={item.percent} />
//                       </div>
//                     </div>
//                   ))}
//                 </CCol>
//               </CRow>

//               <br />

//               <CTable align="middle" className="mb-0 border" hover responsive>
//                 <CTableHead className="text-nowrap">
//                   <CTableRow>
//                     <CTableHeaderCell className="bg-body-tertiary text-center">
//                       <CIcon icon={cilPeople} />
//                     </CTableHeaderCell>
//                     <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
//                     <CTableHeaderCell className="bg-body-tertiary text-center">
//                       Country
//                     </CTableHeaderCell>
//                     <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
//                     <CTableHeaderCell className="bg-body-tertiary text-center">
//                       Payment Method
//                     </CTableHeaderCell>
//                     <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {tableExample.map((item, index) => (
//                     <CTableRow v-for="item in tableItems" key={index}>
//                       <CTableDataCell className="text-center">
//                         <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div>{item.user.name}</div>
//                         <div className="small text-body-secondary text-nowrap">
//                           <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
//                           {item.user.registered}
//                         </div>
//                       </CTableDataCell>
//                       <CTableDataCell className="text-center">
//                         <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div className="d-flex justify-content-between text-nowrap">
//                           <div className="fw-semibold">{item.usage.value}%</div>
//                           <div className="ms-3">
//                             <small className="text-body-secondary">{item.usage.period}</small>
//                           </div>
//                         </div>
//                         <CProgress thin color={item.usage.color} value={item.usage.value} />
//                       </CTableDataCell>
//                       <CTableDataCell className="text-center">
//                         <CIcon size="xl" icon={item.payment.icon} />
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div className="small text-body-secondary text-nowrap">Last login</div>
//                         <div className="fw-semibold text-nowrap">{item.activity}</div>
//                       </CTableDataCell>
//                     </CTableRow>
//                   ))}
//                 </CTableBody>
//               </CTable>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </>
//   )
// }

// export default Dashboard



import { cilBadge, cilHeart, cilPhone, cilDescription, cilShare, cilCalendar, cilChart } from '@coreui/icons'; // Icons themselves
import { CIcon } from '@coreui/icons-react'; // Correct package
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from '@coreui/react-chartjs';
import { getStyle } from '@coreui/utils';
import avatar from 'src/assets/images/avatars/2.jpg'
import { useEffect, useMemo, useRef } from 'react';
import { getCurrentUserId, usePatient } from '../../context/PatientContext';
import { useNavigate } from 'react-router-dom';


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

// Function to get badge color based on severity
const getSeverityColor = (severity) => {
  switch (severity.toLowerCase()) {
    case "high":
      return "danger";
    case "medium":
      return "warning";
    case "low":
      return "success";
    default:
      return "secondary";
  }
};

// Function to get badge color based on status
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "pending":
      return "warning";
    case "in-progress":
      return "info";
    default:
      return "secondary";
  }
};




export default function Dashboard() {
  const { patientData, getPatientData } = usePatient();
  const { medicalRecordShorts } = patientData;
  
  useEffect(() => {
    getPatientData();
  }, [getPatientData]);

  return (
    <div className="dashboard-container">
      {/* Patient Info */}
     <PatientInfoCard patientData={patientData}/>
     <HealthScoreChart medicalRecords={medicalRecordShorts}/>
     <TimelineView medicalRecords={medicalRecordShorts}/>
    {/* <Reports medicalRecords={medicalRecordShorts}/> */}
    
    {/* Disclaimer */}
    <div style={{ 
      marginTop: '40px', 
      padding: '15px', 
      textAlign: 'center', 
      backgroundColor: '#fff3cd', 
      border: '1px solid #ffc107',
      borderRadius: '5px',
      color: '#856404'
    }}>
      <small style={{ fontStyle: 'italic' }}>
        <strong>Disclaimer:</strong> This is AI-generated content. Details should not be relied upon for medical decisions. Please consult with a qualified healthcare professional for accurate medical information.
      </small>
    </div>

    </div>
  );
}



// Health Score Chart Component
const HealthScoreChart = ({ medicalRecords }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const handleColorSchemeChange = () => {
      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          );
          chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent');
          chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color');
          chartRef.current.options.scales.y.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          );
          chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent');
          chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color');
          chartRef.current.update();
        });
      }
    };

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange);
    return () =>
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange);
  }, [chartRef]);

  // Process medical records to extract health scores
  const chartData = useMemo(() => {
    if (!medicalRecords || medicalRecords.length === 0) {
      return { labels: [], data: [] };
    }

    // Sort records by date
    const sortedRecords = [...medicalRecords].sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
      return dateA - dateB;
    });

    // Extract health scores using healthScore property
    const scores = [];
    const labels = [];

    sortedRecords.forEach((record) => {
      // Only use healthScore property
      if (record.healthScore !== undefined && record.healthScore !== null) {
        scores.push(record.healthScore);
        // Format date for label
        if (record.createdAt) {
          try {
            const date = new Date(record.createdAt);
            labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
          } catch (e) {
            labels.push(record.createdAt);
          }
        } else {
          labels.push('N/A');
        }
      }
    });

    return { labels, data: scores };
  }, [medicalRecords]);

  // Calculate overall health average (must be before conditional return to follow Rules of Hooks)
  const overallAverage = useMemo(() => {
    if (!chartData.data || chartData.data.length === 0) return 0;
    const sum = chartData.data.reduce((acc, score) => acc + score, 0);
    return Math.round((sum / chartData.data.length) * 10) / 10; // Round to 1 decimal place
  }, [chartData.data]);

  // Don't render if no data
  if (!chartData.labels.length || !chartData.data.length) {
    return null;
  }

  return (
    <CCard className="health-score-chart-card">
      <CCardHeader className="health-score-chart-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CIcon icon={cilChart} size="lg" />
            <h4 style={{ margin: 0, fontWeight: 600 }}>Health Score Trend</h4>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: getStyle('--cui-success'),
            borderRadius: '8px',
            color: 'white'
          }}>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Overall Average:</span>
            <span style={{ fontSize: '20px', fontWeight: 700 }}>{overallAverage}</span>
          </div>
        </div>
      </CCardHeader>
      <CCardBody>
        <CChartLine
          ref={chartRef}
          style={{ height: '300px' }}
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: 'Health Score',
                backgroundColor: `rgba(${getStyle('--cui-success-rgb')}, .1)`,
                borderColor: getStyle('--cui-success'),
                pointHoverBackgroundColor: getStyle('--cui-success'),
                borderWidth: 2,
                data: chartData.data,
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `Health Score: ${context.parsed.y}`;
                  }
                }
              }
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                  drawOnChartArea: false,
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                beginAtZero: false,
                min: 0,
                max: 100,
                border: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                  maxTicksLimit: 10,
                  stepSize: 10,
                  callback: function(value) {
                    return value + '%';
                  }
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 6,
                hoverBorderWidth: 3,
              },
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

// Timeline Component - Groups records by date
const TimelineView = ({ medicalRecords }) => {
  const navigate = useNavigate();
  
  // Format date helper function
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown Date';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString;
    }
  };
  
  // Group records by date
  const groupedRecords = useMemo(() => {
    if (!medicalRecords || medicalRecords.length === 0) return {};
    
    const grouped = {};
    const dateMap = {}; // Map formatted date to original date string for sorting
    
    medicalRecords.forEach((record) => {
      const dateKey = record.createdAt ? formatDate(record.createdAt) : 'Unknown Date';
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
        dateMap[dateKey] = record.createdAt || '';
      }
      grouped[dateKey].push(record);
    });
    
    // Sort dates in descending order (newest first) using original createdAt
    const sortedDates = Object.keys(grouped).sort((a, b) => {
      const dateA = dateMap[a] ? new Date(dateMap[a]) : new Date(0);
      const dateB = dateMap[b] ? new Date(dateMap[b]) : new Date(0);
      return dateB - dateA;
    });
    
    const sortedGrouped = {};
    sortedDates.forEach(date => {
      sortedGrouped[date] = grouped[date];
    });
    
    return sortedGrouped;
  }, [medicalRecords]);
  
  const handleViewSummary = (doc) => {
    const userId = getCurrentUserId();
    const fileId = doc.medicalRecordId || encodeURIComponent(doc.url);
    navigate(`/summary/${userId}/${fileId}`, { 
        state: { document: doc } 
    });
  };
  
  if (!medicalRecords || medicalRecords.length === 0) {
    return null;
  }
  
  return (
    <CCard className="timeline-card mt-4">
      <CCardHeader className="timeline-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CIcon icon={cilCalendar} size="lg" />
          <h4 style={{ margin: 0, fontWeight: 600 }}>Medical Records Timeline</h4>
        </div>
      </CCardHeader>
      <CCardBody className="timeline-body">
        <div className="timeline-container">
          {Object.entries(groupedRecords).map(([date, records], dateIndex) => (
            <div key={date} className="timeline-date-group">
              <div className="timeline-date-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
                <div className="timeline-date-label">
                  <CIcon icon={cilCalendar} className="timeline-date-icon" />
                  <span className="timeline-date-text">{date}</span>
                  <CBadge color="info" className="timeline-count-badge">
                    {records.length} {records.length === 1 ? 'Record' : 'Records'}
                  </CBadge>
                </div>
              </div>
              <div className="timeline-records">
                {records.map((record, recordIndex) => (
                  <div key={record.medicalRecordId || recordIndex} className="timeline-record-card">
                    <div className="timeline-record-header">
                      <div className="timeline-record-id">
                        <strong>Record ID:</strong> {record.medicalRecordId}
                      </div>
                      <CBadge color={getSeverityColor(record.diagnosis?.severity)} className="badge-modern">
                        {record.diagnosis?.severity || 'N/A'}
                      </CBadge>
                    </div>
                    <div className="timeline-record-content">
                      <div className="timeline-record-item">
                        <span className="timeline-label">Type:</span>
                        <span className="timeline-value">{record.recordType || 'N/A'}</span>
                      </div>
                      <div className="timeline-record-item">
                        <span className="timeline-label">Diagnosis:</span>
                        <span className="timeline-value">{record.diagnosis?.description || 'N/A'}</span>
                      </div>
                      <div className="timeline-record-item">
                        <span className="timeline-label">Symptoms:</span>
                        <span className="timeline-value">{record.symptoms || 'N/A'}</span>
                      </div>
                      <div className="timeline-record-actions">
                        <CButton 
                          color="primary" 
                          size="sm" 
                          onClick={() => handleViewSummary(record)}
                          className="timeline-view-btn"
                        >
                          View Details
                        </CButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CCardBody>
    </CCard>
  );
};

const Reports = ({medicalRecords}) => {
  const navigate = useNavigate();
  const handleViewSummary = (doc) => {
    const userId = getCurrentUserId();
    const fileId = doc.medicalRecordId || encodeURIComponent(doc.url);
    navigate(`/summary/${userId}/${fileId}`, { 
        state: { document: doc } 
    });
};
  return (
         <CCard className="medical-records-card"  style={{marginTop: '20px'}}>
         <CCardHeader className="medical-records-header">
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <CIcon icon={cilDescription} size="lg" />
             <h4 style={{ margin: 0, fontWeight: 600 }}>Medical Records</h4>
           </div>
         </CCardHeader>
         <CCardBody style={{ padding: 0 }}>
           <div className="table-responsive-wrapper">
             <CTable bordered responsive className="modern-table">
               <CTableHead>
                 <CTableRow className="table-header-row">
                   <CTableHeaderCell>Record ID</CTableHeaderCell>
                   <CTableHeaderCell>Record Type</CTableHeaderCell>
                   <CTableHeaderCell>Diagnosis Description</CTableHeaderCell>
                   {/* <CTableHeaderCell>Diagnosis Type</CTableHeaderCell> */}
                   <CTableHeaderCell>Severity</CTableHeaderCell>
                   <CTableHeaderCell>Symptoms</CTableHeaderCell>
                   {/* <CTableHeaderCell>Status</CTableHeaderCell> */}
                   <CTableHeaderCell>Created At</CTableHeaderCell>
                   <CTableHeaderCell>Action</CTableHeaderCell>
                 </CTableRow>
               </CTableHead>
               <CTableBody>
                 {medicalRecords?.map((record, index) => (
                   <CTableRow key={record.medicalRecordId} className="table-row-animated">
                     <CTableDataCell className="fw-semibold">{record.medicalRecordId}</CTableDataCell>
                     <CTableDataCell>{record.recordType}</CTableDataCell>
                     <CTableDataCell className="fw-semibold">{record.diagnosis.description}</CTableDataCell>
                     {/* <CTableDataCell>{record.diagnosis.diagnosisType}</CTableDataCell> */}
                     <CTableDataCell>
                       <CBadge color={getSeverityColor(record.diagnosis.severity)} className="badge-modern">
                         {record.diagnosis.severity}
                       </CBadge>
                     </CTableDataCell>
                     <CTableDataCell>{record.symptoms}</CTableDataCell>
                     {/* <CTableDataCell>
                       <CBadge color={getStatusColor(record.status)} className="badge-modern">
                         {record.status}
                       </CBadge>
                     </CTableDataCell> */}
                     <CTableDataCell className="text-muted">{record.createdAt}</CTableDataCell>
                     <CTableDataCell className="text-muted"><button onClick={() => handleViewSummary(record)} className="btn btn-primary">View</button></CTableDataCell>
                   </CTableRow>
                 ))}
               </CTableBody>
             </CTable>
           </div>
         </CCardBody>
       </CCard>
  )
}


function PatientInfoCard({patientData }) {
  const { name, id, age, bloodGroup, contactNumber,  } = patientData;

  const handleShareOnWhatsApp = () => {
    const currentUrl = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CCard className="patient-info-card">
      <div className="patient-card-background"></div>
      <CCardHeader className="patient-info-header">
        <div className="header-content">
          <div className="header-title-section">
            <CIcon icon={cilBadge} className="header-icon" />
            <h3 className="header-title">User Information</h3>
          </div>
          <CButton 
            color="success" 
            size="sm" 
            onClick={handleShareOnWhatsApp}
            className="share-button"
          >
            <CIcon icon={cilShare} size="sm" />
            <span>Share</span>
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody className="patient-info-body">
        <div className="patient-avatar-section">
          {/* Avatar with enhanced design */}
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <img 
              src={avatar} 
              alt="avatar" 
              className="patient-avatar"
            />
            <div className="avatar-ring"></div>
            <div className="avatar-status-indicator"></div>
          </div>
          {/* Name and Age with enhanced styling */}
          <div className="patient-name-section">
            <div className="name-badge">
              <h2 className="patient-name">{name || 'User Name'}</h2>
            </div>
            <div className="patient-meta">
              <div className="meta-item">
                <span className="meta-label">Age</span>
                <span className="meta-value">{age || 'N/A'}</span>
              </div>
              {bloodGroup && (
                <div className="meta-item">
                  <span className="meta-label">Blood Type</span>
                  <CBadge color="danger" className="blood-badge-enhanced">{bloodGroup}</CBadge>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Info Grid */}
        <div className="patient-info-grid">
          <div className="info-item info-item-enhanced">
            <div className="info-icon-wrapper">
              <CIcon icon={cilBadge} className="info-icon" />
            </div>
            <div className="info-content">
              <span className="info-label">Patient ID</span>
              <span className="info-value">{id || 'N/A'}</span>
            </div>
          </div>
          <div className="info-item info-item-enhanced">
            <div className="info-icon-wrapper">
              <CIcon icon={cilHeart} className="info-icon" />
            </div>
            <div className="info-content">
              <span className="info-label">Blood Group</span>
              <CBadge color="danger" className="blood-badge-enhanced">{bloodGroup || 'N/A'}</CBadge>
            </div>
          </div>
          <div className="info-item info-item-enhanced">
            <div className="info-icon-wrapper">
              <CIcon icon={cilPhone} className="info-icon" />
            </div>
            <div className="info-content">
              <span className="info-label">Contact Number</span>
              <span className="info-value">{contactNumber || 'N/A'}</span>
            </div>
          </div>
        </div>
      </CCardBody>
    </CCard>
  );
}

