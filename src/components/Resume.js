import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { find } from 'lodash'
import { content, skills } from '../static/Resume-Content'

export default class Resume extends React.Component {

  state = {
    contentKey: 'skills'
  }

  handleSelect(selectedKey) {
    this.setState({contentKey: selectedKey})
  }

  renderResumeNav = () =>
    <div className="Resume-list text orange">
      {
        content.map((option) =>
          <div
            onClick={() => this.handleSelect(option.key)}
            key={option.key}>
            {option.key}
          </div>
        )
      }
    </div>

  renderSkills = (content) =>
    <div>
      {
        content.map((skill) =>
          <div key={skill}>{skill}</div>
        )
      }
    </div>

  renderExperience = (content) =>
    <div>
      {
        content.map((experience) =>
          <div key={experience.position}>
            <div>
              <span>{experience.company}</span>
              <span>{experience.position}</span>
            </div>
            <div>{experience.dates}</div>
            <div>
              {
                experience.bullets.map((bullet) =>
                  <div key={bullet}>{bullet}</div>
                )
              }
            </div>
          </div>
        )
      }
    </div>

  renderEducation = (content) =>
    <div>
      {
        content.map((education) =>
          <div key={education.name}>
            <div>{education.name}</div>
            <div>{education.dates}</div>
            {
              education.content.map((bullet) =>
                <div>{bullet}</div>
              )
            }
          </div>
        )
      }
    </div>

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
