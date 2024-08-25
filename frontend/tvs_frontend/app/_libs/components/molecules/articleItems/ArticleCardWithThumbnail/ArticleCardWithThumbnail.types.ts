import { ResponsiveImageType } from "@/_libs/components/atoms/images/ResponsiveImage/ResponsiveImage.types";
import { LabelListType } from "../../lists/LabelList/LabelList.types";

export type ArticleCardWithThumbnailType = {
  title: string;
  linkTo: string;
  date: string;
  categories?: LabelListType;
  imageItem: ResponsiveImageType;
}