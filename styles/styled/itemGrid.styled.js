import styled from "styled-components";

export const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    gap: 40px;
    .item{
        text-align: center;
        img{
            width: 100%;
        }
        h3{
            text-align: center;
            margin-top: 12px;
            margin-bottom: 10px;
        }
        button{
            border: none;
            border-radius: 50px;
            width: 34px;
            aspect-ratio: 1/1;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            padding: 0;
            svg{
                position: relative;
                top: 1px;
            }
        }
        .btn-fav{
            background:  ${({theme})=>theme.btnFavBg};
            color:  ${({theme})=>theme.btnFavText};
        }
        .btn-fav-not{
            background:  ${({theme})=>theme.btnFavNotBg};
            color:  ${({theme})=>theme.btnFavNotText};
        }
    }

    @media only screen and (max-width: 600px) { 
        grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
        padding: 10px;
    }

`