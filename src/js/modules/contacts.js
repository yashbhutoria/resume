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
  'linkedin': 'mikejoyceio',
  'twitter': '@mikejoyceio'
};

/**
 * HTML Helpers
 * @type {string}
 */
var HTMLemail = `<div class="email">%data%</div>`;

var HTMLgithub = `<div class="small-3 text-center column">
                    <a href="https://github.com/%data%" target="_blank">
                      <span class="contacts-icon fa fa-github-alt"></span>
                    </a>
                  </div>`;

var HTMLcodepen = `<div class="small-3 text-center column">
                      <a href="https://codepen.io/%data%" target="_blank">
                        <span class="contacts-icon fa fa-codepen"></span>
                      </a>
                   </div>`;

var HTMLlinkedin = `<div class="small-3 text-center column">
                      <a href="https://linkedin.com/in/%data%" target="_blank">
                        <span class="contacts-icon fa fa-linkedin"></span>
                      </a>
                     </div>`;

var HTMLtwitter = `<div class="small-3 text-center column">
                    <a href="https://twitter.com/%data%" target="_blank">
                      <span class="contacts-icon fa fa-twitter"></span>
                    </a>
                   </div>`;

/** Format HTML and add to DOM... */

const formattedEmail = HTMLemail.replace('%data%', contacts.email);
$leftContent.append(formattedEmail);

const formattedGithub = HTMLgithub.replace('%data%', contacts.github);
$contacts.append(formattedGithub);

const formattedCodepen = HTMLcodepen.replace('%data%', contacts.codepen);
$contacts.append(formattedCodepen);

const formattedLinkedin = HTMLlinkedin.replace('%data%', contacts.linkedin);
$contacts.append(formattedLinkedin);

const formattedTwitter = HTMLtwitter.replace('%data%', contacts.twitter);
$contacts.append(formattedTwitter);
