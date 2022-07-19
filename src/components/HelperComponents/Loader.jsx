import React from "react";

const Loader = () => {
  return (
    <div className="ui segment !shadow-none !border-none !rounded-none !bg-transparent">
      <p></p>
      <div className="ui active dimmer !bg-transparent">
        <div className="ui large loader"></div>
      </div>
    </div>
  );
};

export default Loader;
