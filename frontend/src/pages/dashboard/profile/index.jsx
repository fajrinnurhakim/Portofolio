import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateProfile from "../../../hooks/profile";

function Profile() {
    const {
        profiles,
        showModal,
        newProfileData,
        updateIndex,
        updateProfileData,
        loadProfiles,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateProfile,
        handleUpdateProfile,
        handleOpenUpdateModal,
        handleDeleteProfile,
        setShowModal,
        setUpdateIndex,
        setUpdateProfileData,
    } = stateProfile();

    useEffect(() => {
        loadProfiles();
    }, []);

    return (
        <div>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Profiles</h3>
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
                                <th>Name</th>
                                <th>Address</th>
                                <th>Main Role</th>
                                <th>Description</th>
                                <th>Link cv</th>
                                <th>Image</th>
                                <th>Image Two</th>
                                <th>Year Experience</th>
                                <th>Tech Stack</th>
                                <th>Success Project</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.map((profile, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{profile.name}</td>
                                    <td>{profile.address}</td>
                                    <td>{profile.main_role}</td>
                                    <td>{profile.description}</td>
                                    <td>{profile.link_cv}</td>
                                    <td>{profile.image}</td>
                                    <td>{profile.image_two}</td>
                                    <td>{profile.year_experience}</td>
                                    <td>{profile.tech_stack}</td>
                                    <td>{profile.success_project}</td>
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
                                                handleDeleteProfile(profile.id)
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
                                ? "Update Profile"
                                : "Create New Profile"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.name
                                        : newProfileData.name
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="address"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.address
                                        : newProfileData.address
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="main_role"
                            >
                                Main Role
                            </label>
                            <input
                                type="text"
                                id="main_role"
                                name="main_role"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.main_role
                                        : newProfileData.main_role
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.description
                                        : newProfileData.description
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="link_cv"
                            >
                                Link CV
                            </label>
                            <input
                                type="text"
                                id="link_cv"
                                name="link_cv"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.link_cv
                                        : newProfileData.link_cv
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image"
                            >
                                Image
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.image
                                        : newProfileData.image
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="image_two"
                            >
                                Image Two
                            </label>
                            <input
                                type="text"
                                id="image_two"
                                name="image_two"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.image_two
                                        : newProfileData.image_two
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="year_experience"
                            >
                                Year Experience
                            </label>
                            <input
                                type="number"
                                id="year_experience"
                                name="year_experience"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.year_experience
                                        : newProfileData.year_experience
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="tech_stack"
                            >
                                Tech Stack
                            </label>
                            <input
                                type="number"
                                id="tech_stack"
                                name="tech_stack"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.tech_stack
                                        : newProfileData.tech_stack
                                }
                                onChange={
                                    updateIndex !== null
                                        ? handleUpdateInputChange
                                        : handleInputChange
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="success_project"
                            >
                                Success Project
                            </label>
                            <input
                                type="number"
                                id="success_project"
                                name="success_project"
                                value={
                                    updateIndex !== null
                                        ? updateProfileData.success_project
                                        : newProfileData.success_project
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
                                        ? handleUpdateProfile
                                        : handleCreateProfile
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateProfileData({
                                        profile_name: "",
                                        institution_profile: "",
                                        type_profile: "",
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

export default Profile;
