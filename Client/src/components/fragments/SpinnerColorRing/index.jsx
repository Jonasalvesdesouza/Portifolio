import { ColorRing } from 'react-loader-spinner';

import styles from './style.module.scss';

export const SpinnerColorRing = ({ isResponsive }) => {
	const classSpiner = `${isResponsive ? styles.vertical : styles.horizontal}`;

	return (
		<div className={classSpiner}>
			<ColorRing
				visible={true}
				height="80"
				width="80"
				ariaLabel="color-ring-loading"
				wrapperStyle={{}}
				wrapperClass="color-ring-wrapper"
				colors={['#404449', '#2d3136', '#76787b', '#404449', '#404449']}
			/>
		</div>
	);
};
