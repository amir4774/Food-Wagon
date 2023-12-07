import styled from "styled-components";

export const StyledShowSearchedFood = styled.section`
    margin: 40px 0;
    
    h1 {
        text-align: center;
    }    
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`