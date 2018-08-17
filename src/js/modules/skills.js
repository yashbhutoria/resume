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
const skills = {
  'header': 'Skills',
  'fields': [
    {
      'field': 'Languages',
      'skills': [
        'CoffeeScript',
        'CSS',
        'Sass',
        'SCSS',
        'JavaScript',
        'HTML5',
        'XML',
        'PHP',
        'Python'
      ]
    },
    {
      'field': 'Libraries',
      'skills': [
        'jQuery',
        'D3',
        'GreenSock'
      ]
    },
    {
      'field': 'Frameworks',
      'skills': [
        'ZURB Foundation',
        'Bootstrap',
        'Compass',
        'Knockout',
        'Kendo UI',
        'Jasmine'
      ]
    },
    {
      'field': 'Build Tools',
      'skills': [
        'Gulp',
        'Grunt',
        'Bower',
        'Brunch',
        'Webpack'
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
        'REST',
        'Google Maps API',
        'Uber API',
        'Foursquare API',
        'Responsive Web Design'
      ]
    },
    {
      'field': 'Technologies',
      'skills': [
        'Docker'
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

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLskillsHeader = '<h2>%data%</h2>';
const HTMLskillsStart = `<div class="small-12 medium-6 column end">
                          <div class="skill">

                          </div>
                        </div>`;
const HTMLskillsSubHeader = '<h3 class="skill-heading">%data%</h3>';
const HTMLskillsList = '<ul id="skillsList%data%"></ul>';
const HTMLskillsItem = '<li id=""><span>-</span> %data%</li>';

/** Format HTML and add to DOM... */

const formattedSkillsHeader = HTMLskillsHeader.replace('%data%', skills.header);
$skills.append(formattedSkillsHeader);

for (const field in skills.fields) {

  $skills.append(HTMLskillsStart);

  const formattedSubHeader = HTMLskillsSubHeader.replace('%data%', skills.fields[field].field)
  $('.skill:last').append(formattedSubHeader);

  const formattedSkillsList = HTMLskillsList.replace('%data%', field);
  $('.skill:last').append(formattedSkillsList);

  for (const skill in skills.fields[field].skills) {
    const formattedSkillsItem = HTMLskillsItem.replace('%data%', skills.fields[field].skills[skill]);
    $(`#skillsList${field}`).append(formattedSkillsItem);
  }

}
