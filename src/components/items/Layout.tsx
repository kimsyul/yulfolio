import { ReactNode } from 'react';

const Layout = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <>
      <section className="pb-4 flex flex-col ">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Layout;
