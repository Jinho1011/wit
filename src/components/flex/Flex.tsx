import React from 'react';
import styled from 'styled-components';

interface FlexStyleProps {
  flexDirection?: React.CSSProperties['flexDirection'];
  gap?: React.CSSProperties['gap'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
}

interface FlexProps extends FlexStyleProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  style?: React.CSSProperties;
}

const Flex = ({
  flexDirection = `row`,
  justifyContent,
  gap,
  alignItems,
  fullHeight = false,
  style,
  children,
}: FlexProps) => {
  return (
    <Container
      gap={gap}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      fullHeight={fullHeight}
      style={style}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{ fullHeight: boolean } & FlexStyleProps>`
  display: flex;
  gap: ${({ gap }) => `${gap}px` || 0};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ fullHeight }) => {
    if (fullHeight) {
      return `
      min-height: 100vh;
    @supports (-webkit-appearance:none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
    }
      `;
    }
  }}
`;

export default Flex;
