import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_API_URL;
import Swal from "sweetalert2";

export const fetchTools = async () => {
    try {
        const response = await axios.get(`${baseUrl}/tools`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tools:", error);
        throw error;
    }
};

export const createTool = async (toolData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/tools`,
            toolData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Tool Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding tool:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateTool = async (toolId, updatedToolData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/tools/${toolId}`,
            updatedToolData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Tool Successfully`,
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

export const deleteTool = async (toolId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/tools/${toolId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Tool Successfully`,
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

export const fetchToolById = async (toolId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/tools/${toolId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching tool with ID ${toolId}:`,
            error
        );
        throw error;
    }
};
