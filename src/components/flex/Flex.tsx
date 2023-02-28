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
  style?: React.CSSProperties;
}

const Flex = ({
  flexDirection = `row`,
  justifyContent,
  gap,
  alignItems,
  style,
  children,
}: FlexProps) => {
  return (
    <Container
      gap={gap}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={style}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<FlexStyleProps>`
  display: flex;
  gap: ${({ gap }) => `${gap}px` || 0};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default Flex;
