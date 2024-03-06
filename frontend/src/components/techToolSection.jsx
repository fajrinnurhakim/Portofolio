import React, { useEffect } from "react";
import stateTech from "../hooks/tech";
import stateTool from "../hooks/tool";

const TechToolSection = () => {
    const { teches, loadTeches } = stateTech();
    const { tools, loadTools } = stateTool();

    useEffect(() => {
        loadTeches();
        loadTools();
    }, []);

    return (
        <div className="container flex items-center h-auto p-5 px-5 py-24 mx-auto">
            <div className="w-full">
                <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                    Skills <i className="fa-solid fa-gears"></i>
                </h1>
                <div role="tablist" className="w-full tabs tabs-lifted">
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Tech"
                        defaultChecked
                    />
                    <div
                        role="tabpanel"
                        className="p-6 tab-content bg-base-300 border-base-300 rounded-box"
                    >
                        <p className="text-center">
                            <i className="fa-solid fa-code"></i> Tech
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {teches.map((teches, index) => (
                                <div
                                    key={index}
                                    className="items-center text-center card-body"
                                >
                                    <img
                                        src={teches.tech_image}
                                        alt="tech_image"
                                        className="h-10 md:h-12"
                                    />
                                    <p className="font-bold">
                                        {teches.tech_name}
                                    </p>
                                    <p>{teches.tech_level}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Tools"
                    />
                    <div
                        role="tabpanel"
                        className="p-6 tab-content bg-base-300 border-base-300 rounded-box"
                    >
                        <p className="mb-5 text-center">
                            <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                            Tools
                        </p>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {tools.map((tools, index) => (
                                <div
                                    key={index}
                                    className="items-center text-center card-body"
                                >
                                    <img
                                        src={tools.tool_image}
                                        alt="tools_image"
                                        className="w-10 md:w-12"
                                    />
                                    <p className="font-bold">
                                        {tools.tool_name}
                                    </p>
                                    <p>{tools.tool_level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechToolSection;
