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



import { cilBadge, cilHeart, cilPhone } from '@coreui/icons'; // Icons themselves
import { CIcon } from '@coreui/icons-react'; // Correct package
import {
  CBadge,
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
import avatar from 'src/assets/images/avatars/8.jpg'
import axiosInstance from '../../Helper/axiosIntercepter';
import { useEffect, useState } from 'react';


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
  const [patientData, setPatientData] = useState({})
  async function getPatientData() {
    try {
      const response = await axiosInstance.get("/user/123");
      setPatientData(response.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  }
  const { medicalRecords } = patientData;
  
  
  
  useEffect(()=>{
    getPatientData()
  },[])

  return (
    <div style={{ padding: "20px", background: "#f4f5f7", minHeight: "100vh" }}>
      {/* Patient Info */}
     <PatientInfoCard patientData={patientData}/>

      {/* Medical Records */}
      <CCard>
        <CCardHeader style={{ backgroundColor: "#212631", color: "#fff" }}>
          Medical Records
        </CCardHeader>
        <CCardBody>
          <CTable bordered hover responsive>
            <CTableHead>
              <CTableRow style={{ backgroundColor: "#e9ecef" }}>
                <CTableHeaderCell>Record ID</CTableHeaderCell>
                <CTableHeaderCell>Record Type</CTableHeaderCell>
                <CTableHeaderCell>Diagnosis Name</CTableHeaderCell>
                <CTableHeaderCell>Diagnosis Type</CTableHeaderCell>
                <CTableHeaderCell>Severity</CTableHeaderCell>
                <CTableHeaderCell>Symptoms</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Created At</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {medicalRecords?.map((record) => (
                <CTableRow key={record.medicalRecordId}>
                  <CTableDataCell>{record.medicalRecordId}</CTableDataCell>
                  <CTableDataCell>{record.recordType}</CTableDataCell>
                  <CTableDataCell>{record.diagnosis.diagnosisName}</CTableDataCell>
                  <CTableDataCell>{record.diagnosis.diagnosisType}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={getSeverityColor(record.diagnosis.severity)}>
                      {record.diagnosis.severity}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>{record.symptoms}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={getStatusColor(record.status)}>
                      {record.status}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>{record.createdAt}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  );
}






function PatientInfoCard({patientData }) {
  const { name, id, age, bloodGroup, contactNumber,  } = patientData;


  return (
    <CCard style={{ 
      background: "linear-gradient(135deg, #11998e 0%, #3ed778 100%)", 
      color: "#fff", 
      borderRadius: "12px",
      padding: "20px",
      marginBottom:20
    }}>
      <CCardHeader style={{ background: "transparent", borderBottom: "none" }}>
        <h3 style={{ margin: 0 }}>User Information</h3>
      </CCardHeader>
      <CCardBody>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
          {/* Avatar */}
          <img 
            src={avatar} 
            alt="avatar" 
            style={{ width: 150, height: 150, borderRadius: "50%", border: "3px solid #fff" }} 
          />
          {/* Name and Age */}
          <div>
            <h2 style={{ margin: 0 }}>{name}</h2>
            <p style={{ margin: "5px 0", fontSize: "1.1rem" }}>Age: {age}</p>
          </div>
        </div>

        {/* Other Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1rem" }}>
          <div style={styles.infoRow}>
            <CIcon icon={cilBadge} style={styles.icon} />
            <span><strong>ID:</strong> {id}</span>
          </div>
          <div style={styles.infoRow}>
            <CIcon icon={cilHeart} style={styles.icon} />
            <span><strong>Blood Group:</strong> <CBadge color="danger">{bloodGroup}</CBadge></span>
          </div>
          <div style={styles.infoRow}>
            <CIcon icon={cilPhone} style={styles.icon} />
            <span><strong>Contact:</strong> {contactNumber}</span>
          </div>
        </div>
      </CCardBody>
    </CCard>
  );
}

// Styles
const styles = {
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "1.2rem",
    color: "#fff",
  },
};
