import { useState } from "react";
import {
    fetchAwards,
    createAward,
    updateAward,
    deleteAward,
} from "../utils/fetchAwards";

function stateAward() {
    const [awards, setAwards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newAwardData, setNewAwardData] = useState({
        award_name: "",
        institution_award: "",
        win_date: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateAwardData, setUpdateAwardData] = useState({
        award_name: "",
        institution_award: "",
        win_date: "",
    });

    const [loading, setLoading] = useState(false);
    const loadAwards = async () => {
        try {
            setLoading(true);
            const data = await fetchAwards();
            setAwards(data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading awards:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewAwardData({
            ...newAwardData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateAwardData({
            ...updateAwardData,
            [name]: value,
        });
    };

    const handleCreateAward = async () => {
        try {
            await createAward(newAwardData);
            setShowModal(false);
            loadAwards();
            setNewAwardData({
                award_name: "",
                institution_award: "",
                win_date: "",
            });
        } catch (error) {
            console.error("Error creating award:", error);
        }
    };

    const handleUpdateAward = async () => {
        try {
            const id = awards[updateIndex].id;
            const updatedData = updateAwardData;
            await updateAward(id, updatedData);
            setShowModal(false);
            loadAwards();
            setUpdateIndex(null);
            setUpdateAwardData({
                award_name: "",
                institution_award: "",
                win_date: "",
            });
        } catch (error) {
            console.error("Error updating award:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateAwardData({
            award_name: awards[index].award_name,
            institution_award: awards[index].institution_award,
            win_date: awards[index].win_date,
        });
    };

    const handleDeleteAward = async (id) => {
        try {
            await deleteAward(id);
            loadAwards();
        } catch (error) {
            console.error("Error deleting award:", error);
        }
    };

    return {
        awards,
        showModal,
        newAwardData,
        updateIndex,
        updateAwardData,
        loadAwards,
        loading,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateAward,
        handleUpdateAward,
        handleOpenUpdateModal,
        handleDeleteAward,
        setShowModal,
        setUpdateIndex,
        setUpdateAwardData,
    };
}

export default stateAward;
