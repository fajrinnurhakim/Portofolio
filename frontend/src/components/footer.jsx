import React, { useEffect } from "react";
import stateProfile from "../hooks/profile";
import stateSocmed from "../hooks/socmed";

const Footer = () => {
    const { profiles, loadProfiles } = stateProfile();
    const { socmeds, loadSocmeds } = stateSocmed();

    useEffect(() => {
        loadProfiles();
        loadSocmeds();
    }, []);

    return (
        <div className="bg-neutral">
            <footer className="container flex-row items-center p-2 mx-auto text-center md:flex md:justify-between">
                <p className="flex justify-center">
                    {profiles.map((profile, index) => (
                        <span key={index}>
                            <img
                                src={profile.image}
                                alt="image"
                                className="w-5 h-6 me-2"
                            />
                        </span>
                    ))}
                    Copyright © 2024 - Fajrin Nurhakim
                </p>

                <p className="">
                    {socmeds.map((socmed, index) => (
                        <a
                            key={index}
                            href={socmed.socmed_link}
                            className="text-2xl btn btn-ghost btn-circle"
                        >
                            <i className={socmed.socmed_image}></i>
                        </a>
                    ))}
                </p>
            </footer>
        </div>
    );
};

export default Footer;
