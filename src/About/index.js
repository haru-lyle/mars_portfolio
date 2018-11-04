import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className='about-container'>
      	<div className='left-about'>
      		<div className='about-content'>
      			<div className='title'>
      				<p>Hi, I'm Mars</p>
      			</div>
      			<div className='text-justify context'>
					<p>
						I am currently working as a <span className='special-color'>Graphic Designer</span> for an independent tech 
						and events company but over the past couple of years,
						I am slowly shifting to UX/UI Design. My expertise in design started way back in college, where I contributed the official logo 
						for the institution’s Student Awards, which I consider my most precious work because I was able to imprint my talent in the school 
						for years to come.
					</p>
					<p>
						As a budding UX/UI Designer, my love for the field began through my curiosity 
						in learning how to design from scratch and how to create interactive content. 
						It was a bit nerve wracking before because this is a skill that is very outside of my comfort zone,
						but through learnings from my mentors and self-teaching, I fully embraced the world of UX/UI Design. 
						My ultimate favorite part of this passion of mine is concocting designs that will help brands, 
						businesses, and their consumers’ lives easier.
					</p>
					<p>
						As a young designer, who is still grasping the creative and tech worlds, 
						I maximize my free time by learning. I have attended several conferences 
						and workshops on design, leadership, and management. I also am fond of reading 
						books and articles about design and management, as well as documentaries. 
						With all this side hustle and my full time job, I also value work-life balance
						and having a life outside of my work, because hey, I am not a robot and I don’t 
						want to turn into one (LOL). I am a very outdoors-y person. I love camping and hiking (Tara, Akyat?) 
						and get lost in the world of online gaming, most especially PUBG!
					</p>
					<p>
						Want to work with me? <span className='special-color'>Tara!</span>
					</p>
      			</div>
      		</div>

      	</div>
      	<div className='right-about'></div>
      	<div className='line-top'></div>
      	<div className='about-text'>
      		<div className='text-rotate-about'>
      			about
      		</div>
      	</div>

       
      </div>
    );
  }
}

export default About
