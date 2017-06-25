import React from 'react'

const links = [
  {url: 'http://linkedin.com/in/adnamalin', image: '459-linkedin2.png'},
  {url: 'https://medium.com/@adnama.lin', image: '006-pencil.png'},
  {url: 'http://github.com/adnamalin', image: '433-github.png'},
  {url: 'mailto:adnama.lin@gmail.com', image: '391-mail4.png'},
]

const Connect = () => {
  return (
    <div className="Connect-container text blue">
      <div className="Connect-icons">
        {
          links.map((link) =>
            <a
              href={link.url}
              target="_blank">
              <img src={require(`../assets/${link.image}`)} alt={link.url}/>
            </a>
          )
        }
      </div>
      <div>Email is the best way to reach me.</div>
    </div>
  )
}

export default Connect
