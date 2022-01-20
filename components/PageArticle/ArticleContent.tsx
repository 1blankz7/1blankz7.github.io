import styles from './styles.module.scss';
import {Article} from "@services/articles";

type Props = {
  article: Article;
}

const ArticleContent: React.FC<Props> = ({ article }) => (
  <div className="max-w-2xl mx-auto">
    <h1 className="text-gray-900 font-sans font-thin text-3xl my-5">{article.content.title}</h1>
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: article.html }}
    />
  </div>
);

export default ArticleContent;
