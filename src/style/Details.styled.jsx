import styled from "styled-components";

export const StyledDetailCard = styled.div`
  height: 350px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: ${({ id }) => (id % 2 == 0 ? "row" : "row-reverse")};
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    height: 400px;
  }
`;

export const DetailImage = styled.div`
  height: 100%;

  img {
    width: 800px;
    height: 100%;
    border-radius: ${({ id }) =>
      id % 2 == 0 ? "15px 0 0 15px" : "0 15px 15px 0"};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 200px;

    img {
      width: 100%;
      border-radius: 15px 15px 0 0;
    }
  }
`;

export const Text = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    padding: 0;
    padding-top: 20px;
  }
  
  .btn-detail {
    width: 100%;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.btn_detail};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.btn_detail};
    color: #fff;

    .chevron-right {
      margin-left: 5px;
      margin-top: 2px;
    }
  }
`;

export const DetailTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.detail_title};

  .yellow-title {
    color: ${({ theme }) => theme.colors.detail_yellow_title};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
  }
`;

export const DetailCaption = styled.p`
  margin: 20px 0 50px;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.7rem;
    margin: 10px 0 20px;
  }
`;
