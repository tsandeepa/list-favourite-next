import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    body{
        background-color:${({theme})=> theme.bg};
        color: ${({theme})=>theme.textColor};
        margin-bottom: 40px;
    }
    .loader{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        .l-anim{
            background: #0000008c;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            border-radius: 100px;
            /* img{
                width: 80px;
            } */
            span{
                font-size: 15px;
                color: #fff;
            }
        }

    }
    body::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
    }
    body::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
    }
    body::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.scrollColor};   /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    }
    .banner-text{
        text-align: center;
        margin-bottom: 80px;
        h1{
            font-size: 70px;
            line-height: 1;
        }
        p{
            font-size: 19px;
            margin-top: 20px;
            color: #b1b1b1;
        }
    }

    @media only screen and (max-width: 600px) { 
        .banner-text{
            padding: 10px;
            margin-bottom: 40px;
            h1{
                font-size: 50px;
            }
        }
        body{
            padding-bottom: 100px;
        }
    }

`

export default GlobalStyles