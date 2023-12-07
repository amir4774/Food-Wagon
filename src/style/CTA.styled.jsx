import styled from "styled-components";

export const StyledCTA = styled.section`
  height: 300px;
  background: url("src/assets/CTA.png") center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-size: 100% 100%;
    height: 200px;
  }
`;

export const Content = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }

  .cta-title {
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
  }

  .cta-btn {
    background-color: ${({ theme }) => theme.colors.popular_btn_order};
    color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
      padding: 10px;
    }

    .chevron-right {
      margin-left: 5px;
    }
  }
`;
