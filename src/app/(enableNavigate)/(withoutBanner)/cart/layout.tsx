import Header from '@/components/Header/Header';

export default function CartLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{modal}</div>
    </>
  );
}
