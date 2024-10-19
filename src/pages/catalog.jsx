import Product from '../components/products';
import './styles/catalog.css';


function Catalog(){
    return(
        <div className="catalog">
            <h3>This is where the catalog is going to be.</h3>

            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>

    );
}

export default Catalog;