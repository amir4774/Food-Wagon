import styled from "styled-components";

export const StyledSubscription = styled.div`
  margin-top: 70px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1px solid #ddd;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  .title {
    margin-bottom: 30px;
  }

  ul {
    margin-top: 20px;

    li {
      margin-top: 20px;
      font-size: 0.9rem;
    }
  }
`;
