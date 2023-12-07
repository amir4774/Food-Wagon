import styled from "styled-components";

export const StyledForm = styled.form`
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

  .form-input {
    width: 68%;
    padding-left: 30px;
    background-color: #f5f5f5;
  }
`;

export const Marker = styled.img`
  position: absolute;
  left: 7px;
  width: 15px;
`;
