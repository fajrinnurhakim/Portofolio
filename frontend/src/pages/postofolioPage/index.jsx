import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import statePortofolio from "../../hooks/portofolio";
import { useState } from "react";

const PortofolioPage = () => {
    const { portofolios, loadPortofolios } = statePortofolio();
    const [selectedPortofolio, setSelectedPortofolio] = useState(null);

    useEffect(() => {
        loadPortofolios();
    }, []);

    const openModal = (portofolio) => {
        setSelectedPortofolio(portofolio);
    };

    const closeModal = () => {
        setSelectedPortofolio(null);
    };

    return (
        <div className="container flex items-center h-auto px-5 py-24 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Portofolios | Fajrin Nurhakim</title>
            </Helmet>
            <div className="w-full space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Portofolio <i className="fa-solid fa-file-contract"></i>
                </h1>
                <div className="w-full p-5 rounded-box bg-base-300">
                    <div className="flex justify-start mb-4">
                        <Link to="/" className="btn">
                            <i class="fa-solid fa-arrow-left"></i>
                            Back{" "}
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {portofolios.map((portofolio, index) => (
                            <div
                                key={index}
                                className="shadow-xl card bg-base-100"
                            >
                                <figure>
                                    <img
                                        src={portofolio.portofolio_image}
                                        alt="portofolioImage"
                                        className="w-full h-40"
                                    />
                                </figure>
                                <div className="p-4 card-body">
                                    <h2
                                        className="text-base font-bold cursor-pointer md:card-title link-hover link"
                                        onClick={() => openModal(portofolio)}
                                    >
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
                </div>
            </div>
            {selectedPortofolio && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="p-4 space-y-2 rounded-lg bg-base-300 w-96 card">
                        <figure>
                            <img
                                src={selectedPortofolio.portofolio_image}
                                alt="portofolioImage"
                                className="w-full h-48"
                            />
                        </figure>
                        <h2 className="text-base font-bold">
                            {selectedPortofolio.portofolio_name}
                        </h2>
                        <div className="flex space-x-2">
                            <img
                                src={selectedPortofolio.tech_stack1}
                                alt="portofolio1"
                                className="h-5"
                            />
                            <img
                                src={selectedPortofolio.tech_stack2}
                                alt="portofolio1"
                                className="h-5"
                            />
                            <img
                                src={selectedPortofolio.tech_stack3}
                                alt="portofolio1"
                                className="h-5"
                            />
                        </div>
                        <p>{selectedPortofolio.description}</p>
                        <div className="flex space-x-1">
                            <a
                                href={selectedPortofolio.link_github}
                                className="w-1/2 btn btn-square"
                            >
                                Repository <i className="fa-solid fa-code"></i>
                            </a>
                            <a
                                href={selectedPortofolio.link_demo}
                                className="w-1/2 btn btn-square"
                            >
                                Preview <i class="fa-solid fa-link"></i>
                            </a>
                        </div>
                        <button
                            onClick={closeModal}
                            className="w-full btn btn-square"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortofolioPage;
