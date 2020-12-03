export default {
	root : {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		// 对伪元素有效
		'&:hover': {
			background: 'gray',
			'& $button': {
				background: 'red',
				color: 'blue'
			},
		},
		// $可以嵌套引用一个本地的类名
		'& $test': {
			color: 'red'
		},
		// $可以嵌套引用一个本地的类名
		'& button': {
			color: 'red'
		},

	},

	test: {
		display: 'block',
		marginRight: '20px',
		fontSize: 16,
		fontWeight: 400,
	},

	test2: {
		marginLeft: '30px',
	},

	button: {
		height: 100,
		width: 200,
	}

}
