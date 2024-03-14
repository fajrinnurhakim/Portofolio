import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not Found | Fajrin Nurhakim</title>
            </Helmet>
            
            <img src="/404.svg" className="h-3/4" alt="notfound" />
        </div>
    );
};

export default NotFound;
