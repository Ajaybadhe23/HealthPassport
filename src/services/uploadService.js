import axiosInstance from '../Helper/axiosIntercepter';

/**
 * Upload a document (PDF or image) to the server
 * @param {File} file - The file to upload
 * @param {string} userId - User ID (default: 'user001')
 * @returns {Promise} - Promise that resolves with the upload response
 */
export const uploadDocument = async (file, userId = 'user001') => {
  try {
    // Create FormData to send file as multipart/form-data
    const formData = new FormData();
    formData.append('files', file);

    // Make POST request - axios automatically sets Content-Type to multipart/form-data with boundary
    const response = await axiosInstance.post(`/api/users/${userId}/files/upload`, formData);

    return response.data;
  } catch (error) {
    console.error('Error uploading document:', error);
    throw error;
  }
};

