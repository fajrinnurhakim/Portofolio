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
    title: '',
    hero: '',
    date: '',
    description: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
  });
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateBlogData, setUpdateBlogData] = useState({
    title: '',
    hero: '',
    date: '',
    description: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
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
    const { name, value, files } = event.target;
    if (event.target.type === 'file') {
      return setNewBlogData({
        ...newBlogData,
        [name]: files[0],
      });
    }
    setNewBlogData({
      ...newBlogData,
      [name]: value,
    });
  };

  const handleUpdateInputChange = (event) => {
    const { name, value, files } = event.target;
    if (event.target.type === 'file') {
      return setUpdateBlogData({
        ...updateBlogData,
        [name]: files[0],
      });
    }
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
        title: '',
        hero: '',
        date: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
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
        title: '',
        hero: '',
        date: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
      });
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleOpenUpdateModal = (index) => {
    setUpdateIndex(index);
    setShowModal(true);
    setUpdateBlogData({
      title: blogs[index].title,
      hero: blogs[index].hero,
      date: blogs[index].date,
      description: blogs[index].description,
      image1: blogs[index].image1,
      image2: blogs[index].image2,
      image3: blogs[index].image3,
      image4: blogs[index].image4,
      image5: blogs[index].image5,
      image6: blogs[index].image6,
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
