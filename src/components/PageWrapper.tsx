import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className='content'>{children}</div>;
};
