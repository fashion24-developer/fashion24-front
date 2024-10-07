import * as style from './globalLayout.css';

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.globalLayoutContainer}>
      <main className={style.globalLayoutContent}>{children}</main>
    </div>
  );
}
