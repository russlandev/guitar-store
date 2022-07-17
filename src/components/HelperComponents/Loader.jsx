import React from "react";

const Loader = () => {
    return (
        <div className="ui segment !border-none !rounded-none !my-10">
            <p></p>
            <div className="ui active dimmer !bg-black">
                <div className="ui massive loader"></div>
            </div>
        </div>
    );
};

export default Loader;
