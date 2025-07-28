import { useState } from 'react';
import {
  fetchBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../utils/fetchBlogs';

function stateBlog() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBlogData, setNewBlogData] = useState({
    title_blog: '',
    description_blog: '',
    date_blog: '',
  });
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateBlogData, setUpdateBlogData] = useState({
    title_blog: '',
    description_blog: '',
    date_blog: '',
  });

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      console.error('Error loading blogs:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBlogData({
      ...newBlogData,
      [name]: value,
    });
  };

  const handleUpdateInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateBlogData({
      ...updateBlogData,
      [name]: value,
    });
  };

  const handleCreateBlog = async () => {
    try {
      await createBlog(newBlogData);
      setShowModal(false);
      loadBlogs();
      setNewBlogData({
        title_blog: '',
        description_blog: '',
        date_blog: '',
      });
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleUpdateBlog = async () => {
    try {
      const id = blogs[updateIndex].id;
      const updatedData = updateBlogData;
      await updateBlog(id, updatedData);
      setShowModal(false);
      loadBlogs();
      setUpdateIndex(null);
      setUpdateBlogData({
        title_blog: '',
        description_blog: '',
        date_blog: '',
      });
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleOpenUpdateModal = (index) => {
    setUpdateIndex(index);
    setShowModal(true);
    setUpdateBlogData({
      title_blog: blogs[index].title_blog,
      description_blog: blogs[index].description_blog,
      date_blog: blogs[index].date_blog,
    });
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlog(id);
      loadBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return {
    blogs,
    showModal,
    newBlogData,
    updateIndex,
    updateBlogData,
    loadBlogs,
    handleInputChange,
    handleUpdateInputChange,
    handleCreateBlog,
    handleUpdateBlog,
    handleOpenUpdateModal,
    handleDeleteBlog,
    setShowModal,
    setUpdateIndex,
    setUpdateBlogData,
  };
}

export default stateBlog;
