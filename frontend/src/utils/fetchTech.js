import axios from "axios";
const baseUrl = "https://fajrin-api.vercel.app";
import Swal from "sweetalert2";

export const fetchTeches = async () => {
    try {
        const response = await axios.get(`${baseUrl}/teches`);
        return response.data;
    } catch (error) {
        console.error("Error fetching teches:", error);
        throw error;
    }
};

export const createTech = async (techData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/teches`,
            techData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Tech Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding tech:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateTech = async (techId, updatedTechData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/teches/${techId}`,
            updatedTechData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Tech Successfully`,
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

export const deleteTech = async (techId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/teches/${techId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Tech Successfully`,
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

export const fetchTechById = async (techId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/teches/${techId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching tech with ID ${techId}:`,
            error
        );
        throw error;
    }
};
