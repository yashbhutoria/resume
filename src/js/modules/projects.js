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
      'title': 'Map Panda',
      'url': 'http://mappanda.co',
      'dates': '2015',
      'description': 'Map Panda is a single-page JavaScript application that grabs the user\'s location with the Geolocation API, and through the Google Places API a selection of popular location types are available to explore. The Foursquare and Uber APIs are leveraged to provide further functionality to the application.',
      'images': [
        'dist/images/mapPanda01.jpg',
        'dist/images/mapPanda02.jpg',
        'dist/images/mapPanda03.jpg'
      ]
    },
    {
      'title': 'iOpenDecision',
      'url': 'http://citygategis.com/products/iopengov',
      'dates': '2014 - Present',
      'description': 'iOpenDecision is a web based application which enables the development of cost-benefit models which include a geographic component.  A collaborative approach is used to allow subject matter experts in different areas to come together and create a financial model.  This approach allows for a more comprehensive understanding of the nature of the costs and the valued benefits of a project. <br><br> The software is currently being used by The Maryland Department of Transportation (MDOT), a government agency in the U.S. state of Maryland',
      'images': [
        'dist/images/iOpenDecision01.jpg',
        'dist/images/iOpenDecision02.jpg',
        'dist/images/iOpenDecision03.jpg'
      ]
    },
    {
      'title': 'Here Now',
      'url': 'http://weareherenow.com',
      'dates': '2014',
      'description': 'Here Now landing page for <a class="link-text" href="http://purpose.com" target="_blank">Purpose</a>. Commissioned by New York based agency, <a class="link-text" href="http://3-tone.com" target="_blank">3tone</a>. PSD to HTML. Built with Foundation 5, jQuery and Greensock.',
      'images': [
        'dist/images/hereNow01.jpg',
        'dist/images/hereNow02.jpg',
        'dist/images/hereNow03.jpg'
      ]
    },
    {
      'title': 'Date Asia',
      'url': 'https://date-asia.com/?skin=def_mobile',
      'dates': '2014 - Present',
      'description': 'An in-progress responsive reboot of a personal project that I started in an attempt to improve my front-end development skills. I learn well by doing, and this project gives me a chance to put new skills I\'ve gained into practice. An open source PHP dating script on the backend, Bootstrap 3 on the front end.',
      'images': [
        'dist/images/dateAsia01.jpg',
        'dist/images/dateAsia02.jpg',
        'dist/images/dateAsia03.jpg'
      ]
    }
  ]
};

var HTMLprojectsHeader ='<h2>%data%</h2>';
var HTMLprojectStart = '<div class="project-entry content"></div>';
var HTMLprojectTitle = '<a class="link-text" href="%url%" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImageStart = '<div class="project-images row"></div>';
var HTMLprojectImage = '<div class="small-12 medium-4 large-4 columns"><img src="%data%"></div>';

var formattedProjectsHeader = HTMLprojectsHeader.replace('%data%', projects.header);
$projects.append(formattedProjectsHeader);

for (var project in projects.projects) {
  $projects.append(HTMLprojectStart);

  const formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title).replace('%url%', projects.projects[project].url);
  $('.project-entry:last').append(formattedTitle);

  const formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
  $('.project-entry:last').append(formattedDates);

  const formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
  $('.project-entry:last').append(formattedDescription);

  $('.project-entry:last').append(HTMLprojectImageStart);

  if (projects.projects[project].images.length > 0) {
    for (var image in projects.projects[project].images) {
      let formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image])
      $('.project-images:last').append(formattedImage);
    }
  }

}
