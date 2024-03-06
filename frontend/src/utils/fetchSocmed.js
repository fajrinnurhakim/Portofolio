import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_API_URL;
import Swal from "sweetalert2";

export const fetchSocmeds = async () => {
    try {
        const response = await axios.get(`${baseUrl}/socmeds`);
        return response.data;
    } catch (error) {
        console.error("Error fetching socmeds:", error);
        throw error;
    }
};

export const createSocmed = async (socmedData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/socmeds`,
            socmedData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Socmed Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding socmed:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateSocmed = async (socmedId, updatedSocmedData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/socmeds/${socmedId}`,
            updatedSocmedData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Socmed Successfully`,
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

export const deleteSocmed = async (socmedId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/socmeds/${socmedId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Socmed Successfully`,
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

export const fetchSocmedById = async (socmedId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/socmeds/${socmedId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching socmed with ID ${socmedId}:`,
            error
        );
        throw error;
    }
};
