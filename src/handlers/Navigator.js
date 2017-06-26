import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { find } from 'lodash'
import cx from 'classnames'
import About from '../components/About.js'
import Resume from '../components/Resume.js'
import Projects from '../components/Projects.js'
import Connect from '../components/Connect.js'

export default class Navigator extends React.Component {

  state = {
    selectedKey: 'resume'
  }

  navigatorKey = () =>
    [
      {key: 'navigator', render: this.renderNavigator(), background: 'background-1'},
      {key: 'about', render: this.renderAbout(), background: 'background-5'},
      {key: 'resume', render: this.renderResume(), background: 'background-4'},
      {key: 'projects', render: this.renderProjects(), background: 'background-3'},
      {key: 'connect', render: this.renderConnect(), background: 'background-2'}
    ]

  handleSelect = (selectedKey) => {
    this.setState({selectedKey: selectedKey})
  }

  renderNavigator = () =>
    <div className="Navigator-container">
      <ul className="Navigator-list gray">
        <li onClick={() => this.handleSelect('about')}>About</li>
        <li onClick={() => this.handleSelect('resume')}>Resume</li>
        <li onClick={() => this.handleSelect('projects')}>Projects</li>
        <li onClick={() => this.handleSelect('connect')}>Connect</li>
      </ul>
    </div>

  renderAbout = () =>
    <About/>

  renderProjects = () =>
    <Projects />

  renderConnect = () =>
    <Connect />

  renderResume = () =>
    <Resume />

  render() {
    const selectedKey = find(this.navigatorKey(), ['key', this.state.selectedKey])
    const isNav = this.state.selectedKey === 'navigator'
    return (
      <div className={cx('main background-position', selectedKey.background)}>
        <div className="container">
          <div
            className={cx('title green', {back: !isNav})}
            onClick={() => this.handleSelect('navigator')}>
            {isNav ? 'Amanda Lin · Software Developer' : '< Back'}
          </div>
          <ReactCSSTransitionGroup
            transitionName="entry"
            transitionAppear={false}
            transitionEnter={true}
            transitionLeave={false}
            transitionEnterTimeout={500}>
              <div className="content" key={selectedKey.key}>{selectedKey.render}</div>
          </ReactCSSTransitionGroup>
          {selectedKey.key !== 'navigator' && <div className="last-modified gray text">Last Updated: {document.lastModified}</div>}
        </div>
      </div>
    )
  }
}
