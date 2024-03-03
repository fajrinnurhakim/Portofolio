import React, { useEffect } from "react";
import stateEducation from "../hooks/education";
import stateAward from "../hooks/award";

const EducationSection = () => {
    const { educations, loadEducations } = stateEducation();
    const { awards, loadAwards } = stateAward();

    useEffect(() => {
        loadEducations();
        loadAwards();
    }, []);
    return (
        <div className="container flex items-center h-screen p-5 mx-auto space-y-5">
            <div className="w-full space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center underline md:text-4xl decoration-wavy">
                    Education
                </h1>
                <div className="w-auto p-5 rounded-box bg-base-100">
                    <div className="flex space-x-2">
                        <div className="w-1/3">
                            <p className="text-2xl font-semibold ">
                                Educations{" "}
                                <i class="fa-solid fa-graduation-cap"></i> &
                                Achievment <i class="fa-solid fa-award"></i>
                            </p>
                            <p>
                                This is some of the education as well as awards
                                and certificates obtained during formal and
                                non-formal education
                            </p>
                        </div>
                        <div className="w-1/3 ">
                            <h3 className="text-2xl font-semibold text-center">
                                Educations{" "}
                                <i class="fa-solid fa-graduation-cap"></i>
                            </h3>
                            {educations.map((education, index) => (
                                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                    <li>
                                        <div class="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            className={
                                                index % 2 === 0
                                                    ? "timeline-start text-end"
                                                    : "timeline-end text-start"
                                            }
                                        >
                                            <time class="font-mono italic text-sm">
                                                {education.start_date} -{" "}
                                                {education.end_date}
                                            </time>
                                            <div
                                                className={
                                                    index % 2 === 0
                                                        ? "flex text-end"
                                                        : "flex text-start"
                                                }
                                            >
                                                <span>
                                                    <img
                                                        src={
                                                            education.education_image
                                                        }
                                                        alt="educationImage"
                                                        className="w-4 h-5 me-2"
                                                    />
                                                </span>
                                                <p>
                                                    {
                                                        education.institution_education
                                                    }
                                                </p>
                                            </div>
                                            <div class="text-sm font-bold">
                                                {education.education_name}
                                            </div>
                                            <div class="text-sm">
                                                {education.type_education}{" "}
                                                education
                                            </div>
                                        </div>
                                        <hr />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="w-1/3">
                            <p className="text-2xl font-semibold text-center">
                                Achievment <i class="fa-solid fa-award"></i>
                            </p>
                            {awards.map((award, index) => (
                                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                    <li>
                                        <div class="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            className={
                                                index % 2 === 0
                                                    ? "timeline-start text-end"
                                                    : "timeline-end text-start"
                                            }
                                        >
                                            <time class="font-mono italic text-sm">
                                                {award.win_date}
                                            </time>
                                            <div>{award.institution_award}</div>
                                            <div class="text-sm font-bold">
                                                {award.award_name}
                                            </div>
                                        </div>
                                        <hr />
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
