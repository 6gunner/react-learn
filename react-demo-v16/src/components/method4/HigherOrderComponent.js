import React from 'react';
import { withStyles } from '@material-ui/styles'

import styles from './HigherOrderStyle.js';

export default withStyles(styles)(function ({classes}) {
	return (
		<div className={classes.root}>
			<p className={classes.testhaha}>Higher Order</p>
			<button className={classes.button}>Styled Component</button>
		</div>
	)
})
