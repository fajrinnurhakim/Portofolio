import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateSocmed from "../../../hooks/socmed";

function Socmed() {
    const {
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
    } = stateSocmed();

    useEffect(() => {
        loadSocmeds();
    }, []);

    return (
        <div>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Social Media</h3>
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
                                <th>Icon</th>
                                <th>Link</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {socmeds.map((socmed, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <i className={socmed.socmed_image}></i>
                                    </td>
                                    <td>{socmed.socmed_link}</td>
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
                                                handleDeleteSocmed(socmed.id)
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
                                ? "Update Socmed"
                                : "Create New Socmed"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="socmed_image"
                            >
                                Icon
                            </label>
                            <input
                                type="text"
                                id="socmed_image"
                                name="socmed_image"
                                value={
                                    updateIndex !== null
                                        ? updateSocmedData.socmed_image
                                        : newSocmedData.socmed_image
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="socmed_link"
                            >
                                Link
                            </label>
                            <input
                                type="text"
                                id="socmed_link"
                                name="socmed_link"
                                value={
                                    updateIndex !== null
                                        ? updateSocmedData.socmed_link
                                        : newSocmedData.socmed_link
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={
                                    updateIndex !== null
                                        ? handleUpdateSocmed
                                        : handleCreateSocmed
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateSocmedData({
                                        socmed_image: "",
                                        socmed_link: "",
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

export default Socmed;
