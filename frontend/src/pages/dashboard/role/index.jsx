import { useEffect } from "react";
import NavbarDashboard from "../../../components/navbarDashboard";
import stateRole from "../../../hooks/role";

function Role() {
    const {
        roles,
        showModal,
        newRoleData,
        updateIndex,
        updateRoleData,
        loadRoles,
        handleInputChange,
        handleUpdateInputChange,
        handleCreateRole,
        handleUpdateRole,
        handleOpenUpdateModal,
        handleDeleteRole,
        setShowModal,
        setUpdateIndex,
        setUpdateRoleData,
    } = stateRole();

    useEffect(() => {
        loadRoles();
    }, []);

    return (
        <div>
            <NavbarDashboard />
            <section
                id="title"
                className="container flex justify-between mx-auto mt-2"
            >
                <h3 className="text-4xl font-bold">Roles</h3>
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
                                <th>Role Name</th>
                                <th>Role Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((role, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{role.role_name}</td>
                                    <td>{role.role_level}</td>
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
                                                handleDeleteRole(role.id)
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
                                ? "Update Role"
                                : "Create New Role"}
                        </h2>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold"
                                htmlFor="role_name"
                            >
                                Role Name
                            </label>
                            <input
                                type="text"
                                id="role_name"
                                name="role_name"
                                value={
                                    updateIndex !== null
                                        ? updateRoleData.role_name
                                        : newRoleData.role_name
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
                                htmlFor="role_level"
                            >
                                Role Level
                            </label>
                            <input
                                type="text"
                                id="role_level"
                                name="role_level"
                                value={
                                    updateIndex !== null
                                        ? updateRoleData.role_level
                                        : newRoleData.role_level
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
                                        ? handleUpdateRole
                                        : handleCreateRole
                                }
                            >
                                {updateIndex !== null ? "Update" : "Create"}
                            </button>
                            <button
                                className="ml-2 btn btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setUpdateIndex(null);
                                    setUpdateRoleData({
                                        role_name: "",
                                        role_level: "",
                                        institution_role: "",
                                        type_role: "",
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

export default Role;
