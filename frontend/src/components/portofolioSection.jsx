import React, { useEffect } from "react";
import statePortofolio from "../hooks/portofolio";
import { Link } from "react-router-dom";

const PortofolioSection = () => {
    const { portofolios, loadPortofolios } = statePortofolio();

    useEffect(() => {
        loadPortofolios();
    }, []);

    return (
        <div className="container flex items-center h-auto px-5 py-24 mx-auto space-y-5">
            <div className="w-full space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Portofolio <i className="fa-solid fa-file-contract"></i>
                </h1>
                <div className="w-full p-5 rounded-box bg-base-100">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {portofolios.slice(0, 4).map((portofolio, index) => (
                            <div
                                key={index}
                                className="shadow-xl card bg-base-300"
                            >
                                <figure>
                                    <img
                                        src={portofolio.portofolio_image}
                                        alt="portofolioImage"
                                        className="w-full h-40"
                                    />
                                </figure>
                                <div className="p-4 card-body">
                                    <h2 className="text-base font-bold md:card-title">
                                        {portofolio.portofolio_name}
                                    </h2>
                                    <div className="flex space-x-2">
                                        <img
                                            src={portofolio.tech_stack1}
                                            alt="portofolio1"
                                            className="h-5"
                                        />
                                        <img
                                            src={portofolio.tech_stack2}
                                            alt="portofolio1"
                                            className="h-5"
                                        />
                                        <img
                                            src={portofolio.tech_stack3}
                                            alt="portofolio1"
                                            className="h-5"
                                        />
                                    </div>
                                    <p className="text-sm">
                                        {" "}
                                        {portofolio.description.length > 50
                                            ? portofolio.description.substring(
                                                  0,
                                                  50
                                              ) + "..."
                                            : portofolio.description}
                                    </p>
                                    <div className="flex space-x-1">
                                        <a
                                            href={portofolio.link_github}
                                            className="w-1/2 btn btn-square"
                                        >
                                            Repository{" "}
                                            <i className="fa-solid fa-code"></i>
                                        </a>
                                        <a
                                            href={portofolio.link_demo}
                                            className="w-1/2 btn btn-square"
                                        >
                                            Preview{" "}
                                            <i class="fa-solid fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link to="/portofolio" className="btn">
                            View More{" "}
                            <i className="fa-solid fa-external-link-alt"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortofolioSection;
