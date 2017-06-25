import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { find } from 'lodash'
import cx from 'classnames'
import About from '../components/About.js'
import Projects from '../components/Projects.js'
import Connect from '../components/Connect.js'

export default class Navigator extends React.Component {

  state = {
    selectedKey: 'navigator'
  }

  navigatorKey = () =>
    [
      {key: 'navigator', render: this.renderNavigator(), background: 'background-1'},
      {key: 'about', render: this.renderAbout(), background: 'background-2'},
      {key: 'projects', render: this.renderProjects(), background: 'background-3'},
      {key: 'connect', render: this.renderConnect(), background: 'background-4'}
    ]

  handleSelect = (selectedKey) => {
    this.setState({selectedKey: selectedKey})
  }

  renderNavigator = () =>
    <div className="Navigator-container">
      <ul className="Navigator-list gray">
        <li onClick={() => this.handleSelect('about')}>About</li>
        <li onClick={() => this.handleSelect('projects')}>Projects</li>
        <li onClick={() => this.handleSelect('connect')}>Connect</li>
      </ul>
    </div>

  renderAbout = () =>
    <About className='background-2'/>

  renderProjects = () =>
    <Projects className='background-3'/>

  renderConnect = () =>
    <Connect className='background-4'/>

  render() {
    const selecteKey = find(this.navigatorKey(), ['key', this.state.selectedKey])
    return (
      <div className={cx('main', selecteKey.background)}>
        <div className="container">
          <div
            className="title green"
            onClick={() => this.handleSelect('navigator')}>
            {this.state.selectedKey !== 'navigator'? '< Back' : 'Amanda Lin · Software Developer'}
          </div>
          <ReactCSSTransitionGroup
            transitionName="entry"
            transitionAppear={false}
            transitionEnter={true}
            transitionLeave={false}
            transitionEnterTimeout={500}>
              <div className="content" key={selecteKey.key}>{selecteKey.render}</div>
          </ ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
