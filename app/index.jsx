import React from 'react'
import { render } from 'react-dom'

import './styles.scss'

const HelloWorld = (props) => {
	return (
		<div>
			{props.children}
			<p>Hello world, <b>{props.name}</b>!</p>
		</div>
	)
}

render(
	<HelloWorld name="Little Weaver">
		<h1>Welcome to React!</h1>
		<p>Edit <code>app/index.jsx</code> and see changes without reloading the page!</p>
	</HelloWorld>
, document.getElementById('app'))
