import React from 'react';
import styles from './table.css';

export default () => {
	return <div className={styles.table}>
		<div className={styles.row}>
			<div className={styles.cell}>A4</div>
			<div className={styles.cell}>B4</div>
			<div className={styles.cell}>C4</div>
		</div>
	</div>;
};
