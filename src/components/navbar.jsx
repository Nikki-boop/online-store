import './styles/navbar.css';

import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav class="navbar navbar navbar-expand-lg " data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/navbar">Online Store</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
                        </li>
                       
                    </ul>
                    <div class="d-flex" role="search">
                        <Link className='btn btn-outline-light' to="/cart" >View Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;