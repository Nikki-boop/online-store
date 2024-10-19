import { useState } from "react";
import "./styles/about.css";

function About(){
    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }
    
    return (
        <div className="about">
            <h3>About us</h3>

            <div className="box">
                <h2>Nicole Bogdaniec</h2>
                { visibleEmail ? <h5>email@email.com</h5>:<label>Click button to see my email</label>}
                    <br></br>
                { visibleEmail == false ? <button onClick = {showEmail} className="btn btn-outline-primary">Show email</button> : null}
            </div>
        </div>
    );
}

export default About;