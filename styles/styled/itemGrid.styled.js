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
        }
    }

`