import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props){
    function add(){
        console.log("adding to cart");
    }

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt="" />
            <h3>{props.data.title}</h3>
            <span>{"ID: "+props.data._id}</span>
            <br></br>
            <div className="product-price">
                <label>$total</label>
                <label>${props.data.price}</label>
            </div>

            <QuantityPicker></QuantityPicker>

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
        </div>
    );
}

export default Product;
