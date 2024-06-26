import React, { useEffect, useState } from "react";
import stateExperience from "../../hooks/experience";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ExperiencePage = () => {
    const { experiences, loadExperiences } = stateExperience();
    const [currentPage, setCurrentPage] = useState(1);
    const experiencesPerPage = 8;
    const indexOfLastExperience = currentPage * experiencesPerPage;
    const indexOfFirstExperience = indexOfLastExperience - experiencesPerPage;
    const currentExperiences = experiences.slice(
        indexOfFirstExperience,
        indexOfLastExperience
    );
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (experience) => {
        setSelectedExperience(experience);
    };

    const closeModal = () => {
        setSelectedExperience(null);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        loadExperiences();
    }, []);

    return (
        <div className="container h-auto px-5 py-24 mx-auto space-y-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Experiences | Fajrin Nurhakim</title>
            </Helmet>

            <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                Experiences <i className="fa-solid fa-briefcase"></i>
            </h1>

            <div className="w-full p-5 rounded-box bg-base-300">
                <div className="flex justify-start mb-4">
                    <Link to="/" className="btn">
                        <i className="fa-solid fa-arrow-left"></i>
                        Back{" "}
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {currentExperiences
                        .sort(
                            (a, b) =>
                                new Date(b.start_date) - new Date(a.start_date)
                        )
                        .map((experience, index) => (
                            <div key={index} className="">
                                <div className="h-64 shadow-xl card bg-base-100">
                                    <div className="p-4 card-body">
                                        <h2
                                            className="cursor-pointer card-title link link-hover"
                                            onClick={() =>
                                                openModal(experience)
                                            }
                                        >
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
                                            {experience.experience_description
                                                .length > 80
                                                ? experience.experience_description.substring(
                                                      0,
                                                      80
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
                </div>
                <ul className="flex justify-center mt-4 space-x-2">
                    {Array.from({
                        length: Math.ceil(
                            experiences.length / experiencesPerPage
                        ),
                    }).map((_, index) => (
                        <li key={index}>
                            <button
                                className="btn btn-secondary"
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedExperience && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <Fade top>
                        <div className="p-4 space-y-2 rounded-lg bg-base-300 card w-80 md:w-96">
                            <h2 className="text-xl font-bold">
                                {selectedExperience.experience_name}
                                <div className="badge badge-secondary">
                                    {selectedExperience.type}
                                </div>
                            </h2>
                            <p className="font-bold">
                                {selectedExperience.institution_name}
                            </p>

                            <div className="flex space-x-2">
                                <img
                                    src={selectedExperience.tech_stack1}
                                    alt="experience1"
                                    className="h-5"
                                />

                                <img
                                    src={selectedExperience.tech_stack2}
                                    alt="experience1"
                                    className="h-5"
                                />

                                <img
                                    src={selectedExperience.tech_stack3}
                                    alt="experience1"
                                    className="h-5"
                                />
                            </div>
                            <p>{selectedExperience.experience_description}</p>
                            <button
                                onClick={closeModal}
                                className="w-full btn btn-square"
                            >
                                Close
                            </button>
                        </div>
                    </Fade>
                </div>
            )}
        </div>
    );
};

export default ExperiencePage;
