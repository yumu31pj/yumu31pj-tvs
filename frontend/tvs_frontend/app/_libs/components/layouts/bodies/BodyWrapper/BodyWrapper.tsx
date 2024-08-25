import styles from './BodyWrapper.module.scss';
import { BodyWrapperType } from "./BodyWrapper.types";

const BodyWrapper = (props: BodyWrapperType) => {
  const {children} = props;
  return (
    <body className={styles['l-body-wrapper']}>
      {children}
    </body>
  )
}

export default BodyWrapper;