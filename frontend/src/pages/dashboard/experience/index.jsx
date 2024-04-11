import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateExperience from "../../../hooks/experience";
import { Helmet } from "react-helmet";
import Footer from "../../../components/footer";

function Experience() {
    const {
        experiences,
        showModal,
        newExperienceData,
        updateIndex,
        updateExperienceData,
        loadExperiences,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateExperience,
        handleUpdateExperience,
        handleOpenUpdateModal,
        handleDeleteExperience,
        setShowModal,
        setUpdateIndex,
        setUpdateExperienceData,
    } = stateExperience();

    useEffect(() => {
        loadExperiences();
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Experience | Fajrin Nurhakim</title>
            </Helmet>

            <NavbarDashboard />

            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Experiences</h3>
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
                                <th>Experience</th>
                                <th>Description</th>
                                <th>Institution</th>
                                <th>Tech Stack 1</th>
                                <th>Tech Stack 2</th>
                                <th>Tech Stack 3</th>
                                <th>Type</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {experiences
                                .sort(
                                    (a, b) =>
                                        new Date(b.updatedAt) -
                                        new Date(a.updatedAt)
                                )
                                .map((experience, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{experience.experience_name}</td>
                                        <td>
                                            {experience.experience_description}
                                        </td>
                                        <td>{experience.institution_name}</td>
                                        <td>{experience.tech_stack1}</td>
                                        <td>{experience.tech_stack2}</td>
                                        <td>{experience.tech_stack3}</td>
                                        <td>{experience.type}</td>
                                        <td>{experience.start_date}</td>
                                        <td>{experience.end_date}</td>
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
                                                    handleDeleteExperience(
                                                        experience.id
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
                                ? "Update Experience"
                                : "Create New Experience"}
                        </h2>

                        <div className="flex mb-4 space-x-2">
                            <div className="w-1/2">
                                <label
                                    className="block mb-2 text-sm font-bold"
                                    htmlFor="experience_name"
                                >
                                    Experience Name
                                </label>

                                <input
                                    type="text"
                                    id="experience_name"
                                    name="experience_name"
                                    value={
                                        updateIndex !== null
                                            ? updateExperienceData.experience_name
                                            : newExperienceData.experience_name
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

                            <div className="w-1/2">
                                <label
                                    className="block mb-2 text-sm font-bold"
                                    htmlFor="experience_description"
                                >
                                    Experience Image
                                </label>

                                <input
                                    type="text"
                                    id="experience_description"
                                    name="experience_description"
                                    value={
                                        updateIndex !== null
                                            ? updateExperienceData.experience_description
                                            : newExperienceData.experience_description
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

                            <div className="w-1/2">
                                <label
                                    className="block mb-2 text-sm font-bold"
                                    htmlFor="institution_name"
                                >
                                    Institution Name
                                </label>

                                <input
                                    type="text"
                                    id="institution_name"
                                    name="institution_name"
                                    value={
                                        updateIndex !== null
                                            ? updateExperienceData.institution_name
                                            : newExperienceData.institution_name
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
                        </div>

                        <div className="flex mb-4 space-x-2">
                            <div className="mb-4">
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
                                            ? updateExperienceData.tech_stack1
                                            : newExperienceData.tech_stack1
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
                                            ? updateExperienceData.tech_stack2
                                            : newExperienceData.tech_stack2
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
                                            ? updateExperienceData.tech_stack3
                                            : newExperienceData.tech_stack3
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
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="type"
                            >
                                Type
                            </label>

                            <select
                                id="type"
                                name="type"
                                value={
                                    updateIndex !== null
                                        ? updateExperienceData.type
                                        : newExperienceData.type
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 select select-bordered"
                                required
                            >
                                <option value="">Select</option>
                                <option value="intern">Intern</option>
                                <option value="fulltime">Fultime</option>
                                <option value="freelance">Freelance</option>
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
                                        ? updateExperienceData.start_date
                                        : newExperienceData.start_date
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
                                        ? updateExperienceData.end_date
                                        : newExperienceData.end_date
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
                                        ? handleUpdateExperience
                                        : handleCreateExperience
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>

                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateExperienceData({
                                        experience_name: "",
                                        experience_description: "",
                                        institution_experience: "",
                                        type_experience: "",
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

export default Experience;
