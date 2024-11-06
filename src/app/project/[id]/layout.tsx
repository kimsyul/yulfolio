import Wrapper from '@/components/layout/Wrapper';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary min-h-screen">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
