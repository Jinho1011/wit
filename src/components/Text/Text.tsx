import React from 'react';

interface TextProps {
  size: number;
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'span';
  weight?: React.CSSProperties['fontWeight'];
  color?: React.CSSProperties['color'];
  style?: React.CSSProperties;
}

const Text = ({
  size,
  tag,
  color = `#ffffff`,
  weight = `regular`,
  style,
  children,
}: TextProps) => {
  const props = {
    style: { fontSize: size, color, fontWeight: weight, ...style },
  };

  if (tag) {
    switch (tag) {
      case `h1`:
        return <h1 {...props}>{children}</h1>;
      case `h2`:
        return <h2 {...props}>{children}</h2>;
      case `h3`:
        return <h3 {...props}>{children}</h3>;
      default:
        break;
    }
  }

  return <span {...props}>{children}</span>;
};

export default Text;
