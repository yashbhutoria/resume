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
  'employers': [
    {
      'name': 'CityGate GIS',
      'logo': '../dist/images/logo-citygate.jpg',
      'url': 'http://citygategis.com/',
      'position': 'Senior Front-End Developer (Remote)',
      'location': 'Annapolis MD, USA',
      'dates': '2015 - Present',
      'description': 'Development, modification and maintenance of websites and web application user interfaces. Involves working closely with server-side developers to implement their server-side code in order to develop complex, interactive and database driven websites which adhere to industry standards particularly in regard to accessibility, usability, and emerging technologies.'
    },
    {
      'name': 'John\'s Mustang',
      'logo': '../dist/images/logo-johns-mustang.jpg',
      'url': 'http://johnsmustang.com',
      'position': 'Web Developer (Remote)',
      'location': 'Houston TX, USA',
      'dates': '2015 - Present',
      'description': 'General web development tasks and maintenance of an eCommerce platform built with Netsuite and Magento.'
    },
    {
      'name': '3tone',
      'logo': '../dist/images/logo-3tone.jpg',
      'url': 'http://3-tone.com/',
      'position': 'Front-End Developer (Remote)',
      'location': 'New York, USA',
      'dates': '2013 - Present',
      'description': 'Front-end web development for a number of for and non-profit companies and digital agencies. (Oath, Purpose, Area17, MBooth…).'
    },
    {
      'name': 'Mikejoyce.io',
      'logo': '../dist/images/logo-mike.jpg',
      'url': 'http://mikejoyce.io',
      'position': 'Front-End Developer (Remote)',
      'location': 'The World',
      'dates': '2013 - Present',
      'description': 'General front-end web development for a variety of clients. A large majority of the work involves rapid translation of .sketch/.psd designs and wireframes into cross-browser HTML5, CSS3 and JavaScript.'
    }
  ]
};

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLworkHeader = `<h2>%data%</h2>`;
const HTMLemployerStart = '<div class="employer content"></div>';
const HTMLemployerLogo = '<img class="employer-logo" src="%data%">'
const HTMLemployerName = '<a class="link-text" href="%url%" target="_blank">%data%';
const HTMLemployerPosition = ' <span class="light-text"> - %data%</span></a>';
const HTMLemployerDates = '<div class="date-text">%data%</div>';
const HTMLemployerLocation = '<div class="location-text">%data%</div>';
const HTMLemployerDescription = '<p><br>%data%</p>';

/** Format HTML and add to DOM... */

const formattedWorkHeader = HTMLworkHeader.replace('%data%', work.header);
$work.append(formattedWorkHeader);

for (const employer in work.employers) {

  $work.append(HTMLemployerStart);

  const formattedEmployerLogo = HTMLemployerLogo.replace('%data%', work.employers[employer].logo);
  const formattedEmployerName = HTMLemployerName.replace('%data%', work.employers[employer].name).replace('%url%', work.employers[employer].url);
  const formattedEmployerPosition = HTMLemployerPosition.replace('%data%', work.employers[employer].position);
  const formattedEmployerTitle = `${formattedEmployerName}  ${formattedEmployerPosition}`;
  $('.employer:last').append(formattedEmployerTitle);

  const formattedDates = HTMLemployerDates.replace('%data%', work.employers[employer].dates);
  $('.employer:last').append(formattedDates);

  const formattedLocation = HTMLemployerLocation.replace('%data%', work.employers[employer].location);
  $('.employer:last').append(formattedLocation);

  const formattedDescription = HTMLemployerDescription.replace('%data%', work.employers[employer].description);
  $('.employer:last').append(formattedDescription);

}
