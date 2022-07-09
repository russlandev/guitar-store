import React, {useState} from "react";
import ItemCard from "./ItemCard";
import { guitars } from "../data/mockedData";

const ItemList = () => {
    const [guitarList, setGuitarList] = useState(guitars);
    const [filter, setFilter] = useState();

    return(
        <div className="flex flex-wrap justify-around">
            {guitars.map(guitar => {
                return <ItemCard key={guitar.id} guitar={guitar}/>
            })}
        </div>
    );
};

export default ItemList;