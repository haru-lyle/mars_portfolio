import React, { Component } from 'react'

import Kamusta from '../Images/kamusta.png'

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
      	<div className='mid-center'>
      		<div className='home-image-container'>
      			<img src={Kamusta} alt='kumusta' />
      		</div>
      		<div className='text-center context-poppins home-hello'>
      			(HELLO!)
      		</div>
      		<div className='text-center context-poppins semi-bold'>
      			I’m Mars and I am a designer based in the bustling <br /> city of Manila. UX/UI design enthusiast.
      		</div>
      	</div>
      	

      	<div className='mid-right'>
      		<div className='home-contact-icon'>
      			<div className='icon'>
      				<i className='fa fa-behance'></i>
      			</div>
      			<div className='icon'>
      				<i className='fa fa-instagram'></i>
      			</div>
      			<div className='icon'>
      				<i className='fa fa-facebook-f'></i>
      			</div>
      		</div>
      	</div>

      	<div className='right-bott gmail'>
      		marsquinay@gmail.com
      	</div>


     {/* 	<div className='scroll-message left-bott'>
      		<p className='home-rotate'>
      		<i className='fa fa-long-arrow-left'></i>Scroll mo pa
      		</p>
      	</div>*/}


      	
      </div>
    );
  }
}

export default Home
