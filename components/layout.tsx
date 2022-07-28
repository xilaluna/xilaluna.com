import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
