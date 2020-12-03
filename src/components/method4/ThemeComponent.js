import React from 'react'
import { ThemeProvider, withTheme, withStyles } from '@material-ui/styles'

import styles from './ThemeStyle'

function ThemeComponent () {
	const WithStyledComponent = withStyles(styles)(InnerComponent)
	return (
		<ThemeProvider theme={{
			color: '#2196f3'
		}}>
			<WithStyledComponent/>
		</ThemeProvider>
	)
}

function InnerComponent (props) {
	const { classes } = props
	return (
		<div>
			<div className={classes.root}>
				color: theme.color
			</div>
		</div>
	)
}

export default withTheme(ThemeComponent)
