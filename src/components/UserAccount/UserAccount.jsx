import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import axios from "axios";
import { logout } from "../../redux/reducers/userSlice";
import OrderCard from "./OrderCard";
import styles from "./UserAccount.module.scss"

const UserAccount = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `http://localhost:3001/orders?q=${user.email}`
            );
            setOrders(response.data);
        })();
    }, [user.email]);

    return (
        <div className={styles.user__wrapper}>
            <div className={styles.user__header}>
                <div>{user.email}</div>
                <div onClick={()=>dispatch(logout())} className="hover:underline cursor-pointer">Logout</div>
            </div>
            {orders.length
                ? orders.map((order) => (
                      <OrderCard order={order} key={order.id} />
                  ))
                : <div className='text-center'>There will be your orders</div>}
        </div>
    );
};

export default UserAccount;
