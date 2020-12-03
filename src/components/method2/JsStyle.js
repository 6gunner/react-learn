export default {
	table: {
		display: 'table',
	},
	row: {
		display: 'table-row'
	},
	cell: {
		display: 'table-cell',
		padding: 5,
		'&:nthChild(1)': {
			background: '#f00'
		},
		'&:nthChild(2)': {
			background: '#0f0'
		}
	}
}
