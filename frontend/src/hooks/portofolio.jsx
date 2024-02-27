import { useState } from "react";
import {
    fetchPortofolios,
    createPortofolio,
    updatePortofolio,
    deletePortofolio,
} from "../utils/fetchPortofolio";

function statePortofolio() {
    const [portofolios, setPortofolios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newPortofolioData, setNewPortofolioData] = useState({
        portofolio_name: "",
        tech_stack1: "",
        tech_stack2: "",
        tech_stack3: "",
        description: "",
        link_github: "",
        link_demo: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updatePortofolioData, setUpdatePortofolioData] = useState({
        portofolio_name: "",
        tech_stack1: "",
        tech_stack2: "",
        tech_stack3: "",
        description: "",
        link_github: "",
        link_demo: "",
    });

    const loadPortofolios = async () => {
        try {
            const data = await fetchPortofolios();
            setPortofolios(data);
        } catch (error) {
            console.error("Error loading portofolios:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPortofolioData({
            ...newPortofolioData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatePortofolioData({
            ...updatePortofolioData,
            [name]: value,
        });
    };

    const handleCreatePortofolio = async () => {
        try {
            await createPortofolio(newPortofolioData);
            setShowModal(false);
            loadPortofolios();
            setNewPortofolioData({
                portofolio_name: "",
                tech_stack1: "",
                tech_stack2: "",
                tech_stack3: "",
                description: "",
                link_github: "",
                link_demo: "",
            });
        } catch (error) {
            console.error("Error creating portofolio:", error);
        }
    };

    const handleUpdatePortofolio = async () => {
        try {
            const id = portofolios[updateIndex].id;
            const updatedData = updatePortofolioData;
            await updatePortofolio(id, updatedData);
            setShowModal(false);
            loadPortofolios();
            setUpdateIndex(null);
            setUpdatePortofolioData({
                portofolio_name: "",
                tech_stack1: "",
                tech_stack2: "",
                tech_stack3: "",
                description: "",
                link_github: "",
                link_demo: "",
            });
        } catch (error) {
            console.error("Error updating portofolio:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdatePortofolioData({
            portofolio_name: portofolios[index].portofolio_name,
            tech_stack1: portofolios[index].tech_stack1,
            tech_stack2: portofolios[index].tech_stack2,
            tech_stack3: portofolios[index].tech_stack3,
            description: portofolios[index].description,
            link_github: portofolios[index].link_github,
            link_demo: portofolios[index].link_demo,
        });
    };

    const handleDeletePortofolio = async (id) => {
        try {
            await deletePortofolio(id);
            loadPortofolios();
        } catch (error) {
            console.error("Error deleting portofolio:", error);
        }
    };

    return {
        portofolios,
        showModal,
        newPortofolioData,
        updateIndex,
        updatePortofolioData,
        loadPortofolios,
        handleInputChange,
        handleUpdateInputChange,
        handleCreatePortofolio,
        handleUpdatePortofolio,
        handleOpenUpdateModal,
        handleDeletePortofolio,
        setShowModal,
        setUpdateIndex,
        setUpdatePortofolioData,
    };
}

export default statePortofolio;
