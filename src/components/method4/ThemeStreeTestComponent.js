import React from 'react'
import { ThemeProvider, withTheme, withStyles } from '@material-ui/styles'

import styles from './ThemeStyle'

function ThemeComponent () {
	const WithStyledComponent = withStyles(styles)(InnerComponent)
	const [color, setColor] = React.useState('#2196f3')
	const handleColorChange = (event) => {
		setColor(event.target.value)
	}
	const theme = React.useMemo(() => ({ color }), [color])

	return (
		<ThemeProvider theme={theme}>
			<div>
				<fieldset>
					<div>
						<label htmlFor="color">theme color: </label>
						<input id="color" type="color" onChange={handleColorChange} value={color}/>
					</div>
				</fieldset>
			</div>
			<WithStyledComponent/>
		</ThemeProvider>
	)
}

function InnerComponent (props) {
	const { classes, theme } = props
	return (
		<div>

			<div className={classes.root}>
				color: theme.color
			</div>
		</div>
	)
}

export default withTheme(ThemeComponent)
