import { useState } from "react";
import {
    fetchSocmeds,
    createSocmed,
    updateSocmed,
    deleteSocmed,
} from "../utils/fetchSocmed";

function stateSocmed() {
    const [socmeds, setSocmeds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newSocmedData, setNewSocmedData] = useState({
        socmed_image: "",
        socmed_link: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateSocmedData, setUpdateSocmedData] = useState({
        socmed_image: "",
        socmed_link: "",
    });

    const loadSocmeds = async () => {
        try {
            const data = await fetchSocmeds();
            setSocmeds(data);
        } catch (error) {
            console.error("Error loading socmeds:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewSocmedData({
            ...newSocmedData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateSocmedData({
            ...updateSocmedData,
            [name]: value,
        });
    };

    const handleCreateSocmed = async () => {
        try {
            await createSocmed(newSocmedData);
            setShowModal(false);
            loadSocmeds();
            setNewSocmedData({
                socmed_image: "",
                socmed_link: "",
            });
        } catch (error) {
            console.error("Error creating socmed:", error);
        }
    };

    const handleUpdateSocmed = async () => {
        try {
            const id = socmeds[updateIndex].id;
            const updatedData = updateSocmedData;
            await updateSocmed(id, updatedData);
            setShowModal(false);
            loadSocmeds();
            setUpdateIndex(null);
            setUpdateSocmedData({
                socmed_image: "",
                socmed_link: "",
            });
        } catch (error) {
            console.error("Error updating socmed:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateSocmedData({
            socmed_image: socmeds[index].socmed_image,
            socmed_link: socmeds[index].socmed_link,
        });
    };

    const handleDeleteSocmed = async (id) => {
        try {
            await deleteSocmed(id);
            loadSocmeds();
        } catch (error) {
            console.error("Error deleting socmed:", error);
        }
    };

    return {
        socmeds,
        showModal,
        newSocmedData,
        updateIndex,
        updateSocmedData,
        loadSocmeds,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateSocmed,
        handleUpdateSocmed,
        handleOpenUpdateModal,
        handleDeleteSocmed,
        setShowModal,
        setUpdateIndex,
        setUpdateSocmedData,
    };
}

export default stateSocmed;
