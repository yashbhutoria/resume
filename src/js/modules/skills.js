/**
 * @file skills
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $skills = $('#skills');

/**
 * skills
 * @type {Object}
 */
var skills = {
  'header': 'Skills',
  'fields': [
    {
      'field': 'Languages',
      'skills': [
        'CSS',
        'Sass',
        'SCSS',
        'JavaScript',
        'HTML',
        'XML',
        'PHP',
        'Python'
      ]
    },
    {
      'field': 'Libraries',
      'skills': [
        'jQuery',
        'D3'
      ]
    },
    {
      'field': 'Frameworks',
      'skills': [
        'Foundation',
        'Bootstrap',
        'Compass',
        'Knockout',
        'Kendo UI'
      ]
    },
    {
      'field': 'Build Tools',
      'skills': [
        'Gulp',
        'Grunt',
        'Bower',
        'Brunch'
      ]
    },
    {
      'field': 'Applications',
      'skills': [
        'VIM',
        'Sublime Text'
      ]
    },
    {
      'field': 'Methodologies',
      'skills': [
        'AJAX',
        'JSON',
        'JSONP',
        'OOP',
        'Google Maps API',
        'Uber API',
        'Foursquare API'
      ]
    },
    {
      'field': 'Project Domains',
      'skills': [
        'UX/UI Design',
        'Application Design',
        'Testing'
      ]
    },
    {
      'field': 'Operating Systems',
      'skills': [
        'macOS',
        'Windows',
        'Linux'
      ]
    },
    {
      'field': 'Version Control',
      'skills': [
        'Git',
        'Mercurial'
      ]
    },
    {
      'field': 'Databases',
      'skills': [
        'MySQL'
      ]
    }
  ]
};

var HTMLskillsHeader = '<h2>%data%</h2>';
var HTMLskillsSubHeader = '<h3 class="light-text">%data%</h3>';
var HTMLskillsList = '<ul id="skillsList%data%"></ul>';
var HTMLskillsItem = '<li id="">- %data%</li>';

var formattedSkillsHeader = HTMLskillsHeader.replace('%data%', skills.header);
$skills.append(formattedSkillsHeader);

for(var field in skills.fields) {

  let formattedSubHeader = HTMLskillsSubHeader.replace('%data%', skills.fields[field].field)
  $skills.append(formattedSubHeader);

  let formattedSkillsList = HTMLskillsList.replace('%data%', field);
  $skills.append(formattedSkillsList);

  for (var skill in skills.fields[field].skills) {
    let formattedSkillsItem = HTMLskillsItem.replace('%data%', skills.fields[field].skills[skill]);
    $(`#skillsList${field}`).append(formattedSkillsItem);
  }

}


