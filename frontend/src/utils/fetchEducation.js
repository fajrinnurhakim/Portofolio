import axios from "axios";
const baseUrl = "https://fajrin-api.vercel.app";
import Swal from "sweetalert2";

export const fetchEducations = async () => {
    try {
        const response = await axios.get(`${baseUrl}/educations`);
        return response.data;
    } catch (error) {
        console.error("Error fetching educations:", error);
        throw error;
    }
};

export const createEducation = async (educationData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/educations`,
            educationData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Education Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding education:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateEducation = async (educationId, updatedEducationData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/educations/${educationId}`,
            updatedEducationData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Education Successfully`,
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

export const deleteEducation = async (educationId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/educations/${educationId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Education Successfully`,
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

export const fetchEducationById = async (educationId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/educations/${educationId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching education with ID ${educationId}:`,
            error
        );
        throw error;
    }
};
