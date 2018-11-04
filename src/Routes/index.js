import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import DesignProcess from '../DesignProcess'

const Routes = () => {
	return (
		<div>
			<Route path='/' exact component={ Home } />
			<Route path='/about' component={ About } />
			<Route path='/design-process' component={ DesignProcess } />
			

		</div>

	)
}

export default Routes
