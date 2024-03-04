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
        <div className="container flex items-center h-auto px-5 py-24 mx-auto space-y-5">
            <div className="w-full space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Educations <i class="fa-solid fa-user-graduate"></i>
                </h1>
                <div className="w-auto p-5 rounded-box bg-base-100">
                    <div className="flex space-x-2">
                        <div className="hidden w-1/3 md:inline">
                            <p className="text-2xl font-semibold ">
                                Educations{" "}
                                <i class="fa-solid fa-graduation-cap"></i> &
                                Achievments <i class="fa-solid fa-award"></i>
                            </p>
                            <p>
                                This is some of the education as well as awards
                                and certificates obtained during formal and
                                non-formal education
                            </p>
                        </div>
                        <div className="w-1/2 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center">
                                Educations{" "}
                                <i class="fa-solid fa-graduation-cap"></i>
                            </h3>
                            {educations
                                .sort(
                                    (a, b) =>
                                        new Date(b.start_date) -
                                        new Date(a.start_date)
                                )
                                .map((education, index) => (
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
                                                        ? "timeline-start text-start md:text-end"
                                                        : "timeline-end text-start md:text-start"
                                                }
                                            >
                                                <time class="font-mono italic text-sm">
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
                        <div className="w-1/2 md:w-1/3">
                            <p className="text-2xl font-semibold text-center">
                                Achievments <i class="fa-solid fa-award"></i>
                            </p>
                            {awards
                                .sort(
                                    (a, b) =>
                                        new Date(b.win_date) -
                                        new Date(a.win_date)
                                )
                                .map((award, index) => (
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
                                                        ? "timeline-start text-start md:text-end"
                                                        : "timeline-end text-start md:text-start"
                                                }
                                            >
                                                <time class="font-mono italic text-sm">
                                                    {award.win_date}
                                                </time>
                                                <div>
                                                    {award.institution_award}
                                                </div>
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
