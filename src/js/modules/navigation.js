/**
 * @file navigation
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $nav = $('#nav');
const $body = $('html, body');

/**
 * navigation
 * @type {Object}
 */
const navigation = {
  'nav': [
    'work',
    'projects',
    'education',
    'skills'
  ]
};

/**
 * HTML Helper
 * @type {string}
 */
var HTMLnavigation = '<li><a role="button" id="link%id%">%data%</a></li>';

/** Format HTML and add to DOM... */

for (var nav in navigation.nav) {
  let formattedNavigation = HTMLnavigation.replace('%data%', navigation.nav[nav]).replace('%id%', navigation.nav[nav]);
  $nav.append(formattedNavigation);
  anchorScroll(navigation.nav[nav]);
}

function anchorScroll(target) {
  $(`#link${target}`).on('click', function() {
    $(`#${target}`).children('h2').removeClass('pop');
    $body.animate({
        scrollTop: $(`#${target}`).offset().top
    }, 1000, function() {

    });
  });
}
