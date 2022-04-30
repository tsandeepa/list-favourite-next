import styled from "styled-components";

export const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    .item{
        img{
            width: 100%;
        }
    }

`