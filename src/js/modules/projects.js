/**
 * @file projects
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $projects = $('#projects');

/**
 * projects
 * @type {Object}
 */
const projects = {
  'header': 'Projects',
  'projects': [
    {
      'title': 'Foundation 6 + React Boilerplate',
      'url': 'https://github.com/mikejoyceio/foundation-react-boilerplate',
      'dates': 'Aug 2018',
      'description': 'A minimal Foundation for Sites 6 and React boilerplate.',
      'images': [
        '../dist/images/project-foundation-react-boilerplate-01.jpg',
        '../dist/images/project-foundation-react-boilerplate-02.jpg'
      ]
    },
    {
      'title': 'Foundation 6 + Webpack Boilerplate',
      'url': 'https://github.com/mikejoyceio/foundation-webpack-boilerplate',
      'dates': 'Aug 2018',
      'description': 'A minimal Foundation for Sites 6 and Webpack boilerplate.',
      'images': [
        '../dist/images/project-foundation-webpack-boilerplate-01.jpg',
        '../dist/images/project-foundation-webpack-boilerplate-02.jpg'
      ]
    },
    {
      'title': 'Foundation 6 + Gulp Boilerplate',
      'url': 'https://github.com/mikejoyceio/foundation-gulp-boilerplate',
      'dates': 'Aug 2018',
      'description': 'A minimal Foundation for Sites 6 and Gulp boilerplate.',
      'images': [
        '../dist/images/project-foundation-gulp-boilerplate-01.jpg',
        '../dist/images/project-foundation-gulp-boilerplate-02.jpg'
      ]
    },
    {
      'title': 'ADA Compliance Resource',
      'url': 'https://github.com/mikejoyceio/ada-compliance',
      'dates': 'Aug 2018',
      'description': 'A resource to document Americans with Disabilities Act (ADA) Compliance requirements for websites.',
      'images': [
        '../dist/images/project-ada-compliance-01.jpg',
        '../dist/images/project-ada-compliance-02.jpg'
      ]
    },
    {
      'title': '100% Clean for PNW',
      'url': 'http://100forpnw.org/',
      'dates': 'Dec 2017',
      'description': 'Campaign website for 100% Clean for PNW. Sketch translation to HTML/CSS/JavaScript.',
      'images': [
        '../dist/images/project-pnw-01.jpg',
        '../dist/images/project-pnw-02.jpg'
      ]
    },
    {
      'title': 'World Sight Day',
      'url': 'http://wsd.seenow.org/',
      'dates': 'Nov 2017',
      'description': 'World Sight Day campaign website for <a href="http://seenow.org/" target="_blank">SeeNow</a>. Sketch translation to HTML/CSS/JavaScript.',
      'images': [
        '../dist/images/project-world-site-day-01.jpg',
        '../dist/images/project-world-site-day-02.jpg'
      ]
    },
    {
      'title': 'Meet Hope',
      'url': 'https://www.meethope.us/',
      'dates': 'Sep 2017',
      'description': 'Meet Hope website for <a href="http://www.purpose.com/" target="_blank">Purpose</a>, which won an <a href="https://www.awwwards.com/sites/meet-hope" target="_blank">Awwwards Honorable Mention in 2017</a>. Sketch translation to HTML/CSS/JavaScript.',
      'images': [
        '../dist/images/project-meet-hope-01.jpg',
        '../dist/images/project-meet-hope-02.jpg'
      ]
    },
    {
      'title': 'JavaScript Testing',
      'url': 'https://github.com/mikejoyceio/javascript-testing',
      'dates': 'May 2015',
      'description': 'A Jasmine test suite for a web-based application that reads RSS feeds.',
      'images': [
        '../dist/images/project-javascript-testing-01.jpg',
        '../dist/images/project-javascript-testing-02.jpg'
      ]
    },
    {
      'title': 'Map Panda',
      'url': 'https://github.com/mikejoyceio/map',
      'dates': 'May 2015',
      'description': 'Map Panda is a single-page application that grabs the user\'s location with the Geolocation API, and through the Google Places API a selection of popular location types are available to explore on a Google map. The Foursquare and Uber APIs are leveraged to provide further functionality to the application.',
      'images': [
        '../dist/images/project-map-panda-01.jpg',
        '../dist/images/project-map-panda-02.jpg'
      ]
    },
    {
      'title': 'Website Performance Optimization',
      'url': 'https://github.com/mikejoyceio/website-optimization',
      'dates': 'Feb 2015',
      'description': 'A step-by-step rundown of optimizations made to a website with a number of optimization and performance-related issues so that it achieves a high PageSpeed Insights score and runs at 60 frames per second.',
      'images': [
        '../dist/images/project-website-performance-optimization-01.jpg',
        '../dist/images/project-website-performance-optimization-02.jpg'
      ]
    },
    // {
    //   'title': 'Retro Frogger',
    //   'url': 'https://github.com/mikejoyceio/arcade-game',
    //   'dates': 'Jan 2015',
    //   'description': 'A classic Frogger arcade game clone.',
    //   'images': [
    //     'https://placehold.it/377x250',
    //     'https://placehold.it/377x250'
    //   ]
    // },
  ]
};

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLprojectsHeader ='<h2>%data%</h2>';
const HTMLprojectStart = '<div class="project content"></div>';
const HTMLprojectTitle = '<a href="%url%" target="_blank">%data%</a>';
const HTMLprojectDates = '<div class="project-date">%data%</div>';

const HTMLprojectDescription = '<p>%data%</p>';
const HTMLprojectImageStart = '<div class="project-images row"></div>';

const HTMLprojectImage = `<div class="small-12 medium-6 columns">
                          <img class="project-image" src="%data%">
                        </div>`;

/** Format HTML and add to DOM... */

const formattedProjectsHeader = HTMLprojectsHeader.replace('%data%', projects.header);
$projects.append(formattedProjectsHeader);

for (const project in projects.projects) {

  $projects.append(HTMLprojectStart);

  const formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title).replace('%url%', projects.projects[project].url);
  $('.project:last').append(formattedTitle);

  const formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
  $('.project:last').append(formattedDates);

  const formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
  $('.project:last').append(formattedDescription);

  $('.project:last').append(HTMLprojectImageStart);

  if (projects.projects[project].images) {
    for (const image in projects.projects[project].images) {
      const formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image])
      $('.project-images:last').append(formattedImage);
    }
  }

}
