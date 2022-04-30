import React, { useState, useEffect } from 'react';
import { Container } from "../styles/styled/layout.styled";
import Navbar from "./navbar";
import {ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme} from "../styles/styled/theme.styled";


const Layout = ({children}) => {
    const[theme, setTheme] = useState(darkTheme);
    const handleTheme = () =>{
      theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    }
    return ( 
        <ThemeProvider theme={theme}>
            <div className="container">
                <Navbar handleTheme={handleTheme}/>
                <Container>
                    {children}
                </Container>
            </div>
        </ThemeProvider>
     );
}
 
export default Layout;