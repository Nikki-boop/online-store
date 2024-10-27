import './styles/navbar.css';

import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar navbar-expand-lg " data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/navbar">Online Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
                        </li>
                       
                    </ul>
                    <div className="d-flex" role="search">
                        <Link className='btn btn-outline-light' to="/cart" >View Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;