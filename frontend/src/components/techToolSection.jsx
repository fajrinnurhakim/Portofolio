import React, { useEffect } from "react";
import stateTech from "../hooks/tech";
import stateTool from "../hooks/tool";
import { Fade, Slide } from "react-awesome-reveal";

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
                <Fade direction="down">
                    <h1 className="mb-12 text-2xl font-bold text-center md:text-4xl">
                        Skills <i className="fa-solid fa-gears"></i>
                    </h1>
                </Fade>
                <Slide direction="left">
                    <div role="tablist" className="w-full tabs tabs-lifted">
                        <input
                            type="radio"
                            id="tab-tech"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Tech"
                            aria-controls="tabpanel-tech"
                            defaultChecked
                        />

                        <div
                            id="tabpanel-tech"
                            role="tabpanel"
                            className="p-6 tab-content bg-base-300 border-base-300 rounded-box"
                        >
                            <Fade>
                                <p className="text-center">
                                    <i className="fa-solid fa-code"></i> Tech
                                </p>

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                    {teches.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="items-center text-center card-body"
                                        >
                                            <img
                                                src={tech.tech_image}
                                                alt="tech_image"
                                                className="h-10 md:h-12"
                                            />

                                            <p className="font-bold">
                                                {tech.tech_name}
                                            </p>
                                            <p>{tech.tech_level}</p>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        </div>

                        <input
                            type="radio"
                            id="tab-tools"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Tools"
                            aria-controls="tabpanel-tools"
                        />
                        <div
                            id="tabpanel-tools"
                            role="tabpanel"
                            className="p-6 tab-content bg-base-300 border-base-300 rounded-box"
                        >
                            <Fade>
                                <p className="mb-5 text-center">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                                    Tools
                                </p>

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                    {tools.map((tool, index) => (
                                        <div
                                            key={index}
                                            className="items-center text-center card-body"
                                        >
                                            <img
                                                src={tool.tool_image}
                                                alt="tools_image"
                                                className="w-10 md:w-12"
                                            />
                                            <p className="font-bold">
                                                {tool.tool_name}
                                            </p>
                                            <p>{tool.tool_level}</p>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default TechToolSection;
