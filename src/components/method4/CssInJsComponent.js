import React from 'react'
import { makeStyles, styled } from '@material-ui/styles'
import classNames from 'classnames'

import s from '../global.css'
import styles from './CssInJsStyle'

const useStyles = makeStyles(styles)

export default function () {
	const classes = useStyles()
	console.log(classes);
	return (
		<div className={classNames(classes.root, 'clear')}>
			<p className={classNames(classes.test, classes.test2)}>testhaha1</p>
			<p className={classNames({
				[classes.test]: true,
				[classes.test2]: false
			})}>testhaha2</p>
			<p className={classNames([classes.test, classes.test2])}>test3</p>
			<p className={classes.test + ' ' + classes.test2}>test4</p>
			<button className={classes.button}>Styled Component</button>
		</div>
	)
}
