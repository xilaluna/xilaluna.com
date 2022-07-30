import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
