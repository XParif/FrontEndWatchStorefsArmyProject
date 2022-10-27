import styled from "styled-components";

const Container = styled.div`
    max-width: ${({theme}) => theme?.responsive?.desktop};
    margin: 0 auto;
`

export default Container