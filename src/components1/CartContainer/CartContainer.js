import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartContainer.css"
import React from "react"
import {collection, addDoc, doc, updateDoc} from "firebase/firestore"
import {db} from "../../utils/FireBase";

export const CartContainer = () =>{
    
    const value = useContext(CartContext)
    const {productosCarrito, getTotalPrice, getTotalProducts, removeItem} = value;
    const [compraId, setCompraId] = useState("");



    const sendOrder =(evt)=>{
        evt.preventDefault()
        const compra ={
            buyer:{
                name:  evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value,

            },
            items:productosCarrito,
            total: getTotalPrice()
        }
        //console.log("compra",compra)
        //creamos la referencia de donde vamos a guardar los datos
        const queryRef = collection(db,"orders");
        //agregamos la infromaicon
        addDoc(queryRef, compra).then((resultado)=>{
            console.log(resultado.id);
            setCompraId(resultado.id);
        
        })

    }
    
    const updateProducto = ()=>{
        //creamos la referencia del documento
    }


    return (
        
        <div className="cart"> 
            <div className="carrito">

            {compraId && <p>Su compra fue realizada con el numero de orden: {compraId}</p>}
                <h3 className="text-carrito">Carrito de compras $</h3>
                
                {  
                    productosCarrito.map((data)=>(
                        <div className="tarjeta">
                            <h3>{data.title}</h3>
                            <h2> Precio unitario: {data.precio}</h2>
                            <h2> {data.cantidad}</h2>
                            <h2> Precio por cantidad: {data.quantityPrice}</h2>
                            <button onClick={()=> removeItem(data.id)}> Eliminar </button>
                        </div>
                    ))
                }
                <div className="tarjeta-2" >
                    <h2><strong> Precio total: </strong> {getTotalPrice()}</h2>
                    <h2><strong> Total Productos: </strong> {getTotalProducts()}</h2>


                </div>


                    <form onSubmit={sendOrder}>
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre"/>
                        <label>Telefono</label>
                        <input type="tel" placeholder="Telefono"/>
                        <label>Correo</label>
                        <input type="email" placeholder="Ingrese su correo"/>
                        <button type="submit">Enviar orden</button>
                    </form>
            </div>

        </div>
    
    )
}