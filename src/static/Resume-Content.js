export const skills = [
  'Ruby',
  'Javascript/ES6',
  'React',
  'Sinatra',
  'Ruby on Rails',
  'RSpec',
  'Jest',
  'Enzyme',
  'SQL/PostgreSQL',
  'Kafka',
  'Splunk',
  'Sidekiq',
  'Elasticsearch',
  'AWS',
  'Heroku',
  'CircleCI',
  'Git',
  'New Relic',
  'Microservices Architecture ',
  'Agile Development ',
  'Continuous Integration ',
  'Pair Programming',
  'Test Driven Development'
]

const yelp = {
  company: 'Yelp',
  position: 'Elite Account Manager',
  dates: 'June 2015 - January 2016',
  bullets: ['Managed book of 300+ highest spending local advertisers, totaling over $300,000 in monthly revenue', 'Utilized Salesforce custom reporting, dashboards, and third party integrations']
}

const dbcExperience = {
  company: 'Dev Bootcamp Chicago',
  position: 'Student',
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
  position: 'Software Engineer I & II',
  dates: 'April 2017 - January 2018, February 2018 - Present',
  bullets: [
    'Full stack engineer on Merchandising Team focused on product data integrations with Nordstrom, inventory management, and custom shopping platform for stylists',
    'Experienced in scoping, architecting, and executing projects independently while coordinating with stakeholders, design, product, QA, and data science directly',
    'Oversaw and executed new product data integration with Nordstrom with extensive parallel testing which improved and simplified our core business responsibility with measurable gains in unlocking 200k+ products and counting',
    'Planned and rolled out new size mapping flow with less than 1% error rate in backwards compatibility which allowed our stakeholders to actively bring in missed and new products with reporting and visibility',
    'Contributed to increasing data ingestion success rates from 67% to 95%',
    'Assisting in overhaul of React shopping platform while balancing high risk greenfield work with deliverables on existing application to meet business needs',
    'Coordinating with Data Science to build features utilizing multiple models',
    'Collaborated in improving back end engineering interviews',
    'Actively a part of On Call rotations for team and general engineering'
  ]
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
  {key: 'experience', content: [tcSoftwareEngineer, tcApprentice, mentor, dbcExperience, yelp], template: 'experience'},
  {key: 'skills', content: skills, template: 'skills'},
  {key: 'education', content: [osu, dbc], template: 'education'},
]
