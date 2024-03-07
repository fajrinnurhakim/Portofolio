import axios from "axios";
const baseUrl = "https://fajrin-api.vercel.app";
import Swal from "sweetalert2";

export const fetchAwards = async () => {
    try {
        const response = await axios.get(`${baseUrl}/awards`);
        return response.data;
    } catch (error) {
        console.error("Error fetching awards:", error);
        throw error;
    }
};

export const createAward = async (awardData) => {
    try {
        const response = await axios.post(`${baseUrl}/awards`, awardData);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Award Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding award:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateAward = async (awardId, updatedAwardData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/awards/${awardId}`,
            updatedAwardData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Award Successfully`,
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

export const deleteAward = async (awardId) => {
    try {
        const response = await axios.delete(`${baseUrl}/awards/${awardId}`);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Award Successfully`,
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

export const fetchAwardById = async (awardId) => {
    try {
        const response = await axios.get(`${baseUrl}/awards/${awardId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching award with ID ${awardId}:`, error);
        throw error;
    }
};
