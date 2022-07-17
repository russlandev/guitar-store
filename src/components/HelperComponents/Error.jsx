import React from "react";

const Error = ({ error }) => {
    return (
        <div className="text-center tracking-widest font-thin text-stone-300 text-base md:text-xl lg:text-2xl my-3 md:my-6 lg:my-9">
            Something is wrong: {error}
        </div>
    );
};
export default Error;
