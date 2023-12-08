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
  max-width: 1000px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.features_card_shadow};
  border-radius: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 10px 0;
    flex-direction: column;

    #last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 20px;
    margin-left: 0;

    img {
      display: none;
    }
  }

  #last-title {
    border-right: none;
  }
`;

export const CardTitle = styled.h1`
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
    border: none;
  }
`;
