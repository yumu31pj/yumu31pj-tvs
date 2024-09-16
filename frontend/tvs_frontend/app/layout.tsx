import Footer from "_project/features/Footer/footer";
import Header from "_project/features/Header/header";
import type { Metadata } from "next";
import "../_31pr-bootstrap/src/scss/styles.scss";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "TVS",
  description: "Task Visualize System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={styles['body']}>
        <Header />
        <div className={styles['container']}>
          <div className={styles['container__main']}>
            <main>
              {children}
            </main>
            <Footer />
          </div>
          <div className={styles['container__nav']}>
            <nav>
              <ul>
                <li>お知らせ一覧</li>
              </ul>
            </nav>
          </div>
        </div>
      </body>
    </html>
  );
}
