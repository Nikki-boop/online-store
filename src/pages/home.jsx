import './styles/home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        
        <div className="home page">
            <img src='/img/fresh.jpg' alt=""></img>

            <div className="home=text">
                <h1>Welcome to affordable food</h1>
                <h3> Faster food, only healthy!</h3>

                <Link className='btn btn-success' to="/catalog">Browse our products!</Link>
            </div>

        </div>

    );
}

export default Home;