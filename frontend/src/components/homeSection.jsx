import React, { useEffect } from "react";
import stateProfile from "../hooks/profile";

const HomeSection = () => {
    const { profiles, loadProfiles } = stateProfile();

    useEffect(() => {
        loadProfiles();
    }, []);

    return (
        <div className="container flex items-center h-screen p-5 mx-auto ">
            {profiles.map((profile) => (
                <>
                    <div className="flex-row w-full space-y-3 md:w-1/2">
                        <p className="text-xl font-bold ">hi there</p>
                        <h1 className="font-bold text-7xl md:text-9xl ">
                            {profile.name}
                        </h1>
                        <p className="text-neutral-content">
                            Combining expertise in developing captivating user
                            interfaces with a keen attention to detail to ensure
                            optimal product quality
                        </p>
                        <a
                            href={profile.link_cv}
                            className="btn btn-outline"
                            download="Fajrin Nurhakim-CV-FE.pdf"
                        >
                            Curriculum Vitae{" "}
                            <span>
                                <i className="fa-solid fa-file-invoice"></i>
                            </span>
                        </a>
                    </div>
                    <div className="justify-end hidden w-1/2 lg:inline-flex">
                        <span>
                            <img
                                src={profile.image}
                                alt="image"
                                className="w-80 h-96"
                            />
                        </span>
                    </div>
                </>
            ))}
        </div>
    );
};

export default HomeSection;
