import { ReactNode } from 'react';
import { NavBar } from './NavBar/NavBar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};
