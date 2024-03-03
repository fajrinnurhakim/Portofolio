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
        <div className="container flex items-center h-screen p-5 mx-auto space-y-5">
            <div className="w-full space-y-5">
                <h1 className="mb-12 text-2xl font-bold text-center underline md:text-4xl text-primary decoration-wavy">
                    Skills
                </h1>
                <div role="tablist" class="tabs tabs-lifted w-full">
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        class="tab"
                        aria-label="Tech"
                    />
                    <div
                        role="tabpanel"
                        class="tab-content bg-base-300 border-base-300 rounded-box p-6"
                    >
                        <p className="text-center">
                            <i class="fa-solid fa-code"></i> Tech
                        </p>

                        <div className="flex justify-evenly">
                            {teches.map((teches) => (
                                <div className="items-center text-center card-body">
                                    <img
                                        src={teches.tech_image}
                                        alt="tech_image"
                                        className="w-12"
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
                        class="tab"
                        aria-label="Tools"
                        checked
                    />
                    <div
                        role="tabpanel"
                        class="tab-content bg-base-300 border-base-300 rounded-box p-6"
                    >
                        <p className="mb-5 text-center">
                            <i class="fa-solid fa-screwdriver-wrench"></i> Tools
                        </p>
                        <div className="flex justify-evenly">
                            {tools.map((tools) => (
                                <div className="items-center text-center card-body">
                                    <img
                                        src={tools.tool_image}
                                        alt="tools_image"
                                        className="w-12"
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
