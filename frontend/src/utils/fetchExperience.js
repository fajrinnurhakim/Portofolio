import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_API_URL;
import Swal from "sweetalert2";

export const fetchExperiences = async () => {
    try {
        const response = await axios.get(`${baseUrl}/experiences`);
        return response.data;
    } catch (error) {
        console.error("Error fetching experiences:", error);
        throw error;
    }
};

export const createExperience = async (experienceData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/experiences`,
            experienceData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Experience Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding experience:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateExperience = async (experienceId, updatedExperienceData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/experiences/${experienceId}`,
            updatedExperienceData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Experience Successfully`,
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

export const deleteExperience = async (experienceId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/experiences/${experienceId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Experience Successfully`,
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

export const fetchExperienceById = async (experienceId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/experiences/${experienceId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching experience with ID ${experienceId}:`,
            error
        );
        throw error;
    }
};
