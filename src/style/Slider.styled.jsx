import styled from "styled-components";

export const SlideImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    height: 150px;
  }
`;

export const FoodName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
  }
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 10px 0;
`;
