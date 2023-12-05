import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;
