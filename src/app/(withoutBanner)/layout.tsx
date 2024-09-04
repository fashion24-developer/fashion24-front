import Header from '@/components/Header/Header';

export default function WithoutBannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header src="/images/intro_logo.png" />
      <div>{children}</div>
    </>
  );
}
