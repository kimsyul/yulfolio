import React, { ReactNode } from 'react';

const PrimaryColorContainer = ({ color, children }: { color: string; children: ReactNode }) => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 md:px-40 pt-8 pb-16">{children}</div>
    </section>
  );
};

export default PrimaryColorContainer;
