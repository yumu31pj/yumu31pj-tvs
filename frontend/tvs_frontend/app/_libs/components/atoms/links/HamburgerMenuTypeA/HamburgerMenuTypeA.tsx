import { LinkItemType } from "@/_libs/types/LinkItem.types";
import styles from "./HamburgerMenuTypeA.module.scss";
import { HamburgerMenuTypeAType } from "./HamburgerMenuTypeA.types";

const HamburgerMenuTypeA = (props: HamburgerMenuTypeAType) => {
  const {linkItems} = props;

  return (
    <ul className={styles['hamburger-menu-typeA']}>
      {linkItems.map((linkItem: LinkItemType, key: number) => (
        <li key={key} className={styles['hamburger-menu-typeA__item']}>
          <a href={linkItem.linkTo} {...(linkItem.isExternal && { target: "_blank", rel: "noreferrer noopener" })}>
            {linkItem.linkText}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default HamburgerMenuTypeA;