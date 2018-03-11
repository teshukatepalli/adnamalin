import React from 'react'

const About = () => {
  return (
    <div className="About-container">
      <img
        src={require('../assets/amanda.png')}
        className="About-image"
        alt="amanda"/>
      <div className="text">
        When I'm not thinking about what to build next, there's a 99% chance I'm thinking about what I'm going to eat next. I love food and learning about food culture. In my free time you'll find me binging documentaries on netflix and chilling with my pups Ein & Gohan.
        <br /><br />
        I'm Ohio born and raised but currently living in Chicago. While I'm midwestern at heart, I am eager to move to California.
      </div>
    </div>
  )
}

export default About
