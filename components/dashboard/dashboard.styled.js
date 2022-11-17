import styled from "styled-components";
import { justifySpaceBetween } from './../../utils/display.styled';

export const OuterOrderRow = styled.div`
    width: 100%;
    background-color: #EAEAEA;
    border-radius: 5px;
    padding: 1rem;
    ${justifySpaceBetween}
    flex-direction: column;
    align-items: left;
`

export const InnerOrderRow = styled.div`
    margin: .25rem 1rem;
    background-color: #B2B2B2;
    border-radius: 5px;
    padding: 1rem;
    ${justifySpaceBetween}
    flex-direction: column;
`