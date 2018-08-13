/**
 * @file bio
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $bio = $('#bio');

/**
 * bio
 * @type {Object}
 */
const bio = {
  'name': 'Mike Joyce',
  'role': 'Front-End Developer',
  'location': 'Nelson, New Zealand',
  'bioPic': 'dist/images/profile.jpg'
};

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLheaderName = '<h1 id="name">%data%</h1>';
const HTMLheaderRole = '<div class="role">%data%</div>';
const HTMLbioPic = '<div class="bio-image" style="background-image: url(%data%)"></div>';

/** Format HTML and add to DOM... */

const formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
$bio.append(formattedBioPic);

const formattedName = HTMLheaderName.replace('%data%', bio.name);
$bio.append(formattedName);

const formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$bio.append(formattedRole);
