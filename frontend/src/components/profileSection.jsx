import React, { useEffect } from "react";
import stateProfile from "../hooks/profile";

const ProfileSection = () => {
    const { profiles, loadProfiles } = stateProfile();

    useEffect(() => {
        loadProfiles();
    }, []);

    return (
        <div className="container flex items-center h-screen p-5 mx-auto space-y-5">
            <div className="space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Profile <i class="fa-solid fa-id-badge"></i>
                </h1>

                {profiles.map((profile) => (
                    <div className="flex items-center">
                        <div className="flex w-1/2 justify-left">
                            <img
                                src={profile.image_two}
                                alt="image_two"
                                className="w-80 h-96"
                            />
                        </div>
                        <div className="flex-row content-center w-1/2 space-y-3">
                            <p className="text-xl font-bold md:text-2xl ">
                                Hello i'm {profile.name}
                            </p>
                            <p className="font-medium ">
                                <i className="fa-solid fa-location-dot"></i>{" "}
                                {profile.address}
                            </p>
                            <p className="font-medium text-neutral-content">
                                {profile.main_role}
                            </p>
                            <p className="text-justify text-neutral-content">
                                {profile.description}
                            </p>
                            <div className="flex space-x-2">
                                <div className="w-1/3 shadow-xl card card-compact bg-base-content">
                                    <div className="text-center text-black card-body">
                                        <i class="fa-solid fa-star"></i>
                                        <h2 className="text-xl font-bold">
                                            {profile.year_experience} +
                                        </h2>
                                        <p>Year of experience</p>
                                    </div>
                                </div>
                                <div className="w-1/3 shadow-xl card card-compact bg-base-content">
                                    <div className="text-center text-black card-body">
                                        <i class="fa-solid fa-microchip"></i>
                                        <h2 className="text-xl font-bold">
                                            {profile.tech_stack} +
                                        </h2>
                                        <p>Framework & Tech Stack Use</p>
                                    </div>
                                </div>
                                <div className="w-1/3 shadow-xl card card-compact bg-base-content">
                                    <div className="text-center text-black card-body">
                                        <i class="fa-solid fa-sheet-plastic"></i>
                                        <h2 className="text-xl font-bold">
                                            {profile.year_experience} +
                                        </h2>
                                        <p>Successed Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSection;
