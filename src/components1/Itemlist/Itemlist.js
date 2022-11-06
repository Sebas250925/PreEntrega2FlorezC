import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../utils/FireBase";
import { useEffect } from "react";
import { async } from "@firebase/util";
import { Link } from "react-router-dom";
import { productos } from "../BaseDatos/BaseDatos";
import Item from "../Item/Item"


  export const ItemList = ({data = [] }) => {
        return (
            data.map(volante => <Item key={volante.id} desc={volante} />)
        );
    }


export default ItemList;  