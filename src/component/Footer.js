import {Link} from "react-router-dom";

export default function Footer(){

    return(
       <Footer>
           <address>
                &copy; <a href="index.html">Nature Skin.</a>
                <Link to="/">Nature Skin.</Link>
            </address>
       </Footer>
    );
 }