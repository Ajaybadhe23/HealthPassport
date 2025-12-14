import { getCurrentUserId } from '../context/PatientContext';
import axiosInstance from '../Helper/axiosIntercepter';

/**
 * Upload a document (PDF or image) to the server
 * @param {File} file - The file to upload
 * @param {string} userId - User ID (default: from localStorage)
 * @returns {Promise} - Promise that resolves with the upload response
 */
export const uploadDocument = async (file, userId) => {
  const currentUserId =  getCurrentUserId();
  try {
    // Create FormData to send file as multipart/form-data
    const formData = new FormData();
    formData.append('files', file);

    // Make POST request - axios automatically sets Content-Type to multipart/form-data with boundary
    const response = await axiosInstance.post(`/api/users/${currentUserId}/files/upload`, formData);

    return response.data;
  } catch (error) {
    console.error('Error uploading document:', error);
    throw error;
  }
};

