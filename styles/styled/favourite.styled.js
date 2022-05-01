import styled from "styled-components";

export const Favouites = styled.div`
    h2{
        text-align: center;
    }
    .fav-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 700px;
        margin: 0 auto;
        .fav-item{
            
            .fi-bg{
                display: flex;
                justify-content: space-between;
                background: ${({theme})=>theme.liBgColor};
                border-radius: 10px;
                overflow: hidden;
                &:hover{
                    button{
                        display: flex ;
                    }
                }
                >div{
                    display:flex;
                    align-items: center;
                    gap: 20px;
                }
                img{
                    height: 100px;
                }
                h3{
                    font-size: 20px;
                }
                button{
                    display: none;
                    cursor: pointer;
                    border: none;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    padding: 0 20px;
                    background: #393939;
                    color: #ffd1a2;
                    svg{
                        font-size: 20px;
                    }
                }
            }
        }
    }

`