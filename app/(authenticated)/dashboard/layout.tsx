import { Footer } from "@/components/features/Footer/Footer";
import { Header } from "@/components/features/Header/Header";
import { Sidebar } from "@/components/features/Sidebar/Sidebar";
import styles from "./layout.module.scss";

export default function AuthenticatedDashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className={styles['auth-layout']}>
        <main className={styles['auth-layout__content']}>
          {children}
        </main>
        <div className={styles['auth-layout__sidebar']}>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}