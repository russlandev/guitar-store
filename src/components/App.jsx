import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ItemList from "./ItemList/ItemList";
import ItemPage from "./ItemPage/ItemPage";
import Cart from "./Cart/Cart";
import FormLogin from "./Forms/FormLogin";
import FormRegister from "./Forms/FormRegister";
import RequireAuth from "../hoc/RequireAuth";
import UserAccount from "./UserAccount/UserAccount";
import Checkout from "./Checkout/Checkout";

import Layout from "./Layout";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                    <Route path='user-account' element={<RequireAuth><UserAccount/></RequireAuth>}/>
                    <Route path='sign-in' element={<FormLogin title='Sign-In' handleSubmit={()=>console.log('sign-in')}/>}/>
                    <Route path='register' element={<FormRegister title='Register' handleSubmit={()=>console.log('Register')}/>}/>
                    <Route path='list/:category' element={<ItemList />} />
                    <Route path='list/:category/:tag' element={<ItemList />} />
                    <Route path='list/:category/item/:id' element={<ItemPage/>} />
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default App;
