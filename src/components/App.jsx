import React from "react";
import { guitars } from "../data/mockedData";
import Slider from "./Slider";
import Header from "./Header";
import ItemList from "./ItemList";
import ItemPage from "./ItemPage";

const App = () => {
    return (
        <div className="container">
            <Header />
            <ItemPage />
            {/* <ItemList/> */}
        </div>
    );
};

export default App;
