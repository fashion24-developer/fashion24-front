import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';

export default function AbleBanner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header src="/images/intro_logo.png" />
      <Banner
        backGround="/images/intro_whatever.png"
        description="lease select the item you want"
      />
      <div>{children}</div>
    </html>
  );
}
