import Product from '../components/products';
import './styles/catalog.css';
import DataService from '../services/DataService';
import { useState, useEffect } from 'react';

function Catalog(){

    const [products, setProducts] = useState([])

    useEffect(function(){
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService(); 
        let prods = service.getProducts(); 
        setProducts(prods);
    }

    return(
        <div className="catalog">
            <h3>We have {products.length} new products for you!</h3>
            <br></br>
            <div className="catalog-items">
                {
                    products.map((item)=>(
                        <Product key={item._id} data={item}></Product>
                    ))
                }

            </div>
        </div>
    );
}

export default Catalog;