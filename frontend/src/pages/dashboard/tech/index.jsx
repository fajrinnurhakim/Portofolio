import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateTech from "../../../hooks/tech";

function Tech() {
    const {
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
    } = stateTech();

    useEffect(() => {
        loadTeches();
    }, []);

    return (
        <div>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Teches</h3>
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
                                <th>Tech Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teches.map((tech, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{tech.tech_name}</td>
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
                                                handleDeleteTech(tech.id)
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
                                ? "Update Tech"
                                : "Create New Tech"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="tech_name"
                            >
                                Tech Name
                            </label>
                            <input
                                type="text"
                                id="tech_name"
                                name="tech_name"
                                value={
                                    updateIndex !== null
                                        ? updateTechData.tech_name
                                        : newTechData.tech_name
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={
                                    updateIndex !== null
                                        ? handleUpdateTech
                                        : handleCreateTech
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateTechData({
                                        tech_name: "",
                                        institution_tech: "",
                                        type_tech: "",
                                        start_date: "",
                                        end_date: "",
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tech;
