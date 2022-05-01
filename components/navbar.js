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
                        rotate: [0, 0, 20, -20, 0],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                src="https://firebasestorage.googleapis.com/v0/b/my-favourites-965fb.appspot.com/o/logo-2.png?alt=media&token=64669837-8959-4768-b940-bc716c5f39df" alt="" />
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