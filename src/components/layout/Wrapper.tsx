import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-4 lg:px-40 pt-8 pb-16">{children}</div>;
};

export default Wrapper;
