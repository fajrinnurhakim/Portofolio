import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_API_URL;
import Swal from "sweetalert2";

export const fetchPortofolios = async () => {
    try {
        const response = await axios.get(`${baseUrl}/portofolios`);
        return response.data;
    } catch (error) {
        console.error("Error fetching portofolios:", error);
        throw error;
    }
};

export const createPortofolio = async (portofolioData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/portofolios`,
            portofolioData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Portofolio Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding portofolio:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updatePortofolio = async (portofolioId, updatedPortofolioData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/portofolios/${portofolioId}`,
            updatedPortofolioData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Portofolio Successfully`,
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

export const deletePortofolio = async (portofolioId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/portofolios/${portofolioId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Portofolio Successfully`,
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

export const fetchPortofolioById = async (portofolioId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/portofolios/${portofolioId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching portofolio with ID ${portofolioId}:`,
            error
        );
        throw error;
    }
};
