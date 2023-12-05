import styled from "styled-components";

export const StyledFoodCard = styled.div`
  img {
    margin-bottom: 10px;
    width: 250px;
    height: 250px;
    border-radius: 15px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 200px;
      height: 200px;
    }
  }

  .remaining {
    margin-top: 10px;
    padding: 10px;
    width: 140px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.delivery_color};
    background-color: rgba(241, 114, 40, 0.2);
  }
`;
