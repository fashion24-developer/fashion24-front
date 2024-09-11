import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';

export default function FancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header src="/images/intro_logo.png" />
      <Banner
        src="/fancy"
        backGround="/images/intro_fancy.png"
        description="Office Core"
      />
      {children}
    </div>
  );
}
