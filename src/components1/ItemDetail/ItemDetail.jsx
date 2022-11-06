import "./ItemDetail.css"
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({ data }) => {
    const { addProducts } = useContext(CartContext)

    const agregarProducto = (cantidad) => {
        console.log(cantidad);
        addProducts(data, cantidad);
    }

    return (
        <div className="detalle-container-fluid container-xxl">
            <img src={data.image} alt="" />
            <div>
                <h1>{data.title}</h1>
                <h2>{data.precio}</h2>
                <p>{data.descripcion}</p>
                <ItemCount initial={1} stock={5} onAdd={agregarProducto} />
            </div>
        </div>

    );
}

export default ItemDetail;