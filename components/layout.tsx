import { ReactNode } from 'react';
import Navbar from './navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
