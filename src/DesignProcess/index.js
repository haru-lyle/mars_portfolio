import React, { Component } from 'react'

const content =  [ 
  {
    title: 'Define the Problem', 
    content: 'I thoroughly ask questions (better safe than sorry! LOL) to client to know what problems need to be addressed and why it is necessary to turn the problem to a solution.',
  },
  {
    title: 'Goal',
    content: 'After careful planning with the client, next step is to identify our main goal. How will the user journey/framework work? Will there be a user success story on this solution?',
  },
  {
    title: 'Research',
    content: 'Through researching, I gather data where I can discover possible solutions. This step will allow me to collaborate with fellow designers or developers (or fellow tech nerds HEHE), to ensure the delivery of world class solutions.',
  },
  {
    title: 'Wire framing / Low Fidelity Wire',
    content: 'This is where I brainstorm. I sketch all possible UI designs of the project and take note of every small to big detail.',
  },
  {
    title: 'UI Design / High Fidelity',
    content: 'Finally, I make magic. I transform the approved sketch to life and fully utilize my creativity in selecting colors, icons, and images.',
  },
  {
    title: 'Prototype',
    content: 'I make the prototype of the final design using an application sent from the heavens above, the Adobe XD. This is where I make it interactive and user-friendly.',
  },
  {
    title: 'Development',
    content: 'This is where I activate my army of developers on implementing the final design to make sure it is testing-ready.',
  },
  {
    title: 'Testing',
    content: 'The main event! This is where I test the design for quality assurance and repeat the process to add new details if there are any to further improve the user experience.',
  },
]


class DesignProcess extends Component {
  render() {
    return (
      <div className='design-process-container'>
          <div className='design-title'>My Design <span className='special-color'>Process</span></div>
          <div className='design-summary'>
            I have crafted my own process of work that I proudly call “Mars 101”. 
            Here, I define the steps that I carefully take when working with clients 
            to ensure top notch output and a harmonious working relationship.
          </div>
          <div className='design-container'>
            {
              content.map((attr,index)=>{
                return(
                    <div className='design'>
                      <div className='index'>0{index + 1}.</div>
                      <div className='title'>{attr.title}</div>
                      <div className='content'>{attr.content}</div>
                    </div>
                  )
              })
            }
            
          </div>
      </div>
    );
  }
}

export default DesignProcess
