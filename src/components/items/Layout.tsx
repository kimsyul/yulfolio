import { ReactNode } from 'react';
import Wrapper from '../layout/Wrapper';

const Layout = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <Wrapper>
      <h2 className="text-5xl font-bold pl-4 mb-8">{title}</h2>
      {children}
    </Wrapper>
  );
};

export default Layout;
