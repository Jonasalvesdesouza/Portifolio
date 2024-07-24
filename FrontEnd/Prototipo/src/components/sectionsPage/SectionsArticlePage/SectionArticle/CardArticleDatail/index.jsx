import React from 'react';
import {
  useLimitedDescription,
  useRemoveTitle,
  useRenderImage,
} from '../../../../../hooks';

import styles from './styles.module.scss';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);

export const CardArticleDatail = ({ object }) => {
  const { remainingText } = useRemoveTitle(object.description, 'h1');
  const maxLength = 300;
  const LimitedDescription = useLimitedDescription(remainingText, maxLength);
  const urlImage = useRenderImage(object);

  const highlightCode = () => {
    document.querySelectorAll('.ql-syntax').forEach((block) => {
      hljs.highlightBlock(block);
    });
  };

  React.useEffect(() => {
    highlightCode();
  }, []);

  return (
    <li className={`${styles.cardAticleDetailContainer}`}>
      <div>
        <div className={`${styles.headerContainer} ql-snow`}>
          <div>
            <h2 className="title2 articlePage">{object.title}</h2>
            <span className="parapraph articleCategory">{object.category}</span>

            <p
              className="ql-editor parapraph articleCategory"
              dangerouslySetInnerHTML={{ __html: LimitedDescription }}
            />
          </div>
        </div>
        <div className={`${styles.bannerContainer}`}>
          <img src={urlImage} alt={object.name} />
        </div>
        <div className={`${styles.contentContainer} ql-snow`}>
          <div className={`${styles.content}`}>
            <p
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: object?.description }}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
