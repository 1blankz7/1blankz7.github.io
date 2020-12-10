import Link from "next/link";
import dayjs from "dayjs";
import { Article } from "services/articles";

type Props = {
  article: Article;
}

const RecentPost: React.FC<Props> = ({ article }) => (
  <li className="mb-3 flex">
    <Link href={`/posts/${article.slug}`}>
      <div className="w-1/3">
        <img className="rounded" src="https://picsum.photos/100/100" alt="" />
      </div>
      <div className="w-2/3 p-2">
        <h3 className="text-gray-900 font-thin font-sans mb-2">
          {article.title}
        </h3>
        <span className="text-xs text-gray-800 font-thin block mb-5">
          {dayjs(article.created).format("DD/MM/YYYY")}
        </span>
      </div>
    </Link>
  </li>
);

export default RecentPost;
