import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ItemList from "./components/ItemList/ItemList";
import ItemPage from "./components/ItemPage/ItemPage";
import Cart from "./components/Cart/Cart";
import FormLogin from "./components/Forms/FormLogin";
import FormRegister from "./components/Forms/FormRegister";
import RequireAuth from "./hoc/RequireAuth";
import UserAccount from "./components/UserAccount/UserAccount";
import Checkout from "./components/Checkout/Checkout";

import Layout from "./components/Layout";

const App = () => {
    const routes = [
        { path: "cart", el: <Cart /> },
        { path: "checkout", el: <Checkout /> },
        { path: "user-account", el: (<RequireAuth><UserAccount /></RequireAuth>) },
        { path: "sign-in", el: <FormLogin /> },
        { path: "register", el: <FormRegister /> },
        { path: "list/:category", el: <ItemList /> },
        { path: "list/:category/:tag", el: <ItemList /> },
        { path: "list/:category/item/:id", el: <ItemPage /> },
    ];

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.el}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default App;
