import axios from "axios";
const baseUrl = "http://localhost:8000";
import Swal from "sweetalert2";

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${baseUrl}/blogs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};

export const createBlog = async (BlogData) => {
    try {
        const newBlogData = new FormData();
        for(let name in BlogData){
            let value = BlogData[name];
            if(value === '')value = null;
            newBlogData.append(name, value);
        }
        const response = await axios.post(`${baseUrl}/blogs`, newBlogData);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Blog Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding Blog:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateBlog = async (BlogId, updatedBlogData) => {
    try {
        const newBlogData = new FormData();
        for(let name in updatedBlogData){
            let value = updatedBlogData[name];
            if(value === '')value = null;
            newBlogData.append(name, value);
        }
        const response = await axios.put(
            `${baseUrl}/blogs/${BlogId}`,
            newBlogData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Blog Successfully`,
        });
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const deleteBlog = async (BlogId) => {
    try {
        const response = await axios.delete(`${baseUrl}/blogs/${BlogId}`);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Blog Successfully`,
        });
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const fetchBlogById = async (BlogId) => {
    try {
        const response = await axios.get(`${baseUrl}/blogs/${BlogId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching Blog with ID ${BlogId}:`, error);
        throw error;
    }
};
