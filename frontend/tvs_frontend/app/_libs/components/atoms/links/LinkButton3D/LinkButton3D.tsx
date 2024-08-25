import { LinkItemType } from "@/_libs/types/LinkItem.types";
import { useState } from "react";
import styles from "./LinkButton3D.module.scss";

const LinkButton3D = (props: LinkItemType) => {
  const {linkText, linkTo, isExternal} = props;

  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    console.log('clicked');
    setClicked(!clicked);
  }

  return (
    <a 
      href={linkTo} 
      className={`${styles['link-button-3d']} ${clicked ? styles['link-button-3d--active'] : ""}`} 
      onClick={toggleClicked} 
      {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}
    >
      {linkText}
    </a>
  )
}

export default LinkButton3D;