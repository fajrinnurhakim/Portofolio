import { useState } from "react";
import {
    fetchRoles,
    createRole,
    updateRole,
    deleteRole,
} from "../utils/fetchRole";

function stateRole() {
    const [roles, setRoles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newRoleData, setNewRoleData] = useState({
        role_name: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateRoleData, setUpdateRoleData] = useState({
        role_name: "",
    });

    const loadRoles = async () => {
        try {
            const data = await fetchRoles();
            setRoles(data);
        } catch (error) {
            console.error("Error loading roles:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewRoleData({
            ...newRoleData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateRoleData({
            ...updateRoleData,
            [name]: value,
        });
    };

    const handleCreateRole = async () => {
        try {
            await createRole(newRoleData);
            setShowModal(false);
            loadRoles();
            setNewRoleData({
                role_name: "",
            });
        } catch (error) {
            console.error("Error creating role:", error);
        }
    };

    const handleUpdateRole = async () => {
        try {
            const id = roles[updateIndex].id;
            const updatedData = updateRoleData;
            await updateRole(id, updatedData);
            setShowModal(false);
            loadRoles();
            setUpdateIndex(null);
            setUpdateRoleData({
                role_name: "",
            });
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateRoleData({
            role_name: roles[index].role_name,
        });
    };

    const handleDeleteRole = async (id) => {
        try {
            await deleteRole(id);
            loadRoles();
        } catch (error) {
            console.error("Error deleting role:", error);
        }
    };

    return {
        roles,
        showModal,
        newRoleData,
        updateIndex,
        updateRoleData,
        loadRoles,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateRole,
        handleUpdateRole,
        handleOpenUpdateModal,
        handleDeleteRole,
        setShowModal,
        setUpdateIndex,
        setUpdateRoleData,
    };
}

export default stateRole;
