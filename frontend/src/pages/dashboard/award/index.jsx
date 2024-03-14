import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateAward from "../../../hooks/award";
import { Helmet } from "react-helmet";
import Footer from "../../../components/footer";

function Award() {
    const {
        awards,
        showModal,
        newAwardData,
        updateIndex,
        updateAwardData,
        loadAwards,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateAward,
        handleUpdateAward,
        handleOpenUpdateModal,
        handleDeleteAward,
        setShowModal,
        setUpdateIndex,
        setUpdateAwardData,
    } = stateAward();

    useEffect(() => {
        loadAwards();
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Award | Fajrin Nurhakim</title>
            </Helmet>
            
            <NavbarDashboard />
            
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Awards</h3>
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
                                <th>Award</th>
                                <th>Institution</th>
                                <th>Win Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {awards.map((award, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{award.award_name}</td>
                                    <td>{award.institution_award}</td>
                                    <td>{award.win_date}</td>
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
                                                handleDeleteAward(award.id)
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
                                ? "Update Award"
                                : "Create New Award"}
                        </h2>
                        
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="award_name"
                            >
                                Award Name
                            </label>
                            
                            <input
                                type="text"
                                id="award_name"
                                name="award_name"
                                value={
                                    updateIndex !== null
                                        ? updateAwardData.award_name
                                        : newAwardData.award_name
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
                                htmlFor="institution_award"
                            >
                                Institution
                            </label>
                            
                            <input
                                type="text"
                                id="institution_award"
                                name="institution_award"
                                value={
                                    updateIndex !== null
                                        ? updateAwardData.institution_award
                                        : newAwardData.institution_award
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
                                htmlFor="win_date"
                            >
                                Win Date
                            </label>
                            
                            <input
                                type="date"
                                id="win_date"
                                name="win_date"
                                value={
                                    updateIndex !== null
                                        ? updateAwardData.win_date
                                        : newAwardData.win_date
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
                                        ? handleUpdateAward
                                        : handleCreateAward
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateAwardData({
                                        award_name: "",
                                        institution_award: "",
                                        win_date: "",
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

export default Award;
