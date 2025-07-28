import { useEffect } from 'react';
import NavbarDashboard from '../../../components/navbarDashboard';
import stateBlog from '../../../hooks/blog';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/footer';

function Blog() {
  const {
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
  } = stateBlog();

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Fajrin Nurhakim</title>
      </Helmet>

      <NavbarDashboard />

      <section
        id="title"
        className="container flex justify-between mx-auto mt-2"
      >
        <h3 className="text-4xl font-bold">Blogs</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Create
        </button>
      </section>

      <section id="table" className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Title</th>
                <th>Descriptiom</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {blogs
                .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                .map((blog, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{blog.title_blog}</td>
                    <td>{blog.description_blog}</td>
                    <td>{blog.date_blog}</td>
                    <td className="flex justify-center space-x-2">
                      <button
                        className="btn btn-accent"
                        onClick={() => handleOpenUpdateModal(index)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              {updateIndex !== null ? 'Update Blog' : 'Create New Blog'}
            </h2>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="title_blog"
              >
                title Blog
              </label>

              <input
                type="text"
                id="title_blog"
                name="title_blog"
                value={
                  updateIndex !== null
                    ? updateBlogData.title_blog
                    : newBlogData.title_blog
                }
                onChange={
                  updateIndex !== null
                    ? handleUpdateInputChange
                    : handleInputChange
                }
                className="w-full px-3 py-2 input input-bordered"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="description_blog"
              >
                description
              </label>

              <input
                type="text"
                id="description_blog"
                name="description_blog"
                value={
                  updateIndex !== null
                    ? updateBlogData.description_blog
                    : newBlogData.description_blog
                }
                onChange={
                  updateIndex !== null
                    ? handleUpdateInputChange
                    : handleInputChange
                }
                className="w-full px-3 py-2 input input-bordered"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="date_blog"
              >
                Date Blog
              </label>

              <input
                type="date"
                id="date_blog"
                name="date_blog"
                value={
                  updateIndex !== null
                    ? updateBlogData.date_blog
                    : newBlogData.date_blog
                }
                onChange={
                  updateIndex !== null
                    ? handleUpdateInputChange
                    : handleInputChange
                }
                className="w-full px-3 py-2 input input-bordered"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                className="btn btn-primary"
                onClick={
                  updateIndex !== null ? handleUpdateBlog : handleCreateBlog
                }
              >
                {updateIndex !== null ? 'Update' : 'Create'}
              </button>

              <button
                className="ml-2 btn btn-secondary"
                onClick={() => {
                  setShowModal(false);
                  setUpdateIndex(null);
                  setUpdateBlogData({
                    title_blog: '',
                    date_blog: '',
                    description_blog: '',
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Blog;
