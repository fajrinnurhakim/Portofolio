import React, { useEffect } from "react";
import stateProfile from "../hooks/profile";
import stateSocmed from "../hooks/socmed";
import { Fade, Slide } from "react-awesome-reveal";

const ProfileSection = () => {
    const { profiles, loadProfiles } = stateProfile();
    const { socmeds, loadSocmeds } = stateSocmed();

    useEffect(() => {
        loadProfiles();
        loadSocmeds();
    }, []);

    return (
        <div className="container flex items-center h-auto p-5 px-5 py-24 mx-auto">
            <div className="space-y-5">
                <Fade>
                    <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                        Profile <i className="fa-solid fa-id-badge"></i>
                    </h1>
                </Fade>

                {profiles.map((profile) => (
                    <div key={profile.id} className="flex items-center">
                        <Slide
                            direction="left"
                            className="hidden w-1/2 justify-left md:inline"
                        >
                            <div>
                                <img
                                    src={profile.image_two}
                                    alt="image_two"
                                    className="w-80 h-96"
                                />
                            </div>
                        </Slide>
                        <Slide
                            direction="right"
                            className="flex-row content-center w-full space-y-3 md:w-1/2"
                        >
                            <div>
                                <p className="text-xl font-bold md:text-2xl ">
                                    Hello i'm {profile.name}
                                </p>
                                <p className="font-medium ">
                                    <i className="fa-solid fa-location-dot"></i>{" "}
                                    {profile.address}
                                </p>
                                <p className="font-medium text-neutral-content">
                                    {profile.main_socmed}
                                </p>
                                <p className="text-justify text-neutral-content">
                                    {profile.description}
                                </p>
                                <div className="flex space-x-2">
                                    <div className="w-1/3 shadow-xl card card-compact bg-base-content">
                                        <div className="text-center text-black card-body">
                                            <i className="fa-solid fa-star"></i>
                                            <h2 className="text-xl font-bold">
                                                {profile.year_experience} +
                                            </h2>
                                            <p>Year of experience</p>
                                        </div>
                                    </div>

                                    <div className="w-1/3 shadow-xl card card-compact bg-base-content">
                                        <div className="text-center text-black card-body">
                                            <i className="fa-solid fa-microchip"></i>
                                            <h2 className="text-xl font-bold">
                                                {profile.tech_stack} +
                                            </h2>
                                            <p>Framework & Tech Stack Use</p>
                                        </div>
                                    </div>

                                    <div className="w-1/3 shadow-xl card card-compact bg-base-content">
                                        <div className="text-center text-black card-body">
                                            <i className="fa-solid fa-sheet-plastic"></i>
                                            <h2 className="text-xl font-bold">
                                                {profile.year_experience} +
                                            </h2>
                                            <p>Successed Projects</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-x-2">
                                    {socmeds.map((socmed, index) => (
                                        <a
                                            key={index}
                                            href={socmed.socmed_link}
                                            className="text-2xl btn btn-ghost btn-circle"
                                        >
                                            <i
                                                className={socmed.socmed_image}
                                            ></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Slide>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSection;
