/**
 * @file navigation
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $nav = $('#nav');

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

var HTMLnavigation = '<li><a role="button" id="link%id%">%data%</a></li>';

for (var nav in navigation.nav) {
  let formattedNavigation = HTMLnavigation.replace('%data%', navigation.nav[nav]).replace('%id%', navigation.nav[nav]);
  $nav.append(formattedNavigation);
  anchorScroll(navigation.nav[nav]);
}

function anchorScroll(target) {
  $(`#link${target}`).on('click', function() {
    $(`#${target}`).children('h2').removeClass('pop');
    $('html, body').animate({
        scrollTop: $(`#${target}`).offset().top
    }, 1000, function() {

    });
  });
}
