import { LinkLabelListType } from "../../lists/LinkLabelList/LinkLabelList.types";

export type ArticleItemCardType = {
  title: string;
  linkTo: string;
  date: string;
  categories?: LinkLabelListType;
}