import styled from "styled-components";

export const StyledFooterForm = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;

  #email {
    width: 100%;
    background-color: #424242;
    color: #fff;
    border-radius: 5px;
  }

  .footer-btn {
    margin-left: 10px;
    padding: 10px 20px;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.footer_btn_first},
      ${({ theme }) => theme.colors.footer_btn_second}
    );
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.footer_btn_second};
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
  }
`;
