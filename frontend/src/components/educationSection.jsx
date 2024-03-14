import React, { useEffect, useState } from "react";
import stateEducation from "../hooks/education";
import stateAward from "../hooks/award";

const EducationSection = () => {
    const { educations, loadEducations } = stateEducation();
    const { awards, loadAwards } = stateAward();
    const [showAllEducations, setShowAllEducations] = useState(false);
    const [showAllAwards, setShowAllAwards] = useState(false);

    useEffect(() => {
        loadEducations();
        loadAwards();
    }, []);

    const toggleEducations = () => {
        setShowAllEducations(!showAllEducations);
    };

    const toggleAwards = () => {
        setShowAllAwards(!showAllAwards);
    };

    return (
        <div className="container flex items-center h-auto px-5 py-24 mx-auto space-y-5">
            <div className="w-full space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Educations <i className="fa-solid fa-user-graduate"></i>
                </h1>

                <div className="flex items-center">
                    <div className="hidden w-1/3 md:inline">
                        <p className="text-2xl font-semibold ">
                            Educations{" "}
                            <i className="fa-solid fa-graduation-cap"></i> &
                            Achievments <i className="fa-solid fa-award"></i>
                        </p>
                        <p>
                            This is some of the education as well as awards and
                            certificates obtained during formal and non-formal
                            education
                        </p>
                    </div>

                    <div className="w-auto p-5 md:w-2/3 rounded-box bg-base-100">
                        <div className="flex space-x-2">
                            <div className="w-1/2">
                                <h3 className="text-2xl font-semibold text-center">
                                    Educations{" "}
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </h3>
                                {educations
                                    .sort(
                                        (a, b) =>
                                            new Date(b.start_date) -
                                            new Date(a.start_date)
                                    )
                                    .slice(
                                        0,
                                        showAllEducations
                                            ? educations.length
                                            : 4
                                    )
                                    .map((education, index) => (
                                        <ul
                                            key={index}
                                            className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                                        >
                                            <li>
                                                <div className="timeline-middle">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>

                                                <div
                                                    className={
                                                        index % 2 === 0
                                                            ? "timeline-start text-start md:text-end"
                                                            : "timeline-end text-start md:text-start"
                                                    }
                                                >
                                                    <time className="font-mono text-sm italic">
                                                        {education.start_date} -{" "}
                                                        {education.end_date}
                                                    </time>

                                                    <div
                                                        className={
                                                            index % 2 === 0
                                                                ? "flex justify-start md:justify-end"
                                                                : "flex justify-start md:justify-start"
                                                        }
                                                    >
                                                        <div className="flex items-center">
                                                            <img
                                                                src={
                                                                    education.education_image
                                                                }
                                                                alt="educationImage"
                                                                className="h-4 me-2"
                                                            />

                                                            <p>
                                                                {
                                                                    education.institution_education
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="text-sm font-bold">
                                                        {
                                                            education.education_name
                                                        }
                                                    </div>

                                                    <div className="text-sm">
                                                        {
                                                            education.type_education
                                                        }{" "}
                                                        education
                                                    </div>
                                                </div>
                                                <hr />
                                            </li>
                                        </ul>
                                    ))}

                                {!showAllEducations &&
                                    educations.length > 4 && (
                                        <button onClick={toggleEducations}>
                                            Read more
                                        </button>
                                    )}
                            </div>

                            <div className="w-1/2">
                                <p className="text-2xl font-semibold text-center">
                                    Achievements{" "}
                                    <i className="fa-solid fa-award"></i>
                                </p>

                                {awards
                                    .sort(
                                        (a, b) =>
                                            new Date(b.win_date) -
                                            new Date(a.win_date)
                                    )
                                    .slice(0, showAllAwards ? awards.length : 4)
                                    .map((award, index) => (
                                        <ul
                                            key={index}
                                            className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                                        >
                                            <li>
                                                <div className="timeline-middle">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>

                                                <div
                                                    className={
                                                        index % 2 === 0
                                                            ? "timeline-start text-start md:text-end"
                                                            : "timeline-end text-start md:text-start"
                                                    }
                                                >
                                                    <time className="font-mono text-sm italic">
                                                        {award.win_date}
                                                    </time>
                                                    <div>
                                                        {
                                                            award.institution_award
                                                        }
                                                    </div>
                                                    <div className="text-sm font-bold">
                                                        {award.award_name}
                                                    </div>
                                                </div>

                                                <hr />
                                            </li>
                                        </ul>
                                    ))}
                                {!showAllAwards && awards.length > 4 && (
                                    <button onClick={toggleAwards}>
                                        Read more
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
