import styled from "styled-components";

export const StyledHowWork = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.how_work_bg_first},
    ${({ theme }) => theme.colors.how_work_bg_second}
  );

  .container {
    width: 65%;
    margin: 20px auto;
    padding: 40px 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 95%;
      padding: 40px auto;
    }
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.how_work_title};
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 30px;
  text-align: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Icon = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
    margin: auto;
    margin-bottom: 10px;
  }
`;

export const HowImage = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100px;
    width: 100px;
  }
`;

export const HowTitle = styled.h4`
  margin-top: -20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
  }
`;

export const HowCaption = styled.p`
  margin-top: 10px;
  color: #bbb;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.6rem;
  }
`;
