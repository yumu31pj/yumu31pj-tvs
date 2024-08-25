
import ResponsiveImage from "@/_libs/components/atoms/images/ResponsiveImage/ResponsiveImage";
import HeaderBasicWrapper from "@/_libs/components/layouts/headers/HeaderBasicWrapper/HeaderBasicWrapper";
import { HeaderBasicType } from "./HeaderBasic.types";

const HeaderBasic = (props: HeaderBasicType) => {
  const {logoImageItem} = props;
  return (
    <HeaderBasicWrapper>
      <h1>
        <ResponsiveImage
          srcSP={logoImageItem.srcSP}
          srcPC={logoImageItem.srcPC}
          srcWebpSP={logoImageItem.srcWebpSP}
          srcWebpPC={logoImageItem.srcWebpPC}
          width={logoImageItem.width}
          height={logoImageItem.height}
          altText={logoImageItem.altText}
          breakpoint={logoImageItem.breakpoint}
        />
      </h1>
    </HeaderBasicWrapper>
  )
}

export default HeaderBasic;