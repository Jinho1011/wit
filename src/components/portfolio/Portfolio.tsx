import {
  BackgroundTitle,
  Slide,
  StyledSwiper,
  Title,
} from './Portfolio.styles';
import { SwiperSlide } from 'swiper/react';
import Flex from '../flex';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

interface PortfolioProps {
  year: number;
  slides: any[];
}

const Portfolio = ({ year, slides }: PortfolioProps) => {
  return (
    <Flex flexDirection="column" style={{ marginBottom: 60 }}>
      <div style={{ position: `relative`, paddingLeft: 10, paddingRight: 10 }}>
        <BackgroundTitle>{year}</BackgroundTitle>
        <Title>{year}</Title>
      </div>
      <StyledSwiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slide>11111</Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>22222</Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>3333</Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>44444</Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>55555</Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>66666</Slide>
        </SwiperSlide>
      </StyledSwiper>
    </Flex>
  );
};

export default Portfolio;
