import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
background-color: #44014C;
width: 300px;
min-height: 200px;
margin: 30px auto;
box-sizing: border-box;
`;

const MyH2 = styled.h2`
	color: white;
	text-align: center;
`

export default function () {
	return (
		<MyDiv>
			<MyH2>ToDo</MyH2>
		</MyDiv>
	)
}

