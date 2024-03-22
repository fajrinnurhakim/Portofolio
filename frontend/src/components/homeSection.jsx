import React, { useEffect } from "react";
import stateProfile from "../hooks/profile";
import { Slide } from "react-awesome-reveal";

const HomeSection = () => {
    const { profiles, loadProfiles } = stateProfile();

    useEffect(() => {
        loadProfiles();
    }, []);

    return (
        <>
            {profiles.map((profile, index) => (
                <div
                    key={index}
                    className="container flex items-center h-auto p-5 px-5 py-24 mx-auto"
                >
                    <>
                        <Slide direction="down">
                            <div className="flex-row w-full space-y-5 text-center">
                                <p className="w-auto text-xl font-bold ">
                                    Hello there! 👋🏼
                                </p>

                                <div className="mx-auto w-max">
                                    <h1 className="pr-5 overflow-hidden text-5xl font-bold text-white border-r-4 md:text-8xl animate-typing whitespace-nowrap border-r-white">
                                        {profile.name}
                                    </h1>
                                </div>

                                <p className="w-full mx-auto text-base-content md:w-2/3 ">
                                    Combining expertise in developing
                                    captivating user interfaces with a keen
                                    attention to detail to ensure optimal
                                    product quality, Let's create something
                                    extraordinary together!
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
                        </Slide>
                    </>
                </div>
            ))}
        </>
    );
};

export default HomeSection;
