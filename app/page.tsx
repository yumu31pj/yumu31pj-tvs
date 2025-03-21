import { NewsType } from "@/types/model.types";
import { fetchNews } from "@/utils/backend/news.queries";
import parse from "html-react-parser";

const Home = async () => {
  const news: NewsType[] = await fetchNews();
  return (
    <section>
      <h2>NEWS</h2>
      {news && (
        <ul>
          {news.map((item: NewsType, key: number) => (
            <li key={key}>
              <a href={`news/${item.id}`}>
                <h3>{item.title}</h3>
                <p>{parse(item.content)}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Home;