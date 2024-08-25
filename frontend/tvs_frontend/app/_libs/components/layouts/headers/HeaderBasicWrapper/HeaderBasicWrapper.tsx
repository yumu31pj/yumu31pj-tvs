import styles from "./HeaderBasicWrapper.module.scss";
import { HeaderBasicWrapperType } from "./HeaderBasicWrapper.types";

const HeaderBasicWrapper = (props: HeaderBasicWrapperType) => {
  const {children} = props;
  return (
    <header id="header" className={styles['l-header']}>
      <div className={styles['l-header-inner']}>
        {children}
      </div>
    </header>
  )
}

export default HeaderBasicWrapper;