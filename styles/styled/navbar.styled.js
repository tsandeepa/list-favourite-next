import styled from "styled-components";

export const Topbar = styled.div`
    max-width: 1100px;
    margin: 30px auto;
    padding: 10px;
    border-radius: 50px;
    background: #feee00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h-logo{
        position: relative;
        img{
            height: 100px;
            position: absolute;
            bottom: -20px;
        }
        h2{
            font-weight: 800;
            margin-left: 130px;
            font-size: 22px;
            color: #25232c;
            text-transform: uppercase;
        }
    }
    ul{
        list-style: none;
        display: flex;
        gap: 20px;
        align-items: center;
        li{
            a{
                color: #000;
                font-size: 18px;
            }
            button{
                background: transparent;
                padding: 0;
                border: none;
                font-size: 30px;
                cursor: pointer;
                display: flex;
                color: #494949;
            }
        }
    }

    @media only screen and (max-width: 600px) { 
        position: fixed;
        bottom: 0;
        left: 10px;
        right: 10px;
        z-index: 1;
        margin-bottom: 10px;
        h2 {
            display:none;
        }
    }
`