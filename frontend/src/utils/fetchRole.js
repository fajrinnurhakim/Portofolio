import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_API_URL;
import Swal from "sweetalert2";

export const fetchRoles = async () => {
    try {
        const response = await axios.get(`${baseUrl}/roles`);
        return response.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        throw error;
    }
};

export const createRole = async (roleData) => {
    try {
        const response = await axios.post(
            `${baseUrl}/roles`,
            roleData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Create Role Successfully`,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding role:", error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.message}`,
        });
        throw error;
    }
};

export const updateRole = async (roleId, updatedRoleData) => {
    try {
        const response = await axios.put(
            `${baseUrl}/roles/${roleId}`,
            updatedRoleData
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Update Role Successfully`,
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

export const deleteRole = async (roleId) => {
    try {
        const response = await axios.delete(
            `${baseUrl}/roles/${roleId}`
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Delete Role Successfully`,
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

export const fetchRoleById = async (roleId) => {
    try {
        const response = await axios.get(
            `${baseUrl}/roles/${roleId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching role with ID ${roleId}:`,
            error
        );
        throw error;
    }
};
