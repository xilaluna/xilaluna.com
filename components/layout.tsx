import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
