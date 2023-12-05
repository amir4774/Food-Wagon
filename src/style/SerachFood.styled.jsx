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

export const Form = styled.form`
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .submit-btn {
    padding: 15px 35px;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.submit_btn_first},
      ${({ theme }) => theme.colors.submit_btn_second}
    );
    color: #fff;

    img {
      margin-right: 5px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 10px 20px;
    }
  }
`;

export const Input = styled.input`
  width: 68%;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 30px;
  border-radius: 10px;
`;

export const Marker = styled.img`
  position: absolute;
  left: 7px;
  width: 15px;
`;
