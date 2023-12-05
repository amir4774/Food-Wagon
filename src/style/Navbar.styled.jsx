import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
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

    p {
      font-size: 0.9rem;
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
  }

  .login-btn {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 15px;
    color: ${({ theme }) => theme.colors.login_text};
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    img {
      margin-right: 8px;
    }
  }
`;
