import styled from "styled-components";

export const StyledFeatures = styled.section`
  background-color: ${({ theme }) => theme.colors.features_bg};
  padding: 50px 0;

  .container {
    width: 65%;
    margin: 20px auto;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 90%;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.features_card_shadow};
  border-radius: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
    margin: 0 auto;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      img {
        display: none;
      }
    }

    .card-title {
      font-size: 1.8rem;
      margin-left: 10px;
      border-right: 2px solid #ddd;
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.features_card_title_first},
        ${({ theme }) => theme.colors.features_card_title_second}
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      
      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.2rem;
        margin-left: 0;
      }
    }

    #last-child {
      border-right: none;
    }
  }
`;
