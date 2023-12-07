import styled from "styled-components";

export const StyledFollow = styled.div`
  width: 30%;
  color: #ddd;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin-top: 50px;
  }

  .follow-title {
    text-transform: uppercase;
  }
`;

export const Media = styled.div`
  ul {
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
`;
