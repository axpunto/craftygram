import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: scroll;
    list-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`