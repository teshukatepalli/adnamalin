import React from 'react'
import { find } from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames'
import { content } from '../static/Project-Content'

export default class Projects extends React.Component {

  state = {
    contentKey: 'kinder'
  }

  handleSelect(selectedKey) {
    this.setState({contentKey: selectedKey})
  }

  renderContent = () => {
    const currentContent = find(content,['key', this.state.contentKey])
    return (
      <div>
        <div className="tldr">
          <span className="red">tldr</span>; {currentContent.tldr}
        </div>
        <div>{currentContent.text}</div>
        <div className="Project-feature-title"> Features: </div>
        <ul className="Project-feature-list">
          {currentContent.features.map((feature) =>
            <li key={feature}>{feature}</li>
          )}
        </ul>
      </div>
    )
  }

  renderList = () =>
    <div className="Project-list">
      {content.map((item) =>
        <div
          className={cx('Project-list-item',
            { blue: this.state.contentKey === item.key })
          }
          key={item.key}
          onClick={() => this.handleSelect(item.key)}>
          {item.display}
        </div>
      )}
    </div>

  renderMainContent = () =>
    <ReactCSSTransitionGroup
      transitionName="entry"
      transitionAppear={false}
      transitionEnter={true}
      transitionLeave={false}
      transitionEnterTimeout={500}>
      <div className="Project-content" key={this.state.contentKey}>
        {this.renderContent()}
      </div>
    </ ReactCSSTransitionGroup>

  renderIcons = () => {
    const currentContent = find(content,['key', this.state.contentKey])
    return (
      <div className="Project-Icons">
        <a
          href={currentContent.url}
          target="_blank">
          <img src={require(`../assets/202-sphere.png`)} alt={currentContent.url}/>
        </a>
        <a
          href={currentContent.github}
          target="_blank">
          <img src={require(`../assets/433-github.png`)} alt={currentContent.github}/>
        </a>
        <a
          href={currentContent.demo}
          target="_blank">
          <img src={require(`../assets/278-play2.png`)} alt={currentContent.demo}/>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="text Projects-container">
        {this.renderList()}
        {this.renderMainContent()}
        {this.renderIcons()}
      </div>
    )
  }
}
