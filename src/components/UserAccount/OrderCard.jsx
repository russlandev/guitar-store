import React from "react";
import styles from "./UserAccount.module.scss"

const OrderCard = ({order})=>{
    return(
        <div className={styles.order__card}>
            <div className={styles.order__delivery}>
                <div className={styles.order__header}>Shipping Information</div>
                <div className={styles.order__status}>Status: <span>{order.status}</span></div>
                <ul>
                    <li>Full name: {order.user.name}</li>
                    <li>Email: {order.user.email}</li>
                    <li>Phone: {order.user.tel}</li>
                    <li>Country, city: {order.user.country}</li>
                    <li>Delivery adress: {order.user.adress}</li>
                    <li>ZIP/Postcode: {order.user.zip}</li>
                </ul>
            </div>
            <div className={styles.order__items}>
            <div className={styles.order__header}>Ordered items</div>
                {order.order.cartItems.map((item)=>(
                    <div key={item.item.id}>
                        {item.amount} x {item.item.name}
                    </div>
                ))}
                <div className="italic mt-3">Order #{order.id}</div>
            </div>
        </div>
    )
};

export default OrderCard;