import React from "react";
import { TypeAnimation } from "react-type-animation";

const Type = () => {
    return (
        <div>
            <TypeAnimation
                sequence={["", 500, "Fajrin Nurhakim", 500]}
                repeat={Infinity}
                className="mt-5 text-xl font-bold md:text-5xl"
            />
        </div>
    );
};

export default Type;
