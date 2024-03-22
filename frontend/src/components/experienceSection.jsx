import React, { useEffect, useRef } from "react";
import stateExperience from "../hooks/experience";
import Fade from "react-reveal/Fade";

const ExperienceSection = () => {
    const { experiences, loadExperiences } = stateExperience();
    const snapContainer = useRef(null);

    useEffect(() => {
        loadExperiences();
    }, []);

    const handlePrev = () => {
        if (snapContainer.current) {
            snapContainer.current.scrollBy({
                left: -snapContainer.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (snapContainer.current) {
            snapContainer.current.scrollBy({
                left: snapContainer.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="container h-auto px-5 py-24 mx-auto space-y-5">
            <Fade>
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Experiences <i className="fa-solid fa-briefcase"></i>
                </h1>
            </Fade>
            <Fade right>
                <div className="w-full h-auto p-5 rounded-box bg-base-300">
                    <div className="flex flex-row justify-end mb-2">
                        <button
                            className="btn btn-circle btn-ghost"
                            onClick={handlePrev}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <button
                            className="btn btn-ghost btn-circle"
                            onClick={handleNext}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    <div
                        ref={snapContainer}
                        className="flex flex-row space-x-2 overflow-hidden snap-x-mandatory smooth-scroll"
                    >
                        {experiences
                            .sort(
                                (a, b) =>
                                    new Date(b.start_date) -
                                    new Date(a.start_date)
                            )
                            .slice(0, 5)
                            .map((experience, index) => (
                                <div key={index} className="">
                                    <div className="h-64 shadow-xl w-80 card bg-base-100">
                                        <div className="p-4 card-body">
                                            <h2 className="card-title">
                                                {experience.experience_name}
                                                <div className="badge badge-secondary">
                                                    {experience.type}
                                                </div>
                                            </h2>

                                            <p className="font-bold">
                                                {experience.institution_name}
                                            </p>

                                            <div className="flex space-x-2">
                                                <img
                                                    src={experience.tech_stack1}
                                                    alt="experience1"
                                                    className="h-5"
                                                />

                                                <img
                                                    src={experience.tech_stack2}
                                                    alt="experience1"
                                                    className="h-5"
                                                />

                                                <img
                                                    src={experience.tech_stack3}
                                                    alt="experience1"
                                                    className="h-5"
                                                />
                                            </div>

                                            <p>
                                                {experience
                                                    .experience_description
                                                    .length > 75
                                                    ? experience.experience_description.substring(
                                                          0,
                                                          75
                                                      ) + "..."
                                                    : experience.experience_description}
                                            </p>

                                            <div className="justify-start card-actions">
                                                <div className="badge badge-outline">
                                                    {experience.start_date}/
                                                    {experience.end_date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <a href="/experiences">
                            <div className="flex items-center justify-center h-64 p-4 shadow-xl w-80 card bg-base-100 card-body">
                                <div>
                                    <p className="text-center">
                                        More experiences{" "}
                                        <i className="fa-solid fa-external-link-alt"></i>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ExperienceSection;
