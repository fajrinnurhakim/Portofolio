import React, { useEffect } from "react";
import stateProfile from "../hooks/profile";
import { Slide } from "react-awesome-reveal";
import Type from "./type";

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
                        <Slide
                            direction="up"
                            className="flex-row w-full text-center"
                        >
                            <div className="space-y-5">
                                <p className="w-auto text-xl font-bold ">
                                    Hello there! 👋🏼
                                </p>

                                <Type />

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
