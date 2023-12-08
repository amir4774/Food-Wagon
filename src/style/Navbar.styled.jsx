import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const StyledLogo = styled.div`
  #logo-text {
    margin-left: 5px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    #logo-text {
      display: none;
    }
  }
`;

export const Location = styled.div`
  #map {
    margin: 0 5px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    span {
      display: none;
    }

    #map {
      width: 10px;
      margin: 0;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .search {
    margin-right: 15px;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  }

  .login-btn {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 13px;
    color: ${({ theme }) => theme.colors.login_text};
    background: #fff;
    box-shadow: 0 5px 20px ${({ theme }) => theme.colors.login_btn_shadow};

    img {
      margin-right: 8px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
      padding: 10px;
    }
  }
`;
