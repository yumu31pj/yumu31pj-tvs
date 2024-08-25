
import type { Metadata } from "next";
import BodyWrapper from "./_libs/components/layouts/bodies/BodyWrapper/BodyWrapper";
import HeaderBasic from "./_libs/components/organisms/headers/HeaderBasic/HeaderBasic";
import { HeaderContexts } from "./_libs/contexts/HeaderContexts";
import "./_libs/scss/styles.scss";

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
      <BodyWrapper>
        <HeaderBasic
          logoImageItem={
            HeaderContexts.logoImageItem
          }
        />
        <main>
          {children}
        </main>
      </BodyWrapper>
    </html>
  );
}
