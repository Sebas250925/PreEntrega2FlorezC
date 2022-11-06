import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { productos } from "../BaseDatos/BaseDatos";
import './ItemDetailContainer.css'
import { db } from "../../utils/FireBase";
import { doc, getDoc,getFirestore } from "firebase/firestore";



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();


    useEffect(() => {

        const getData = async () => {
        // crreamos la referencia del producto
        const queryRef = doc(db, "items", detalleId);
        //hacemos la consulta
        const response = await getDoc(queryRef);

        const newDoc = {
            ...response.data(),
            id: response.id
        }
        
        setData(newDoc)
        
        }

        /* const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (detalleId) {
            getData.then(res => setData(res.find(prod => prod.id === parseInt(detalleId))));
            */

        getData();

    }, [detalleId])

    return (
        <div className="item-detail-container">
            <ItemDetail data={data} />
        </div>
    )
}


export default ItemDetailContainer;