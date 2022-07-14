import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ItemList from "./ItemList";
import ItemPage from "./ItemPage";
import Cart from "./Cart";

import Layout from "./Layout";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='list/:category' element={<ItemList />} />
                    <Route path='list/:category/:tag' element={<ItemList />} />
                    <Route path='list/:category/item/:id' element={<ItemPage/>} />
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default App;
