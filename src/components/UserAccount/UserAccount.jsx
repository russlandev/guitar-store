import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { logout } from "../../redux/reducers/userSlice";


const UserAccount = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(logout())}>
            {user.email}
        </div>
    );
};

export default UserAccount;
