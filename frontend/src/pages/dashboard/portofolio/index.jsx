import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import statePortofolio from "../../../hooks/portofolio";
import { Helmet } from "react-helmet";
import Footer from "../../../components/footer";

function Portofolio() {
    const {
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
    } = statePortofolio();

    useEffect(() => {
        loadPortofolios();
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Portofolio | Fajrin Nurhakim</title>
            </Helmet>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Portofolios</h3>
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
                                <th>Portofolio</th>
                                <th>Portofolio Image</th>
                                <th>Tech Stack 1</th>
                                <th>Tech Stack 2</th>
                                <th>Tech Stack 3</th>
                                <th>Description</th>
                                <th>Link Github</th>
                                <th>Link Demo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portofolios.map((portofolio, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{portofolio.portofolio_name}</td>
                                    <td>{portofolio.portofolio_image}</td>
                                    <td>{portofolio.tech_stack1}</td>
                                    <td>{portofolio.tech_stack2}</td>
                                    <td>{portofolio.tech_stack3}</td>
                                    <td>{portofolio.description}</td>
                                    <td>{portofolio.link_github}</td>
                                    <td>{portofolio.link_demo}</td>
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
                                                handleDeletePortofolio(
                                                    portofolio.id
                                                )
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
                    <div className="w-6/12 p-6 bg-white rounded-lg">
                        <h2 className="mb-4 text-xl font-bold">
                            {updateIndex !== null
                                ? "Update Portofolio"
                                : "Create New Portofolio"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="portofolio_name"
                            >
                                Portofolio Name
                            </label>
                            <input
                                type="text"
                                id="portofolio_name"
                                name="portofolio_name"
                                value={
                                    updateIndex !== null
                                        ? updatePortofolioData.portofolio_name
                                        : newPortofolioData.portofolio_name
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
                                htmlFor="portofolio_image"
                            >
                                Portofolio Image
                            </label>
                            <input
                                type="text"
                                id="portofolio_image"
                                name="portofolio_image"
                                value={
                                    updateIndex !== null
                                        ? updatePortofolioData.portofolio_image
                                        : newPortofolioData.portofolio_image
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-bordered"
                            />
                        </div>
                        <div className="flex mb-4 space-x-2">
                            <div className="w-1/3">
                                <label
                                    className="block mb-2 text-sm font-bold"
                                    htmlFor="tech_stack1"
                                >
                                    Tech Stack
                                </label>
                                <input
                                    type="text"
                                    id="tech_stack1"
                                    name="tech_stack1"
                                    value={
                                        updateIndex !== null
                                            ? updatePortofolioData.tech_stack1
                                            : newPortofolioData.tech_stack1
                                    }
                                    onChange={
                                        updateIndex !== null
                                            ? handleUpdateInputChange
                                            : handleInputChange
                                    }
                                    className="w-full px-3 py-2 input input-bordered"
                                />
                            </div>
                            <div className="w-1/3">
                                <label
                                    className="block mb-2 text-sm font-bold"
                                    htmlFor="tech_stack2"
                                >
                                    Tech Stack 2
                                </label>
                                <input
                                    type="text"
                                    id="tech_stack2"
                                    name="tech_stack2"
                                    value={
                                        updateIndex !== null
                                            ? updatePortofolioData.tech_stack2
                                            : newPortofolioData.tech_stack2
                                    }
                                    onChange={
                                        updateIndex !== null
                                            ? handleUpdateInputChange
                                            : handleInputChange
                                    }
                                    className="w-full px-3 py-2 input input-bordered"
                                />
                            </div>

                            <div className="w-1/3">
                                <label
                                    className="block mb-2 text-sm font-bold"
                                    htmlFor="tech_stack3"
                                >
                                    Tech Stack 3
                                </label>
                                <input
                                    type="text"
                                    id="tech_stack3"
                                    name="tech_stack3"
                                    value={
                                        updateIndex !== null
                                            ? updatePortofolioData.tech_stack3
                                            : newPortofolioData.tech_stack3
                                    }
                                    onChange={
                                        updateIndex !== null
                                            ? handleUpdateInputChange
                                            : handleInputChange
                                    }
                                    className="w-full px-3 py-2 input input-bordered"
                                />
                            </div>
                        </div>
                        <div className="flex mb-4 space-x-2"></div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="description"
                            >
                                Deskripsi
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={
                                    updateIndex !== null
                                        ? updatePortofolioData.description
                                        : newPortofolioData.description
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
                                htmlFor="link_github"
                            >
                                Link Github
                            </label>
                            <input
                                type="text"
                                id="link_github"
                                name="link_github"
                                value={
                                    updateIndex !== null
                                        ? updatePortofolioData.link_github
                                        : newPortofolioData.link_github
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
                                htmlFor="link_demo"
                            >
                                Link Demo
                            </label>
                            <input
                                type="text"
                                id="link_demo"
                                name="link_demo"
                                value={
                                    updateIndex !== null
                                        ? updatePortofolioData.link_demo
                                        : newPortofolioData.link_demo
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
                                        ? handleUpdatePortofolio
                                        : handleCreatePortofolio
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdatePortofolioData({
                                        portofolio_name: "",
                                        portofolio_image: "",
                                        institution_portofolio: "",
                                        type_portofolio: "",
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
            <Footer />
        </div>
    );
}

export default Portofolio;
