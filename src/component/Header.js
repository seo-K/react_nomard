import {Link} from "react-router-dom";

//css
import styled from "styled-components";

export default function Main(){

    return(
        <>
            <h1 class="en"><a href="index.html">Nature Skin</a></h1>
            <nav className="Gnb">
                <Link to="/">Nature Skin</Link>
                <Link to="/sub">Guide Info</Link>
                <Link to="/sub">Reservation</Link>
                <Link to="/sub">Customer</Link>
            </nav>
        </>
    );
 }

//header
const Gnb = styled.nav`
    display: flex;
    
`
