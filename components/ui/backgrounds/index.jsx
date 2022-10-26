import styled from "styled-components";

const Background = styled.div`
    background-color: ${({bg, theme}) => theme.color[bg] ?? theme?.color?.secondary};
    padding: 1rem 0;
`

export default Background