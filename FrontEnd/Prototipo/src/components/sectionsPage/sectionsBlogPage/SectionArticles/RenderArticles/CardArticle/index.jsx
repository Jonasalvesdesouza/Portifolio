import { Link } from 'react-router-dom';
import 'highlight.js/styles/monokai.css';

import {
  useCalculateReadingTime,
  useFormtDate,
  useLimitedDescription,
  useRemoveTitle,
  useRenderImage,
} from '../../../../../../hooks';

import styles from './styles.module.scss';

export const CardArticle = ({ article }) => {
  const dateArticle = useFormtDate(article.updatedAt);

  const { remainingText } = useRemoveTitle(article.description, 'h1');
  const maxLength = 250;
  const LimitedDescription = useLimitedDescription(remainingText, maxLength);

  const timeText = useCalculateReadingTime(article.description);

  const handleClick = () => {
    localStorage.setItem('@IDARTICLE', article.id);
  };

  const urlImage = useRenderImage(article);

  return (
    <li className={`${styles.cardarticleContainer}`}>
      <div className={`${styles.cardLeft}`}>
        <div>
          <div className={`${styles.headerCard}`}>
            <Link to={'/articlepage'} onClick={handleClick}>
              <h2> {article.title} </h2>
            </Link>
            <span> {dateArticle} </span>
          </div>
          <div className={`${styles.descriptionContainer} ql-snow`}>
            <p
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: LimitedDescription }}
            />
          </div>
        </div>

        <div className={`${styles.cardFooter}`}>
          <span className={`${styles.cardCategory}`}>
            {article.category} -{' '}
          </span>
          <span className={`${styles.readingTime}`}>
            {' Reading time ' + timeText + ' minute'}
          </span>
        </div>
      </div>
      <div className={`${styles.cardRight}`}>
        <Link to={'/articlepage'} onClick={handleClick}>
          <img src={urlImage} alt={article.title} />
        </Link>
      </div>
    </li>
  );
};
