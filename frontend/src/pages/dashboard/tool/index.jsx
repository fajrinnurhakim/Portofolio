import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateTool from "../../../hooks/tool";
import { Helmet } from "react-helmet";
import Footer from "../../../components/footer";

function Tool() {
    const {
        tools,
        showModal,
        newToolData,
        updateIndex,
        updateToolData,
        loadTools,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateTool,
        handleUpdateTool,
        handleOpenUpdateModal,
        handleDeleteTool,
        setShowModal,
        setUpdateIndex,
        setUpdateToolData,
    } = stateTool();

    useEffect(() => {
        loadTools();
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tools | Fajrin Nurhakim</title>
            </Helmet>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Tools</h3>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                >
                    Create
                </button>
            </section>
            <section id="table" className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>Tool Name</th>
                                <th>Tool Image</th>
                                <th>Tool Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tools
                                .sort(
                                    (a, b) =>
                                        new Date(b.updatedAt) -
                                        new Date(a.updatedAt)
                                )
                                .map((tool, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{tool.tool_name}</td>
                                        <td>
                                            <img
                                                src={tool.tool_image}
                                                alt="tool_image"
                                                className="w-12"
                                            />
                                        </td>
                                        <td>{tool.tool_level}</td>
                                        <td className="flex justify-center space-x-2">
                                            <button
                                                className="btn btn-accent"
                                                onClick={() =>
                                                    handleOpenUpdateModal(index)
                                                }
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() =>
                                                    handleDeleteTool(tool.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="p-6 bg-white rounded-lg">
                        <h2 className="mb-4 text-xl font-bold">
                            {updateIndex !== null
                                ? "Update Tool"
                                : "Create New Tool"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="tool_name"
                            >
                                Tool Name
                            </label>
                            <input
                                type="text"
                                id="tool_name"
                                name="tool_name"
                                value={
                                    updateIndex !== null
                                        ? updateToolData.tool_name
                                        : newToolData.tool_name
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="tool_image"
                            >
                                Tool Image
                            </label>
                            <input
                                type="text"
                                id="tool_image"
                                name="tool_image"
                                value={
                                    updateIndex !== null
                                        ? updateToolData.tool_image
                                        : newToolData.tool_image
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="tool_level"
                            >
                                Tool Level
                            </label>
                            <input
                                type="text"
                                id="tool_level"
                                name="tool_level"
                                value={
                                    updateIndex !== null
                                        ? updateToolData.tool_level
                                        : newToolData.tool_level
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={
                                    updateIndex !== null
                                        ? handleUpdateTool
                                        : handleCreateTool
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateToolData({
                                        tool_name: "",
                                        tool_image: "",
                                        tool_level: "",
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Tool;
