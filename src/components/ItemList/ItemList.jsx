import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getData, tagSearch } from "../../redux/actions/getDataActions";
import ItemCard from "../ItemCard/ItemCard";
import FiltersBar from "./FiltersBar";
import Loader from "../HelperComponents/Loader";
import Error from "../HelperComponents/Error";

const ItemList = () => {
    const itemsToRender = useSelector((store) => store.itemList.itemsToRender);
    const error = useSelector((store) => store.itemList.err);
    const isLodaing = useSelector((store) => store.itemList.isLodaing);
    const { category, tag } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (category && tag) {
            dispatch(tagSearch({ category, tag }));
        } else if (category) {
            dispatch(getData({ category }));
        }
    }, [category, tag, dispatch]);

    return (
        <div className="min-h-screen">
            <FiltersBar category={category} />
            {isLodaing && <Loader/>}
            {error && <Error error={error}/>}
            {tag && (
                <div className="mx-5 my-4 capitalize px-4 py-1 rounded-full transition-all select-none whitespace-nowrap bg-green-600 w-fit sm:mx-10 md:mx-20">
                    {tag}
                    <Link to={`/list/${category}`}>
                        <i className="x icon translate-x-3" />
                    </Link>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-7 justify-items-center">
                {itemsToRender.length
                    ? itemsToRender.map((item) => {
                          return <ItemCard key={item.id} guitar={item} />;
                      })
                    : null}
            </div>
        </div>
    );
};

export default ItemList;
