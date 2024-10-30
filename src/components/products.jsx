import { useContext, useState } from 'react';
import QuantityPicker from './quantityPicker';
import './styles/product.css';
import DataContext from '../state/dataContext';

function Product(props){
    const [quantity, setQuantity] = useState(1);

    const globalAddToCart = useContext(DataContext).addToCart;
    // const globalRemoveFromCart = useContext(DataContext).removeFromCart;

    function add(){
        let cartAdd = {...props.data, quantity: quantity}
        globalAddToCart(cartAdd);
    }
    
    function handleQuantity(qty){
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity; 
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt="" />
            <h3>{props.data.title}</h3>
            {/* <span>{"ID: "+props.data._id}</span> */}
            <br></br>
            <div className="product-price">
                <label>${getTotal()} </label>
                <label>${props.data.price}</label>
            </div>

            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
        </div>
    );
}

export default Product;
