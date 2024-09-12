import { Link } from 'react-router-dom';
import 'highlight.js/styles/monokai.css';

import { SlArrowRight } from 'react-icons/sl';

import {
  useCalculateReadingTime,
  useFormtDate,
  useLimitedDescription,
  useRemoveTitle,
  useRenderImage,
} from '../../../../../hooks';

import styles from './styles.module.scss';

export const CardArticle = ({ article }) => {
  const dateArticle = useFormtDate(article.updatedAt);

  const { remainingText } = useRemoveTitle(article.description, 'h1');
  const maxLength = 250;
  const LimitedDescription = useLimitedDescription(remainingText, maxLength);

  const timeText = useCalculateReadingTime(article.description);

  const handleClick = () => {
    localStorage.setItem('@IDARTICLE', article.id);
    window.scrollTo({ top: 0 });
  };

  const urlImage = useRenderImage(article);

  return (
    <li>
      <Link
        to={'/articlepage'}
        onClick={handleClick}
        className={`${styles.cardarticleContainer}`}
      >
        <div className={`${styles.cardLeft}`}>
          <div className={`${styles.headerCard}`}>
            <h2> {article.title} </h2>
            <span> {dateArticle} </span>
          </div>
          <div className={`${styles.descriptionContainer} ql-snow`}>
            <p
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: LimitedDescription }}
            />
          </div>

          <div className={`${styles.cardFooter}`}>
            <div>
              <span className={`${styles.cardCategory}`}>
                {article.category} -{' '}
              </span>
              <span className={`${styles.readingTime}`}>
                {' Reading time ' + timeText + ' minute'}
              </span>
            </div>
            <div className={`${styles.bntView}`}>
              <span className={styles.bntContent}>
                view
                <SlArrowRight className={styles.icon} />
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.cardRight}`}>
          <img src={urlImage} alt={article.title} />
        </div>
      </Link>
    </li>
  );
};
