import styled from "styled-components";
import { fadeIn } from "../../styles/animation";
import { css } from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: scroll;
    list-style: none;
    padding: 15px 0px;
    ${fadeIn({time: '1s'})}
    ${props => props.fixed && css`
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgb(0 0 0 / 30%);
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 350px;
        padding: 10px;
        position: fixed;
        -ms-transform: scale(.5);
        -webkit-transform: scale(.5);
        transform: scale(.5);
        z-index: 1;
        top: -10px;
        ${fadeIn({time: '.5s'})}
    `}
    &::-webkit-scrollbar {
        display: none;
    }
`