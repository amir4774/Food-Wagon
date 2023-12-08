import styled from "styled-components";

export const StyledPopular = styled.section`
  margin: 70px 0;

  .popular-title {
    text-align: center;
    margin-bottom: 60px;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const Slides = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .btn-slide {
    position: absolute;
    margin-bottom: 30px;
    font-size: 1.5rem;
    border-radius: 50%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.popular_btn_slide};
    color: #fff;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.popular_btn_slide};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  }

  .prev-slide {
    left: 30px;
  }

  .next-slide {
    right: 70px;
  }

  .slide {
    .btn-order {
      margin-bottom: 3px;
      background-color: ${({ theme }) => theme.colors.popular_btn_order};
      color: #fff;
      padding: 10px 0;
      width: 200px;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 150px;
      }
    }
  }
`;
