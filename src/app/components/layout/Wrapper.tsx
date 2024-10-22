import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-4 md:px-40 py-4">{children}</div>;
};

export default Wrapper;
