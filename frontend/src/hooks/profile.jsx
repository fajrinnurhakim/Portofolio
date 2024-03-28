import { useState } from "react";
import {
    fetchProfiles,
    createProfile,
    updateProfile,
    deleteProfile,
} from "../utils/fetchProfile";

function stateProfile() {
    const [profiles, setProfiles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newProfileData, setNewProfileData] = useState({
        name: "",
        address: "",
        main_role: "",
        description: "",
        link_cv: "",
        image: "",
        image_two: "",
        year_experience: "",
        tech_stack: "",
        success_project: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateProfileData, setUpdateProfileData] = useState({
        name: "",
        address: "",
        main_role: "",
        description: "",
        link_cv: "",
        image: "",
        image_two: "",
        year_experience: "",
        tech_stack: "",
        success_project: "",
    });

    const [loading, setLoading] = useState(false);
    const loadProfiles = async () => {
        try {
            setLoading(true);
            const data = await fetchProfiles();
            setProfiles(data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading profiles:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const parsedValue = [
            "year_experience",
            "tech_stack",
            "success_project",
        ].includes(name)
            ? parseInt(value, 10)
            : value;
        setNewProfileData({
            ...newProfileData,
            [name]: parsedValue,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        const parsedValue = [
            "year_experience",
            "tech_stack",
            "success_project",
        ].includes(name)
            ? parseInt(value, 10)
            : value;
        setUpdateProfileData({
            ...updateProfileData,
            [name]: parsedValue,
        });
    };

    const handleCreateProfile = async () => {
        try {
            await createProfile(newProfileData);
            setShowModal(false);
            loadProfiles();
            setNewProfileData({
                name: "",
                address: "",
                main_role: "",
                description: "",
                link_cv: "",
                image: "",
                image_two: "",
                year_experience: "",
                tech_stack: "",
                success_project: "",
            });
        } catch (error) {
            console.error("Error creating profile:", error);
        }
    };

    const handleUpdateProfile = async () => {
        try {
            const id = profiles[updateIndex].id;
            const updatedData = updateProfileData;
            await updateProfile(id, updatedData);
            setShowModal(false);
            loadProfiles();
            setUpdateIndex(null);
            setUpdateProfileData({
                name: "",
                address: "",
                main_role: "",
                description: "",
                link_cv: "",
                image: "",
                image_two: "",
                year_experience: "",
                tech_stack: "",
                success_project: "",
            });
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateProfileData({
            name: profiles[index].name,
            address: profiles[index].address,
            main_role: profiles[index].main_role,
            description: profiles[index].description,
            link_cv: profiles[index].link_cv,
            image: profiles[index].image,
            image_two: profiles[index].image_two,
            year_experience: profiles[index].year_experience,
            tech_stack: profiles[index].tech_stack,
            success_project: profiles[index].success_project,
        });
    };

    const handleDeleteProfile = async (id) => {
        try {
            await deleteProfile(id);
            loadProfiles();
        } catch (error) {
            console.error("Error deleting profile:", error);
        }
    };

    return {
        profiles,
        showModal,
        newProfileData,
        updateIndex,
        updateProfileData,
        loadProfiles,
        loading,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateProfile,
        handleUpdateProfile,
        handleOpenUpdateModal,
        handleDeleteProfile,
        setShowModal,
        setUpdateIndex,
        setUpdateProfileData,
    };
}

export default stateProfile;
