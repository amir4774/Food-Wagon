import styled from "styled-components";

export const StyledFoodCard = styled.div`
  img {
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    border-radius: 15px;
  }

  .remaining {
    margin-top: 10px;
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.delivery_color};
    background-color: rgba(241, 114, 40, 0.2);
  }
`;
