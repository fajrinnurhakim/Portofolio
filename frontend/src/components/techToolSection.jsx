import React from "react";

const TechToolSection = () => {
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
                            <div>
                                <div class="avatar">
                                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <p className="font-bold text-center">Html</p>
                                <p className="text-center">Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechToolSection;
