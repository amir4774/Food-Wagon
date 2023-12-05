import styled from "styled-components";

export const StyledShowCase = styled.section`
    background-image: linear-gradient(to bottom, ${({ theme }) => theme.colors.bg_show_case_first}, ${({ theme }) => theme.colors.bg_show_case_second});
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .showcase_image {
        width: 700px;
        margin-bottom: -4px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }
`