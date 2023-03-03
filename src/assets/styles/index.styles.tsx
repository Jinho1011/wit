import styled, { css } from 'styled-components';
import React from 'react';

const Main = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;

interface SectionProps {
  backgroundImageSrc?: string;
  backgroundColor?: string;
  snapAlign?: React.CSSProperties['scrollSnapAlign'];
}
const Section = styled.section<SectionProps>`
  scroll-snap-align: ${({ snapAlign }) => snapAlign || `end`};
  background-image: ${({ backgroundImageSrc }) => `url(${backgroundImageSrc})`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 512px;
`;

const CardContainer = styled.div`
  padding: 0 11px;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr;
`;

const Card = styled.div`
  padding: 2px;
  border-radius: 10px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CardImage = styled.img<{ borderSide: 'right' | 'left' }>`
  ${(props) =>
    props.borderSide === `left`
      ? css`
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        `
      : css`
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        `}
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Main, Section, Container, CardContainer, Card, CardImage };
export type { SectionProps };
