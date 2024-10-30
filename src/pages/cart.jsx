import { useContext } from 'react';
import './styles/cart.css';
import DataContext from '../state/dataContext';

function Cart(){

    const globalCart = useContext(DataContext).cart;

    return(
        <div className="cart page">
                <h3>Your products</h3>
                <h5> We have {globalCart.length} products ready for you! </h5>

            <div className="list">
                {globalCart.map( prod => 
                    <div className='cart-prod'>
                        <img src={prod.image} alt=""></img>
                        <h4>{prod.title}</h4>
                        <label> Price: ${prod.price}</label>
                        <label>qty. {prod.quantity}</label>
                        <label>Total: ${prod.price * prod.quantity}</label>
                        <button className='btn btn-sm btn-danger'>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;