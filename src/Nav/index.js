import React, { Component } from 'react'

import Logo from '../Images/logo.png'

import {Link, NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className='nav-container'>
       	<div className='left'>
       		<Link to='/'>
	       		<div className='logo-container'>
	       			<img src={Logo} />
	       		</div>
       		</Link>
       	</div>
       	<div className='right'>
       		<NavLink to='/about' className='nav-text' activeClassName='active'>
       			About
       		</NavLink>
       		<NavLink to='/design-process' className='nav-text' activeClassName='active'>
       			Design Process
       		</NavLink>
       		<NavLink to='/works' className='nav-text' activeClassName='active'>
       			Works
       		</NavLink>       		
       	</div>
      </div>
    );
  }
}

export default Nav
