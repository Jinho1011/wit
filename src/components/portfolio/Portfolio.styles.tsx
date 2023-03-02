import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const BackgroundTitle = styled.span`
  font-size: 120px;
  color: rgba(255, 255, 255, 0.23);
  position: absolute;
  bottom: -11px;
  left: 7.5px;
  font-weight: 900;
  /* line-height: 177px; */
`;

const Title = styled.span`
  font-size: 72px;
  color: #ffffff;
  font-weight: 900;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
`;

const Slide = styled.img`
  width: 223px;
  border-radius: 10px;
`;

export { BackgroundTitle, Title, StyledSwiper, Slide };
