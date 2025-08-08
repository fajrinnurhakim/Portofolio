import { useEffect, useState } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateBlog from "../../../hooks/blog";
import { Helmet } from "react-helmet";
import Footer from "../../../components/footer";

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

    const [previewImages, setPreviewImages] = useState({
        hero: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(null);

    const handleFilePreview = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImages(prev => ({
                    ...prev,
                    [fieldName]: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const resetPreviews = () => {
        setPreviewImages({
            hero: null,
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            image6: null,
        });
    };

    const handleCreateWithLoading = async () => {
        setIsLoading(true);
        try {
            await handleCreateBlog();
            setShowModal(false);
            resetPreviews();
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateWithLoading = async () => {
        setIsLoading(true);
        try {
            await handleUpdateBlog();
            setShowModal(false);
            setUpdateIndex(null);
            resetPreviews();
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteWithLoading = async (id) => {
        setIsDeleting(id);
        try {
            await handleDeleteBlog(id);
        } finally {
            setIsDeleting(null);
        }
    };

    useEffect(() => {
        loadBlogs();
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs | Fajrin Nurhakim</title>
            </Helmet>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Blogs</h3>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                >
                    Create
                </button>
            </section>
            <section id="table" className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>Hero</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Content</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs
                                .sort(
                                    (a, b) =>
                                        new Date(b.updatedAt) -
                                        new Date(a.updatedAt)
                                )
                                .map((blog, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <img
                                                src={blog.hero}
                                                alt="tool_image"
                                                className="w-12"
                                            />
                                        </td>
                                        <td>{blog.title}</td>
                                        <td>{blog.description}</td>
                                        <td>{blog.content}</td>
                                        <td>{blog.date}</td>
                                        <td className="flex justify-center space-x-2">
                                            <button
                                                className="btn btn-accent"
                                                onClick={() =>
                                                    handleOpenUpdateModal(index)
                                                }
                                            >
                                                Update
                                            </button>
                                            <button
                                                className={`btn btn-secondary ${isDeleting === blog.id ? 'opacity-75' : ''}`}
                                                onClick={() =>
                                                    handleDeleteWithLoading(blog.id)
                                                }
                                                disabled={isDeleting === blog.id}
                                            >
                                                {isDeleting === blog.id ? (
                                                    <>
                                                        <span className="loading loading-spinner loading-xs"></span>
                                                        Deleting...
                                                    </>
                                                ) : (
                                                    "Delete"
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {showModal && (
                <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 overflow-auto p-[30px]">
                    <div className="p-6 bg-white rounded-lg w-[90%] lg:w-[50%]">
                        <h2 className="mb-4 text-xl font-bold">
                            {updateIndex !== null
                                ? "Update Blog"
                                : "Create New Blog"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="title"
                            >
                                Blog Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={
                                    updateIndex !== null
                                        ? updateBlogData.title
                                        : newBlogData.title
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
                                htmlFor="hero"
                            >
                                Blog Hero
                            </label>
                            {previewImages.hero || (updateIndex !== null && blogs[updateIndex]?.hero) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.hero || blogs[updateIndex]?.hero} 
                                        alt="Hero preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="hero"
                                name="hero"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'hero');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="description"
                            >
                                Blog Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={
                                    updateIndex !== null
                                        ? updateBlogData.description
                                        : newBlogData.description
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered min-h-[100px]"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="content"
                            >
                                Blog Content
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={
                                    updateIndex !== null
                                        ? updateBlogData.content
                                        : newBlogData.content
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered min-h-[100px]"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="date"
                            >
                                Blog Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={
                                    updateIndex !== null
                                        ? updateBlogData.date
                                        : newBlogData.date
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
                                htmlFor="image1"
                            >
                                Blog Image 1
                            </label>
                            {previewImages.image1 || (updateIndex !== null && blogs[updateIndex]?.image1) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.image1 || blogs[updateIndex]?.image1} 
                                        alt="Image 1 preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="image1"
                                name="image1"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'image1');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image2"
                            >
                                Blog Image 2
                            </label>
                            {previewImages.image2 || (updateIndex !== null && blogs[updateIndex]?.image2) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.image2 || blogs[updateIndex]?.image2} 
                                        alt="Image 2 preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="image2"
                                name="image2"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'image2');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image3"
                            >
                                Blog Image 3
                            </label>
                            {previewImages.image3 || (updateIndex !== null && blogs[updateIndex]?.image3) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.image3 || blogs[updateIndex]?.image3} 
                                        alt="Image 3 preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="image3"
                                name="image3"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'image3');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image4"
                            >
                                Blog Image 4
                            </label>
                            {previewImages.image4 || (updateIndex !== null && blogs[updateIndex]?.image4) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.image4 || blogs[updateIndex]?.image4} 
                                        alt="Image 4 preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="image4"
                                name="image4"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'image4');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image5"
                            >
                                Blog Image 5
                            </label>
                            {previewImages.image5 || (updateIndex !== null && blogs[updateIndex]?.image5) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.image5 || blogs[updateIndex]?.image5} 
                                        alt="Image 5 preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="image5"
                                name="image5"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'image5');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image6"
                            >
                                Blog Image 6
                            </label>
                            {previewImages.image6 || (updateIndex !== null && blogs[updateIndex]?.image6) ? (
                                <div className="mb-2">
                                    <img 
                                        src={previewImages.image6 || blogs[updateIndex]?.image6} 
                                        alt="Image 6 preview" 
                                        className="max-w-full h-32 object-contain"
                                    />
                                </div>
                            ) : null}
                            <input
                                type="file"
                                id="image6"
                                name="image6"
                                onChange={(e) => {
                                    if (updateIndex !== null) {
                                        handleUpdateInputChange(e);
                                    } else {
                                        handleInputChange(e);
                                    }
                                    handleFilePreview(e, 'image6');
                                }}
                                className="w-full px-3 py-2 input input-bordered"
                                required={updateIndex === null}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className={`btn btn-primary flex items-center gap-2 ${isLoading ? 'text-[black]' : ''}`}
                                onClick={
                                    updateIndex !== null
                                        ? handleUpdateWithLoading
                                        : handleCreateWithLoading
                                }
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="loading loading-spinner loading-xs"></span>
                                        {updateIndex !== null ? "Updating..." : "Creating..."}
                                    </>
                                ) : (
                                    updateIndex !== null ? "Update" : "Create"
                                )}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateBlogData({
                                        title: "",
                                        hero: "",
                                        date: "",
                                        description: "",
                                        content: "",
                                        image1: "",
                                        image2: "",
                                        image3: "",
                                        image4: "",
                                        image5: "",
                                        image6: "",
                                    });
                                    resetPreviews();
                                }}
                                disabled={isLoading}
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