import {
  BackgroundTitle,
  Slide,
  StyledSwiper,
  Title,
} from './Portfolio.styles';
import { SwiperSlide } from 'swiper/react';
import Flex from '../Flex';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

interface PortfolioProps {
  year: number;
  slides: { url: string; img: string }[];
}

const Portfolio = ({ year, slides }: PortfolioProps) => {
  return (
    <Flex flexDirection="column" style={{ marginBottom: 60 }}>
      <div style={{ position: `relative`, paddingLeft: 10, paddingRight: 10 }}>
        <BackgroundTitle>{year}</BackgroundTitle>
        <Title>{year}</Title>
      </div>
      <StyledSwiper
        initialSlide={1}
        slidesPerView={`auto`}
        spaceBetween={20}
        // loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.url}>
              <a href={slide.url}>
                <Slide src={slide.img} height={163} />
              </a>
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </Flex>
  );
};

export default Portfolio;
