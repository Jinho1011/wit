import React from 'react';
import GlobalStyle from '@/assets/styles/global';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
