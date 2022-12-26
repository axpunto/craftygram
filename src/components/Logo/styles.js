import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Svg = styled.svg`
    ${fadeIn({time: '1s'})}
    width: 250px;
    height: auto;
    margin: 5px 10px;
`