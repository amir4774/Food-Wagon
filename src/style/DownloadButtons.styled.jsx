import styled from "styled-components";

export const AppButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 5px;

    .first-text {
      color: #666;
      font-size: 0.7rem;
      text-transform: uppercase;
    }

    .second-text {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;

export const Logo = styled.div`
  margin-right: 10px;
  img {
    width: 30px;
  }
`;
