import Link from "next/link";
import { Topbar } from "../styles/styled/navbar.styled";

const Navbar = () => {
    return ( 
        <Topbar>
            <h2>Noon Favourites</h2>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/favourites"><a>Favourite</a></Link>
                </li>
                
                <li>
                    <Link href="/items"><a>Items</a></Link>
                </li>

            </ul>
        </Topbar>
     );
}
 
export default Navbar;