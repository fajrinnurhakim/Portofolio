import { useEffect } from "react";
import stateProfile from "../hooks/profile";

function NavbarDashboard() {
    const { profiles, loadProfiles } = stateProfile();
    useEffect(() => {
        loadProfiles();
    }, []);
    return (
        <div className="shadow bg-base-100">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <details className="dropdown">
                        <summary className="m-1 btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li>
                                <a href="/dashboard/awards">Awards</a>
                            </li>
                            <li>
                                <a href="/dashboard/educations">Educations</a>
                            </li>
                            <li>
                                <a href="/dashboard/experiences">Experiences</a>
                            </li>
                            <li>
                                <a href="/dashboard/portofolios">Portofolios</a>
                            </li>
                            <li>
                                <a href="/dashboard/profiles">Profiles</a>
                            </li>
                            <li>
                                <a href="/dashboard/socmeds">Socmed</a>
                            </li>
                            <li>
                                <a href="/dashboard/teches">Teches</a>
                            </li>
                            <li>
                                <a href="/dashboard/tools">Tools</a>
                            </li>
                        </ul>
                    </details>
                </div>
                <div className="navbar-center">
                    <a className="text-xl btn btn-ghost">Dashboard</a>
                </div>
                <div className="navbar-end">
                    <a href="/" className="text-xl text-white btn btn-ghost">
                        {profiles.map((profile, index) => (
                            <span key={index}>
                                <img
                                    src={profile.image}
                                    alt="image"
                                    className="w-5 h-6"
                                />
                            </span>
                        ))}
                        <span className="hidden md:inline">
                            Fajrin Nurhakim
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavbarDashboard;
