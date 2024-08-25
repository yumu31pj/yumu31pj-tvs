import styles from "./GoogleMap.module.scss";
import { GoogleMapType } from "./GoogleMap.types";

const GoogleMap = (props: GoogleMapType) => {
  const {src, width, height} = props;

  return (
    <div className={styles['google-map']}>
    <iframe 
      src={src}
      width={width}
      height={height}
      allowFullScreen={true}
      loading="lazy"
    />
    </div>
  )
}

export default GoogleMap;