import styled from "styled-components";

export const StyledPhone = styled.section`
  margin-bottom: 100px;
  background-color: rgba(255, 138, 0, 1);
  background-size: 100% 300px;
  background-repeat: no-repeat;
  height: 400px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-size: 100% 250px;
    height: 300px;
  }

  .container {
    width: 70%;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 90%;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }

  .phone-image {
    img {
      width: auto;
      height: 400px;
      margin-right: 70px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      img {
        display: none;
      }
    }
  }
`;

export const App = styled.div`
  margin-top: -100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0;
  }

  .app-title {
    color: ${({ theme }) => theme.colors.install_app_title};
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .app-caption {
    color: #666;
    width: 340px;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;
