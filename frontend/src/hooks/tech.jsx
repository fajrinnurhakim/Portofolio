import { useState } from "react";
import {
    fetchTeches,
    createTech,
    updateTech,
    deleteTech,
} from "../utils/fetchTech";

function stateTech() {
    const [teches, setTeches] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTechData, setNewTechData] = useState({
        tech_name: "",
        tech_image: "",
        tech_level: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateTechData, setUpdateTechData] = useState({
        tech_name: "",
        tech_image: "",
        tech_level: "",
    });

    const loadTeches = async () => {
        try {
            const data = await fetchTeches();
            setTeches(data);
        } catch (error) {
            console.error("Error loading teches:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTechData({
            ...newTechData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateTechData({
            ...updateTechData,
            [name]: value,
        });
    };

    const handleCreateTech = async () => {
        try {
            await createTech(newTechData);
            setShowModal(false);
            loadTeches();
            setNewTechData({
                tech_name: "",
                tech_image: "",
                tech_level: "",
            });
        } catch (error) {
            console.error("Error creating tech:", error);
        }
    };

    const handleUpdateTech = async () => {
        try {
            const id = teches[updateIndex].id;
            const updatedData = updateTechData;
            await updateTech(id, updatedData);
            setShowModal(false);
            loadTeches();
            setUpdateIndex(null);
            setUpdateTechData({
                tech_name: "",
                tech_image: "",
                tech_level: "",
            });
        } catch (error) {
            console.error("Error updating tech:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateTechData({
            tech_name: teches[index].tech_name,
            tech_image: teches[index].tech_image,
            tech_level: teches[index].tech_level,
        });
    };

    const handleDeleteTech = async (id) => {
        try {
            await deleteTech(id);
            loadTeches();
        } catch (error) {
            console.error("Error deleting tech:", error);
        }
    };

    return {
        teches,
        showModal,
        newTechData,
        updateIndex,
        updateTechData,
        loadTeches,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateTech,
        handleUpdateTech,
        handleOpenUpdateModal,
        handleDeleteTech,
        setShowModal,
        setUpdateIndex,
        setUpdateTechData,
    };
}

export default stateTech;
