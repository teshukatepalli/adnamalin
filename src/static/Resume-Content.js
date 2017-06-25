export const skills = [
  'Ruby',
  'Ruby on Rails',
  'Sinatra',
  'Javascript/ES6',
  'React',
  'SQL/PostgreSQL',
  'RSpec',
  'Test Driven Development',
  'Agile',
  'Pair Programming',
  'Git',
  'Continuous Integration',
  'HTML/CSS',
  'Materialize/Bootstrap',
  'Salesforce',
  'Photoshop/Illustrator',
  'Google Analytics'
]

const yelp = {
  company: 'Yelp',
  position: 'Elite Account Manager',
  dates: 'June 2015 - January 2016',
  bullets: ['Managed book of 300+ highest spending local advertisers, totaling over $300,000 in monthly revenue', 'Utilized Salesforce custom reporting, dashboards, and third party integrations']
}

const dbcExperience = {
  company: 'Dev Bootcamp Chicago',
  position: 'Full Stack Web Developement Student',
  dates: 'March 2016 - July 2016',
  bullets: ['Dev Bootcamp is a 19 week intensive training program specializing in Ruby, Rails, HTML5, CSS, Test Driven Development, Object-Oriented Javascript (AJAX and Jquery), Git and Source Control, Heroku and Agile Development', 'Engaged in daily pair programming and agile group projects with tight deadlines']
}

const mentor = {
  company: 'Dev Bootcamp Chicago',
  position: 'Teaching Assistant',
  dates: 'August 2016 - September 2016',
  bullets: ['Assist students at all levels at Dev Bootcamp with code challenges, debugging, and high-level programming concepts', 'Focus on using cooperative problem solving in order to build students ability to drive their own learning']
}

const tcApprentice = {
  company: 'Trunk Club',
  position: 'Software Engineer Apprentice',
  dates: 'October 2016 - March 2017',
  bullets: ['Rotated to three teams gaining experience in back end, front end, and iOS', 'Built an internal facing application for customer experience team as part of an apprenticeship project that is being used in production', 'Assisted in collating feedback to improve apprenticeship program']
}

const tcSoftwareEngineer = {
  company: 'Trunk Club',
  position: 'Software Engineer I',
  dates: 'April 2017 - Present',
  bullets: ['Assisting in re-architecting product data ingestion pipeline from entry point to consuming downstream application', 'Using React to revamp internal shopping platform', 'Contributed to increasing data ingestion success rates from 67% to 95%', 'Actively a part of On Call Engineer rotations']
}

const osu = {
  name: 'Ohio State University',
  dates: '2011-2015',
  content: ['Strategic Communication B.A.', 'International Studies -World Economy & Business B.A.']
}

const dbc = {
  name: 'Dev Bootcamp Chicago',
  dates: 'March 2016 - July 2016',
  content: ['Full Stack Web Development']
}

export const content = [
  {key: 'skills', content: skills, template: 'skills'},
  {key: 'experience', content: [tcSoftwareEngineer, tcApprentice, mentor, dbcExperience, yelp], template: 'experience'},
  {key: 'education', content: [osu, dbc], template: 'education'},
]
