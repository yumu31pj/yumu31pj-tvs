/**
 * デフォルトでyyyymd形式の日付を返す (例: 2022.8.1)
 * 第2引数に引数に"yyyymmdd"を渡したらYYYYMMDD形式を返す (例: 2022.08.01)
 */

const getFormatedDate = (dateString: string, format?: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();

  let month = (date.getMonth() + 1).toString();
  let day = (date.getDate()).toString();

  if (format == "yyyymmdd") {
    month = month.padStart(2, '0');
    day = day.toString().padStart(2, '0');

  }
  return `${year}.${month}.${day}`
}

export default getFormatedDate;