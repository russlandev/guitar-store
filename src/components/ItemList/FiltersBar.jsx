import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
    inStockFilter,
    stringsFilter,
    priceSort,
} from "../../redux/reducers/itemListSlice";
import styles from "./FiltersBar.module.scss";

const FiltersBar = ({ category }) => {
    const [str, setStr] = useState([]);
    const [inStock, setInStock] = useState(false);
    const [lowerFirst, setLowerFirst] = useState(false);
    const [higherFirst, setHigherFirst] = useState(false);

    const dispatch = useDispatch();

    // stringFilter hardcoded params
    const filterParams = (category) => {
        switch (category) {
            case "guitars":
                return [6, 7, 8];
            case "basses":
                return [4, 5];
            default:
                return [];
        }
    };

    const sortLower = () => {
        setLowerFirst(!lowerFirst);
        setHigherFirst(false);
    };

    const sortHigher = () => {
        setHigherFirst(!higherFirst);
        setLowerFirst(false);
    };

    const buttonStyles = (isFiltered) => {
        return `${styles.filter__item} ${
            isFiltered
                ? "bg-green-600 hover:bg-green-500"
                : "bg-neutral-800 hover:bg-green-900"
        }`;
    };

    useEffect(() => {
        dispatch(stringsFilter({ str }));
        if (inStock) dispatch(inStockFilter());
        if (lowerFirst || higherFirst)
            dispatch(priceSort({ lowerFirst, higherFirst }));
    }, [str, inStock, lowerFirst, higherFirst]);

    return (
        <div className={styles.filter__wrapper}>
            {filterParams(category).map((num) => (
                <div
                    key={num}
                    onClick={() =>
                        str.includes(num)
                            ? setStr(str.filter((item) => item !== num))
                            : setStr([...str, num])
                    }
                    className={buttonStyles(str.includes(num))}
                >
                    {num}-String
                </div>
            ))}

            <div
                onClick={() => setInStock(!inStock)}
                className={buttonStyles(inStock)}
            >
                In Stock
            </div>
            <div onClick={sortLower} className={buttonStyles(lowerFirst)}>
                Price<i className="caret up icon"></i>
            </div>
            <div onClick={sortHigher} className={buttonStyles(higherFirst)}>
                Price<i className="caret down icon"></i>
            </div>
        </div>
    );
};

export default FiltersBar;
