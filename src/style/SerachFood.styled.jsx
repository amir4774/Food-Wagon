import styled from "styled-components";

export const StyledSerachFood = styled.div`
  margin: 10px 0;

  .show-case-title {
    color: #fff;
    font-size: 4rem;
    letter-spacing: 2px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 3rem;
    }
  }

  .caption {
    margin: 30px 0 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 20px 0 30px;
    }
  }

  .card {
    min-height: 100px;
    border-radius: 12px;
    background-color: #fff;
    padding: 10px 20px;

    .buttons {
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;

      .delivery-button {
        padding: 10px 18px;
        color: ${({ theme }) => theme.colors.delivery_color};
        background-color: rgba(241, 114, 40, 0.2);
        font-weight: bold;
        margin-right: 10px;
      }

      .pickup-button {
        padding: 10px 18px;
      }

      img {
        margin-right: 5px;
      }
    }
  }
`;
