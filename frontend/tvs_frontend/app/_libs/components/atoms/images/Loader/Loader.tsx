// cssモジュール
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles['c-loader']}>
      <div className={styles['c-loader-animation']}></div>
    </div>
  )
}

export default Loader;