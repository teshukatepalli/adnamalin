import React from 'react'
import { find } from 'lodash'
import About from '../components/About.js'
import Projects from '../components/Projects.js'
import Connect from '../components/Connect.js'

export default class Navigator extends React.Component {

  state = {
    selectedKey: 'navigator'
  }

  navigatorKey = () =>
    [
      {key: 'navigator', render: this.renderNavigator()},
      {key: 'about',     render: this.renderAbout()},
      {key: 'projects',  render: this.renderProjects()},
      {key: 'connect',   render: this.renderConnect()}
    ]

  handleSelect = (selectedKey) => {
    this.setState({selectedKey: selectedKey})
  }

  renderNavigator = () =>
    <div className="Navigator-container">
      <ul className="Navigator-list">
        <li onClick={() => this.handleSelect('about')}>About</li>
        <li onClick={() => this.handleSelect('projects')}>Projects</li>
        <li onClick={() => this.handleSelect('connect')}>Connect</li>
      </ul>
    </div>

  renderAbout = () =>
    <About />

  renderProjects = () =>
    <Projects />

  renderConnect = () =>
    <Connect />

  render() {
    return (
      <div>
        {this.state.selectedKey !== 'navigator' &&
          <div onClick={() => this.handleSelect('navigator')}>Back</div>
        }
        {find(this.navigatorKey(), ['key', this.state.selectedKey]).render}
      </div>
    )
  }
}
