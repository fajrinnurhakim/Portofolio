import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateEducation from "../../../hooks/education";

function Education() {
    const {
        educations,
        showModal,
        newEducationData,
        updateIndex,
        updateEducationData,
        loadEducations,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateEducation,
        handleUpdateEducation,
        handleOpenUpdateModal,
        handleDeleteEducation,
        setShowModal,
        setUpdateIndex,
        setUpdateEducationData,
    } = stateEducation();

    useEffect(() => {
        loadEducations();
    }, []);

    return (
        <div>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Educations</h3>
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
                                <th>Education</th>
                                <th>Education Image</th>
                                <th>Institution</th>
                                <th>Type Education</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educations.map((education, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{education.education_name}</td>
                                    <td>{education.education_image}</td>
                                    <td>{education.institution_education}</td>
                                    <td>{education.type_education}</td>
                                    <td>{education.start_date}</td>
                                    <td>{education.end_date}</td>
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
                                                handleDeleteEducation(
                                                    education.id
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
                    <div className="p-6 bg-white rounded-lg">
                        <h2 className="mb-4 text-xl font-bold">
                            {updateIndex !== null
                                ? "Update Education"
                                : "Create New Education"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="education_name"
                            >
                                Education Name
                            </label>
                            <input
                                type="text"
                                id="education_name"
                                name="education_name"
                                value={
                                    updateIndex !== null
                                        ? updateEducationData.education_name
                                        : newEducationData.education_name
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
                                htmlFor="education_image"
                            >
                                Education Image
                            </label>
                            <input
                                type="text"
                                id="education_image"
                                name="education_image"
                                value={
                                    updateIndex !== null
                                        ? updateEducationData.education_image
                                        : newEducationData.education_image
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
                                htmlFor="institution_education"
                            >
                                Institution Education
                            </label>
                            <input
                                type="text"
                                id="institution_education"
                                name="institution_education"
                                value={
                                    updateIndex !== null
                                        ? updateEducationData.institution_education
                                        : newEducationData.institution_education
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
                                htmlFor="type_education"
                            >
                                Education Type
                            </label>
                            <select
                                id="type_education"
                                name="type_education"
                                value={
                                    updateIndex !== null
                                        ? updateEducationData.type_education
                                        : newEducationData.type_education
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 select select-bordered"
                            >
                                <option>Option</option>
                                <option value="formal">Formal</option>
                                <option value="informal">Informal</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="start_date"
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="start_date"
                                name="start_date"
                                value={
                                    updateIndex !== null
                                        ? updateEducationData.start_date
                                        : newEducationData.start_date
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
                                htmlFor="end_date"
                            >
                                End Date
                            </label>
                            <input
                                type="date"
                                id="end_date"
                                name="end_date"
                                value={
                                    updateIndex !== null
                                        ? updateEducationData.end_date
                                        : newEducationData.end_date
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 input input-borderedd"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={
                                    updateIndex !== null
                                        ? handleUpdateEducation
                                        : handleCreateEducation
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateEducationData({
                                        education_name: "",
                                        education_image: "",
                                        institution_education: "",
                                        type_education: "",
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

export default Education;
