import { useState } from "react";
import {
    fetchTools,
    createTool,
    updateTool,
    deleteTool,
} from "../utils/fetchTool";

function stateTool() {
    const [tools, setTools] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newToolData, setNewToolData] = useState({
        tool_name: "",
        tool_image: "",
        tool_level: "",
    });
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateToolData, setUpdateToolData] = useState({
        tool_name: "",
        tool_image: "",
        tool_level: "",
    });

    const [loading, setLoading] = useState(false);
    const loadTools = async () => {
        try {
            setLoading(true);
            const data = await fetchTools();
            setTools(data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading tools:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewToolData({
            ...newToolData,
            [name]: value,
        });
    };

    const handleUpdateInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateToolData({
            ...updateToolData,
            [name]: value,
        });
    };

    const handleCreateTool = async () => {
        try {
            await createTool(newToolData);
            setShowModal(false);
            loadTools();
            setNewToolData({
                tool_name: "",
                tool_image: "",
                tool_level: "",
            });
        } catch (error) {
            console.error("Error creating tool:", error);
        }
    };

    const handleUpdateTool = async () => {
        try {
            const id = tools[updateIndex].id;
            const updatedData = updateToolData;
            await updateTool(id, updatedData);
            setShowModal(false);
            loadTools();
            setUpdateIndex(null);
            setUpdateToolData({
                tool_name: "",
                tool_image: "",
                tool_level: "",
            });
        } catch (error) {
            console.error("Error updating tool:", error);
        }
    };

    const handleOpenUpdateModal = (index) => {
        setUpdateIndex(index);
        setShowModal(true);
        setUpdateToolData({
            tool_name: tools[index].tool_name,
            tool_image: tools[index].tool_image,
            tool_level: tools[index].tool_level,
        });
    };

    const handleDeleteTool = async (id) => {
        try {
            await deleteTool(id);
            loadTools();
        } catch (error) {
            console.error("Error deleting tool:", error);
        }
    };

    return {
        tools,
        showModal,
        newToolData,
        updateIndex,
        updateToolData,
        loadTools,
        loading,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateTool,
        handleUpdateTool,
        handleOpenUpdateModal,
        handleDeleteTool,
        setShowModal,
        setUpdateIndex,
        setUpdateToolData,
    };
}

export default stateTool;
