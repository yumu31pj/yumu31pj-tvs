
import { OneLinePostProps } from "@/components/features/OneLinePostList/OneLinePostList.types";
import { NewsType } from "@/types/model.types";
import getFormatedDate from "@/utils/frontend/getFormatedDate";

export const convertNewsToPosts = (list: NewsType[]): OneLinePostProps[] => {
  return list.map((item: NewsType) => (
    {
      url: `/news/${item.id}`,
      postDate: getFormatedDate(item.createdAt),
      title: item.title,
    }
  ))
}