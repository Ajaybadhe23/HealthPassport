import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import axiosInstance from '../Helper/axiosIntercepter';

const PatientContext = createContext();

// Get userId from localStorage or use default
export const getCurrentUserId = () => {
  return localStorage.getItem('userId') || 'user001';
};

export let currentUserIds = getCurrentUserId();

export const PatientProvider = ({ children }) => {
  const [patientData, setPatientData] = useState({});
  const [reportList, setReportList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reportsLoading, setReportsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update currentUserIds when localStorage changes
  useEffect(() => {
    const updateUserId = () => {
      currentUserIds = getCurrentUserId();
    };
    
    updateUserId();
    // Listen for storage changes (in case userId is updated in another tab)
    window.addEventListener('storage', updateUserId);
    
    return () => {
      window.removeEventListener('storage', updateUserId);
    };
  }, []);


  const getPatientData = useCallback(async (patientId) => {
    setLoading(true);
    setError(null);
    try {
      const userId = patientId || getCurrentUserId();
      const response = await axiosInstance.get(`/user/${userId}`);
      setPatientData(response.data);
      return response.data;
    } catch (err) {
      console.error("Error fetching patient data:", err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getReportList = useCallback(async (userId) => {
    setReportsLoading(true);
    setError(null);
    try {
      let currentUserId = userId || getCurrentUserId();
      
      // If userId not provided, check patientData
      if (!currentUserId) {
        if (patientData?.id) {
          currentUserId = patientData.id;
        } else {
          // Fetch patient data first to get userId
          const defaultUserId = getCurrentUserId();
          const userData = await axiosInstance.get(`/user/${defaultUserId}`);
          setPatientData(userData.data);
          currentUserId = userData.data?.id || defaultUserId;
        }
      }
      
      if (!currentUserId) {
        throw new Error('Unable to get user ID');
      }
      
      const response = await axiosInstance.get(`/api/users/${currentUserId}/files/list`);
      setReportList(response.data);
      return response.data;
    } catch (err) {
      console.error("Error fetching report list:", err);
      setError(err);
      throw err;
    } finally {
      setReportsLoading(false);
    }
  }, [patientData]);

  const clearPatientData = useCallback(() => {
    setPatientData({});
    setReportList([]);
    setError(null);
  }, []);

  const value = {
    patientData,
    setPatientData,
    getPatientData,
    reportList,
    setReportList,
    getReportList,
    reportsLoading,
    clearPatientData,
    loading,
    error,
  };

  return (
    <PatientContext.Provider value={value}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatient must be used within a PatientProvider');
  }
  return context;
};

export default PatientContext;

