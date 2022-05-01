import Link from "next/link";
import { Topbar } from "../styles/styled/navbar.styled";
import { BiAdjust } from "react-icons/bi";
import { motion } from 'framer-motion';


const Navbar = ({handleTheme}) => {
    return ( 
        <Topbar>
            <div className="h-logo">
                <motion.img 
                    animate={{
                        scale: [1, 1.1, 1.1, 1, 1],
                        rotate: [0, 0, 50, -50, 0],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                src="/images/logo-2.png" alt="" />
                <h2>Characters</h2>
            </div>

            <ul>
                <motion.li whileHover={{ scale: 1.05 }}>
                    <Link href="/"><a>Home</a></Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }}>
                    <Link href="/favourites"><a>Favourites</a></Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }}>
                    <motion.button whileTap={{ scale: 0.8 }} onClick={()=>handleTheme()}><BiAdjust/></motion.button>
                </motion.li>
            </ul>
        </Topbar>
     );
}
 
export default Navbar;