
import type { Metadata } from "next";
import "../_31pr-bootstrap/src/scss/styles.scss";

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
      <body>
      <div>
        <main>
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
