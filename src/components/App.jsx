import React from "react";
import { guitars } from "../data/mockedData";
import Slider from "./Slider";
import Header from "./Header";
import ItemList from "./ItemList";
import ItemPage from "./ItemPage";
import Footer from "./Footer";

const App = () => {
    return (
        <div className="">
            <Header />
            <ItemPage />
            {/* <ItemList/> */}
        <Footer/>
        </div>
    );
};

export default App;
