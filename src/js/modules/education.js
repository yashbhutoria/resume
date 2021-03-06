/**
 * @file education
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $education = $('#education');

/**
 * education
 * @type {Object}
 */
const education =  {
  'educationHeader': 'Education',
  'formalHeader': 'Formal',
  'formalSchools': [

  ],
  'onlineHeader': 'Online',
  'onlineSchools': [
    {
      'school': 'Udacity',
      'course': 'Front-End Web Developer Nanodegree',
      'url': 'http://certificates.mikejoyce.io/udacity/front-end-web-developer-nanodegree.pdf',
      'dates': '2015'
    },
    {
      'school': 'Udacity',
      'course': 'Website Performance Optimization',
      'url': 'http://certificates.mikejoyce.io/udacity/website-performance-optimization.pdf',
      'dates': '2015'
    },
    {
      'school': 'Udacity',
      'course': 'Object Orientated JavaScript',
      'url': 'http://certificates.mikejoyce.io/udacity/object-orientated-javascript.pdf',
      'dates': '2015'
    },
    {
      'school': 'Udacity',
      'course': 'JavaScript Basics',
      'url': 'http://certificates.mikejoyce.io/udacity/javascript-basics.pdf',
      'dates': '2014'
    },
    {
      'school': 'Udacity',
      'course': 'Intro to HTML & CSS',
      'url': 'http://certificates.mikejoyce.io/udacity/intro-to-html.pdf',
      'dates': '2014'
    },
    {
      'school': 'Treehouse',
      'course': 'Front-End Development Track',
      'url': 'https://teamtreehouse.com/mikejoyce',
      'dates': '2014'
    },
    {
      'school': 'Udemy',
      'course': 'User Experience Design Fundamentals',
      'url': 'http://certificates.mikejoyce.io/udemy/user-experience-design-fundamentals.pdf',
      'dates': '2014'
    }
  ]
};

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLeducationHeader ='<h2>%data%</h2>';

// const HTMLformalHeader = '<h3>%data%</h3>';
// const HTMLformalStart = '<div class="formal-entry content"></div>';
// const HTMLformalSchool = '<a href="%url%" target="_blank">%data%</a>';
// const HTMLformalQualification = '<div class="light-text">%data%</div>';
// const HTMLformalDates = '<div class="date-text">%data%</div>';
// const HTMLformalLocation = '<div class="location-text">%data%</div>';

const HTMLonlineHeader = '<h3>%data%</h3>';
const HTMLonlineStart = '<div class="online-entry content"></div>';
const HTMLonlineCourse = '<a href="%url%" target="_blank">%data%</a>';
const HTMLonlineSchool = '<div class="education-school">%data%</div>';
const HTMLonlineDates = '<div class="education-date">%data%</div>';

/** Format HTML and add to DOM... */

const formattedEducationHeader = HTMLeducationHeader.replace('%data%', education.educationHeader);
$education.append(formattedEducationHeader);

// const formattedFormalHeader = HTMLformalHeader.replace('%data%', education.formalHeader);
// $education.append(formattedFormalHeader);

// for (school in education.formalSchools) {
//  $education.append(HTMLformalStart);

//  const formattedFormalSchool = HTMLformalSchool.replace('%data%', education.formalSchools[school].school).replace('%url%', education.formalSchools[school].url);
//  $('.formal-entry:last').append(formattedFormalSchool);

//  const formattedFormalQualification = HTMLformalQualification.replace('%data%', education.formalSchools[school].qualification);
//  $('.formal-entry:last').append(formattedFormalQualification);

//  const formattedFormalDates = HTMLformalDates.replace('%data%', education.formalSchools[school].dates);
//  $('.formal-entry:last').append(formattedFormalDates);
// }

const formattedOnlineHeader = HTMLonlineHeader.replace('%data%', education.onlineHeader);
$education.append(formattedOnlineHeader);

for (const school in education.onlineSchools) {

  $education.append(HTMLonlineStart);

  const formattedOnlineCourse = HTMLonlineCourse.replace('%data%', education.onlineSchools[school].course).replace('%url%', education.onlineSchools[school].url);
  $('.online-entry:last').append(formattedOnlineCourse);

  const formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineSchools[school].school);
  $('.online-entry:last').append(formattedOnlineSchool);

  const formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineSchools[school].dates);
  $('.online-entry:last').append(formattedOnlineDates);

}

