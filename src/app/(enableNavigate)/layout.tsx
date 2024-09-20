import { Metadata } from 'next';
import NavigateBar from '../_components/nav/Navigate';

export const metadata: Metadata = {
  title: 'Without Navigation',
  description: 'Layout without navigation bar',
};

export default function WithoutNavigateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigateBar />
      {children}
    </>
  );
}
