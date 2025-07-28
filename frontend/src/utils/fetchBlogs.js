import axios from 'axios';
const baseUrl = 'http://localhost:8000';
import Swal from 'sweetalert2';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/blogs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(`${baseUrl}/blogs`, blogData);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `Create Blog Successfully`,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `${error.message}`,
    });
    throw error;
  }
};

export const updateBlog = async (blogId, updatedBlogData) => {
  try {
    const response = await axios.put(
      `${baseUrl}/blogs/${blogId}`,
      updatedBlogData
    );
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `Update Blog Successfully`,
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `${error.message}`,
    });
    throw error;
  }
};

export const deleteBlog = async (blogId) => {
  try {
    const response = await axios.delete(`${baseUrl}/blogs/${blogId}`);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `Delete Blog Successfully`,
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `${error.message}`,
    });
    throw error;
  }
};

export const fetchBlogById = async (blogId) => {
  try {
    const response = await axios.get(`${baseUrl}/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with ID ${blogId}:`, error);
    throw error;
  }
};
