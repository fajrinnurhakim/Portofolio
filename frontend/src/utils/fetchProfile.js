import axios from "axios";
const baseUrl = "https://fajrin-api.vercel.app";
import Swal from "sweetalert2";

export const fetchProfiles = async () => {
    try {
        const response = await axios.get(`${baseUrl}/profiles`);
        return response.data;
    } catch (error) {
        console.error("Error fetching profiles:", error);
        throw error;
    }
};

export const createProfile = async (profileData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/profiles`,
            profileData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Profile Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding profile:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateProfile = async (profileId, updatedProfileData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/profiles/${profileId}`,
            updatedProfileData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Profile Successfully`,
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

export const deleteProfile = async (profileId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/profiles/${profileId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Profile Successfully`,
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

export const fetchProfileById = async (profileId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/profiles/${profileId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching profile with ID ${profileId}:`,
            error
        );
        throw error;
    }
};
