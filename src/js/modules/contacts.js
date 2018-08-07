/**
 * @file contacts
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $contacts = $('#contacts');
const $leftContent = $('#leftContent');

/**
 * contacts
 * @type {Object}
 */
const contacts = {
  'email': 'hello@mikejoyce.io',
  'github': 'mikejoyceio',
  'codepen': 'mikejoyceio',
  'instagram': 'mikejoyce',
  'twitter': '@mikejoyceio'
};

var HTMLemail = '<div class="email">%data%</div>';
var HTMLgithub = '<div class="small-3 text-center column"><a href="https://github.com/%data%" target="_blank"><span class="fa fa-github-alt"></span></a></div>';
var HTMLcodepen = '<div class="small-3 text-center column"><a href="https://codepen.io/%data%" target="_blank"><span class="fa fa-codepen"></span></a></div>';
var HTMLinstagram = '<div class="small-3 text-center column"><a href="https://instagram.com/%data%" target="_blank"><span class="fa fa-instagram"></span></a></div>';
var HTMLtwitter = '<div class="small-3 text-center column"><a href="https://twitter.com/%data%" target="_blank"><span class="fa fa-twitter"></span></a></div>';

const formattedEmail = HTMLemail.replace('%data%', contacts.email);
$leftContent.append(formattedEmail);

const formattedGithub = HTMLgithub.replace('%data%', contacts.github);
$contacts.append(formattedGithub);

const formattedCodepen = HTMLcodepen.replace('%data%', contacts.codepen);
$contacts.append(formattedCodepen);

const formattedInstagram = HTMLinstagram.replace('%data%', contacts.instagram);
$contacts.append(formattedInstagram);

const formattedTwitter = HTMLtwitter.replace('%data%', contacts.twitter);
$contacts.append(formattedTwitter);
