export default function AdminProductListLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <div>{modal}</div>
    </>
  );
}
