import Link from "next/link";
import { Topbar } from "../styles/styled/navbar.styled";
import { BiAdjust } from "react-icons/bi";

const Navbar = ({handleTheme}) => {
    return ( 
        <Topbar>
            <h2>Noon Favourites</h2>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/favourites"><a>Favourites</a></Link>
                </li>
                <li>
                    <button  onClick={()=>handleTheme()}><BiAdjust/></button>
                </li>
            </ul>
        </Topbar>
     );
}
 
export default Navbar;