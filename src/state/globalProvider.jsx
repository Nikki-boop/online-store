import { useContext, useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    const[cart, setCart] = useState([]);
    const[user, setUser] = useState({name: "Nicole", id: 1234});


    function addToCart (product){
        const copy = [...cart]
        copy.push(product);
        setCart(copy);
    }

    function removeFromCart(){
        
 
    }

    function clearCart(){
    }
    
    return(
        <DataContext.Provider value = {{ 
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider; 