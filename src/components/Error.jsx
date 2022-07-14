import React from "react";

const Error = ({ error }) => {
    return (
        <div className="text-center text-4xl tracking-widest font-thin text-stone-300 mb-8">
            Something is wrong: {error}
        </div>
    );
};
export default Error;
