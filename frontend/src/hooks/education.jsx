import { useState } from "react";
import {
    fetchEducations,
    createEducation,
    updateEducation,
    deleteEducation,
} from "../utils/fetchEducation";

function stateEducation() {
    const [educations, setEducations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newEducationData, setNewEducationData] = useState({
        education_name: "",
        education_image: "",
        institution_education: "",
        type_education: "",
        start_date: "",
        end_date: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateEducationData, setUpdateEducationData] = useState({
        education_name: "",
        education_image: "",
        institution_education: "",
        type_education: "",
        start_date: "",
        end_date: "",
    });
    const [loading, setLoading] = useState(false);
    const loadEducations = async () => {
        try {
            setLoading(true);
            const data = await fetchEducations();
            setEducations(data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading educations:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEducationData({
            ...newEducationData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateEducationData({
            ...updateEducationData,
            [name]: value,
        });
    };

    const handleCreateEducation = async () => {
        try {
            await createEducation(newEducationData);
            setShowModal(false);
            loadEducations();
            setNewEducationData({
                education_name: "",
                education_image: "",
                institution_education: "",
                type_education: "",
                start_date: "",
                end_date: "",
            });
        } catch (error) {
            console.error("Error creating education:", error);
        }
    };

    const handleUpdateEducation = async () => {
        try {
            const id = educations[updateIndex].id;
            const updatedData = updateEducationData;
            await updateEducation(id, updatedData);
            setShowModal(false);
            loadEducations();
            setUpdateIndex(null);
            setUpdateEducationData({
                education_name: "",
                education_image: "",
                institution_education: "",
                type_education: "",
                start_date: "",
                end_date: "",
            });
        } catch (error) {
            console.error("Error updating education:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateEducationData({
            education_name: educations[index].education_name,
            education_image: educations[index].education_image,
            institution_education: educations[index].institution_education,
            type_education: educations[index].type_education,
            start_date: educations[index].start_date,
            end_date: educations[index].end_date,
        });
    };

    const handleDeleteEducation = async (id) => {
        try {
            await deleteEducation(id);
            loadEducations();
        } catch (error) {
            console.error("Error deleting education:", error);
        }
    };

    return {
        educations,
        showModal,
        newEducationData,
        updateIndex,
        updateEducationData,
        loadEducations,
        loading,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateEducation,
        handleUpdateEducation,
        handleOpenUpdateModal,
        handleDeleteEducation,
        setShowModal,
        setUpdateIndex,
        setUpdateEducationData,
    };
}

export default stateEducation;
