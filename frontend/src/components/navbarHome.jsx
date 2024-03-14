import { useEffect, useState } from "react";
import stateProfile from "../hooks/profile";
import { motion } from "framer-motion";

function NavbarHome() {
    const { profiles, loadProfiles } = stateProfile();
    const [activeMenu, setActiveMenu] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    useEffect(() => {
        loadProfiles();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setIsDropdownOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };


    return (
        <motion.div
            className={`shadow-lg bg-base-100 ${
                isScrolled ? "fixed top-0 left-0 right-0 z-10" : ""
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex mx-auto navbar">
                <div className="w-1/3 navbar-start">
                    <a
                        href="/"
                        className="hidden text-xl text-white btn btn-ghost md:inline-flex"
                    >
                        {profiles.map((profile, index) => (
                            <span key={index}>
                                <img
                                    src={profile.image}
                                    alt="image"
                                    className="w-5 h-6"
                                />
                            </span>
                        ))}
                        Fajrin Nurhakim
                    </a>
                    
                    <details className="inline-flex dropdown md:hidden">
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
                        
                        <motion.ul
                            className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96"
                            transition={{ duration: 1 }}
                        >
                            <li>
                                <a
                                    href="#home"
                                    className={
                                        activeMenu === "home" ? "active" : ""
                                    }
                                    onClick={() => handleMenuClick("home")}
                                >
                                    <div className="w-4">
                                        <i className="fa-solid fa-house"></i>{" "}
                                    </div>
                                    Home
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#profiles"
                                    className={
                                        activeMenu === "profiles"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => handleMenuClick("profiles")}
                                >
                                    <div className="w-4">
                                        <i className="fa-solid fa-id-badge"></i>{" "}
                                    </div>
                                    Profiles
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#skills"
                                    className={
                                        activeMenu === "skills" ? "active" : ""
                                    }
                                    onClick={() => handleMenuClick("skills")}
                                >
                                    {" "}
                                    <div className="w-4">
                                        <i className="fa-solid fa-gears"></i>{" "}
                                    </div>
                                    Skills
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#educations"
                                    className={
                                        activeMenu === "educations"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleMenuClick("educations")
                                    }
                                >
                                    <div className="w-4">
                                        <i className="fa-solid fa-user-graduate"></i>
                                    </div>
                                    Educations
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#experiences"
                                    className={
                                        activeMenu === "experiences"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleMenuClick("experiences")
                                    }
                                >
                                    <div className="w-4">
                                        <i className="fa-solid fa-briefcase"></i>
                                    </div>
                                    Experiences
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#portofolios"
                                    className={
                                        activeMenu === "portofolios"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleMenuClick("portofolios")
                                    }
                                >
                                    <div className="w-4">
                                        <i className="fa-solid fa-file-contract"></i>
                                    </div>
                                    Portofolios
                                </a>
                            </li>
                        </motion.ul>
                    </details>
                </div>

                <div className="w-2/3 navbar-end">
                    <a className="flex text-xl btn btn-ghost md:hidden">
                        {profiles.map((profile) => (
                            <span key={profile.id}>
                                <img
                                    src={profile.image}
                                    alt="image"
                                    className="w-5 h-6"
                                />
                            </span>
                        ))}
                        Fajrin Nurhakim
                    </a>
                    
                    <ul className="hidden space-x-2 menu menu-horizontal md:inline-flex md:justify-end">
                        <li>
                            <a
                                href="#home"
                                className={
                                    activeMenu === "home" ? "active" : ""
                                }
                                onClick={() => handleMenuClick("home")}
                            >
                                Home
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#profiles"
                                className={
                                    activeMenu === "profiles" ? "active" : ""
                                }
                                onClick={() => handleMenuClick("profiles")}
                            >
                                Profiles
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#skills"
                                className={
                                    activeMenu === "skills" ? "active" : ""
                                }
                                onClick={() => handleMenuClick("skills")}
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#educations"
                                className={
                                    activeMenu === "educations" ? "active" : ""
                                }
                                onClick={() => handleMenuClick("educations")}
                            >
                                Educations
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#experiences"
                                className={
                                    activeMenu === "experiences" ? "active" : ""
                                }
                                onClick={() => handleMenuClick("experiences")}
                            >
                                Experiences
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#portofolios"
                                className={
                                    activeMenu === "portofolios" ? "active" : ""
                                }
                                onClick={() => handleMenuClick("portofolios")}
                            >
                                Portofolios
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default NavbarHome;
