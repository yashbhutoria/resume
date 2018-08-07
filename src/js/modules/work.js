/**
 * @file work
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $work = $('#work');

/**
 * work
 * @type {Object}
 */
const work = {
  'header': 'Work',
  'jobs': [
    {
      'employer': 'CityGate GIS',
      'url': 'http://citygategis.com/',
      'title': 'Remote Front-End Developer',
      'location': 'Annapolis MD, United States',
      'dates': '2015 - Present',
      'description': 'Development, modification and maintenance of websites and web application user interfaces. Involves working closely with server-side developers to implement their server-side code in order to develop complex, interactive and database driven websites which adhere to industry standards particularly in regard to accessibility, usability, and emerging technologies.'
    },
    {
      'employer': 'John\'s Mustang',
      'url': 'http://johnsmustang.com',
      'title': 'Remote Front-End Developer',
      'location': 'Houston TX, United States',
      'dates': '2015 - Present',
      'description': 'General web development tasks and maintenance of an eCommerce platform built with Netsuite and Magento.'
    },
    {
      'employer': 'Mikejoyce.io',
      'url': 'http://mikejoyce.io',
      'title': 'Freelance Front-End Developer',
      'location': 'The World',
      'dates': '2014 - Present',
      'description': 'General front-end web development for a variety of clients. A large majority of the work involves the translation of .psd designs and wireframes into cross-browser HTML5, CSS3 and JavaScript with a fast turnaround time.'
    }
  ]
};

var HTMLworkHeader ='<h2>%data%</h2>';
var HTMLworkStart = '<div class="work-entry content"></div>';
var HTMLworkEmployer = '<a class="link-text" href="%url%" target="_blank">%data%';
var HTMLworkTitle = ' <span class="light-text"> - %data%</span></a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

const formattedWorkHeader = HTMLworkHeader.replace('%data%', work.header);
$work.append(formattedWorkHeader);

for(var job in work.jobs) {

  $work.append(HTMLworkStart);

  let formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer).replace('%url%', work.jobs[job].url);
  let formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
  let formattedEmployerTitle = formattedEmployer + formattedTitle;
  $('.work-entry:last').append(formattedEmployerTitle);

  let formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
  $('.work-entry:last').append(formattedDates);

  let formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
  $('.work-entry:last').append(formattedLocation);

  let formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
  $('.work-entry:last').append(formattedDescription);

}
