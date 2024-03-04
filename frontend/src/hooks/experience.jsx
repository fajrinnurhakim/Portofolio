import { useState } from "react";
import {
    fetchExperiences,
    createExperience,
    updateExperience,
    deleteExperience,
} from "../utils/fetchExperience";

function stateExperience() {
    const [experiences, setExperiences] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newExperienceData, setNewExperienceData] = useState({
        experience_name: "",
        experience_image: "",
        institution_name: "",
        tech_stack1: "",
        tech_stack2: "",
        tech_stack3: "",
        type: "",
        start_date: "",
        end_date: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateExperienceData, setUpdateExperienceData] = useState({
        experience_name: "",
        experience_image: "",
        institution_name: "",
        tech_stack1: "",
        tech_stack2: "",
        tech_stack3: "",
        type: "",
        start_date: "",
        end_date: "",
    });

    const loadExperiences = async () => {
        try {
            const data = await fetchExperiences();
            setExperiences(data);
        } catch (error) {
            console.error("Error loading experiences:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewExperienceData({
            ...newExperienceData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateExperienceData({
            ...updateExperienceData,
            [name]: value,
        });
    };

    const handleCreateExperience = async () => {
        try {
            await createExperience(newExperienceData);
            setShowModal(false);
            loadExperiences();
            setNewExperienceData({
                experience_name: "",
                experience_image: "",
                institution_name: "",
                tech_stack1: "",
                tech_stack2: "",
                tech_stack3: "",
                type: "",
                start_date: "",
                end_date: "",
            });
        } catch (error) {
            console.error("Error creating experience:", error);
        }
    };

    const handleUpdateExperience = async () => {
        try {
            const id = experiences[updateIndex].id;
            const updatedData = updateExperienceData;
            await updateExperience(id, updatedData);
            setShowModal(false);
            loadExperiences();
            setUpdateIndex(null);
            setUpdateExperienceData({
                experience_name: "",
                experience_image: "",
                institution_name: "",
                tech_stack1: "",
                tech_stack2: "",
                tech_stack3: "",
                type: "",
                start_date: "",
                end_date: "",
            });
        } catch (error) {
            console.error("Error updating experience:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateExperienceData({
            experience_name: experiences[index].experience_name,
            experience_image: experiences[index].experience_image,
            institution_name: experiences[index].institution_name,
            tech_stack1: experiences[index].tech_stack1,
            tech_stack2: experiences[index].tech_stack2,
            tech_stack3: experiences[index].tech_stack3,
            type: experiences[index].type,
            start_date: experiences[index].start_date,
            end_date: experiences[index].end_date,
        });
    };

    const handleDeleteExperience = async (id) => {
        try {
            await deleteExperience(id);
            loadExperiences();
        } catch (error) {
            console.error("Error deleting experience:", error);
        }
    };

    return {
        experiences,
        showModal,
        newExperienceData,
        updateIndex,
        updateExperienceData,
        loadExperiences,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateExperience,
        handleUpdateExperience,
        handleOpenUpdateModal,
        handleDeleteExperience,
        setShowModal,
        setUpdateIndex,
        setUpdateExperienceData,
    };
}

export default stateExperience;
