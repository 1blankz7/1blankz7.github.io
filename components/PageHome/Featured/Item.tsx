import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { Article } from "services/articles";

type Props = {
  article: Article;
}

const FeaturedItem: React.FC<Props> = ({ article }) => (
  <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
    <Link href={`/articles/${article.slug}`}>
      <div className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden">
        <Image
          alt={article.title}
          src={article.image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <div className="relative z-20 text-center p-5">
          <span className="inline-block text-white uppercase text-xs tracking-wide">
            {article.category}
          </span>
          <h2 className="text-white font-semibold font-sans text-xl my-5">
            {article.title}
          </h2>
          <span className="inline-block text-xs text-white font-sans">
            {dayjs(article.created).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </Link>
  </li>
);

export default FeaturedItem;
