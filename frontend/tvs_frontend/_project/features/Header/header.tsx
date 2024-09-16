import { Picture } from "_31pr-bootstrap/src/components/ui/image";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles['header']}>
      <Link href="./">
        <Picture
          srcSP={"/images/common/logo.png"}
          srcWebpSP={"/images/common/logo.png.webp"}
          width={30}
          height={30}
          altText={"TVS"}
          breakpoint={951}
        />
      </Link>
    </header>
  )
}

export default Header;
