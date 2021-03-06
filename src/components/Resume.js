import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { find } from 'lodash'
import cx from 'classnames'
import { content } from '../static/Resume-Content'

export default class Resume extends React.Component {

  state = {
    contentKey: 'experience',
    allOpen: false
  }

  handleSelect(selectedKey) {
    this.setState({contentKey: selectedKey})
  }

  renderResumeNav = () =>
    <div className="Resume-list text orange">
      {
        content.map((option) =>
          <div
            className={cx({selected: this.state.contentKey === option.key})}
            onClick={() => this.handleSelect(option.key)}
            key={option.key}>
            {option.key}
          </div>
        )
      }
      <div>
        <a href="https://goo.gl/hjyhtp" target="_blank">resume pdf</a>
      </div>
    </div>

  handleClick(selected) {
    this.setState({[selected]: !this.state[selected]})
  }

  renderToggle = (entity) =>
    <div
      className="Resume-toggle"
      onClick={() => {this.handleClick(entity)}}>
      {this.state[entity] === true ?
        <img className="Resume-img" src={require('../assets/141-shrink2.png')} alt=""/> :
        <img className="Resume-img" src={require('../assets/140-enlarge2.png')} alt=""/>
      }
    </div>

  handleToggleAll(content) {
    content.forEach((item) =>
      this.setState({[item]: !this.state.allOpen})
    )
    this.setState({allOpen: !this.state.allOpen})
  }

  renderToggleAll = (content) =>
    <div
      className="Resume-toggle-all-container"
      onClick={() => {this.handleToggleAll(content)}}>
      <div className="text">
        {this.state.allOpen === true ?
          <img className="Resume-toggle-all" src={require('../assets/139-shrink.png')} alt=""/> :
          <img className="Resume-toggle-all" src={require('../assets/138-enlarge.png')} alt=""/>
        }
        All
      </div>
    </div>

  renderSkills = (content) => {
    const group1 = content.slice(0, content.length/2)
    const group2 = content.slice(content.length/2, content.length -1)
    return (
      <div className="Resume-skills">
        <div>
          {
            group1.map((skill) =>
              <div key={skill}>·{skill}</div>
            )
          }
        </div>
        <div>
          {
            group2.map((skill) =>
              <div key={skill}>·{skill}</div>
            )
          }
        </div>
      </div>
    )
  }

  renderExperience = (content) => {
    const mapKeys = content.map((item) => item.position)
    return (
      <div>
        {this.renderToggleAll(mapKeys)}
        {
          content.map((experience) =>
            <div key={experience.position} className="Resume-experience-item">
              {this.renderToggle(experience.position)}
              <div>
                <div className="Resume-experience-header text">
                  <div>{experience.position} · {experience.company}</div>
                  <div className="Resume-experience-date">{experience.dates}</div>
                </div>
                { (this.state[experience.position] === true) &&
                  <div className="Resume-experience-main">
                    {
                      experience.bullets.map((bullet) =>
                        <div key={bullet}>· {bullet}</div>
                      )
                    }
                  </div>
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }

  renderEducation = (content) => {
    const mapKeys = content.map((item) => item.name)
    return (
      <div>
        {this.renderToggleAll(mapKeys)}
        {
          content.map((education) =>
            <div key={education.name} className="Resume-education-item">
              {this.renderToggle(education.name)}
              <div className="Resume-education-right">
                <div className="Resume-education-header text">
                  <div>{education.name} · {education.dates}</div>
                </div>
                { (this.state[education.name] === true) &&
                  <div key={education.name} className="Resume-education-main">
                    {
                      education.content.map((bullet) =>
                        <div key={bullet}>{bullet}</div>
                      )
                    }
                  </div>
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }

  renderResumeContent = () => {
    const currentContent = find(content, ['key', this.state.contentKey])
    return (
      <div key={currentContent.key}>
        {currentContent.template === 'skills' && this.renderSkills(currentContent.content)}
        {currentContent.template === 'experience' && this.renderExperience(currentContent.content)}
        {currentContent.template === 'education' && this.renderEducation(currentContent.content)}
      </div>
    )
  }

  render() {
    return (
      <div className="Resume-container">
        <div className="Resume-content">
          {this.renderResumeNav()}
          <ReactCSSTransitionGroup
            transitionName="entry"
            transitionAppear={false}
            transitionEnter={true}
            transitionLeave={false}
            transitionEnterTimeout={500}>
            {this.renderResumeContent()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
