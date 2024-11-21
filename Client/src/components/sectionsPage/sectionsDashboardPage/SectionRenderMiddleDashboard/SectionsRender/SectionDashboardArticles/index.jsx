import { useContext } from 'react';
import {
	AppBehaviorContext,
	UserAdmContext,
} from '../../../../../../providers';

import { ArticleCard } from './ArticleCard';
import { InsertArticleModal } from '../../../../../fragments';

import styles from './styles.module.scss';

export const SectionDashboardArticles = () => {
	const { isOpenDashboard, setIsOpenDashboard } =
		useContext(AppBehaviorContext);

	const { articlesList } = useContext(UserAdmContext);

	return (
		<>
			<div className={styles.articlesContainer}>
				<h2>Article.</h2>
				<ul>
					{articlesList?.map((article) => {
						return <ArticleCard key={article.id} article={article} />;
					})}
				</ul>
			</div>

			{isOpenDashboard === true ? (
				<InsertArticleModal setIsOpenDashboard={setIsOpenDashboard} />
			) : null}
		</>
	);
};
