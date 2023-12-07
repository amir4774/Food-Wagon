import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer_bg};
  color: #fff;
  padding: 60px 0;
`;

export const StyledCountries = styled.div`
  border-bottom: 0.1px solid #ddd;
`;

export const Ul = styled.ul`
  margin-top: 40px;
  padding-bottom: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding-bottom: 50px;
  }

  li {
    font-size: 0.8rem;
  }
`;

export const StyledCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.7rem;
  }
`