/**
 * @file summary
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $summary = $('#summary');

/**
 * summary
 * @type {Object}
 */
const summary = {
  'header': 'Summary',
  'paragraphs': [
    'I am a highly dedicated Front-End Developer, and after having worked remotely for a number of clients for 4+ years now, I genuinely love the work that I do! I strive to give 100%, and my goal as a developer is to write highly organised, readable code which ultimately produces an excellent and accessible user experience.',
    'Collaborating with and learning from others, self-guided learning and doing my best to keep up to date with current and emerging technologies helps me to thrive and continuously improve as a developer in an industry that is constantly evolving. I’m proactive when it comes to communication, adaptable, and can organize and prioritize tasks under pressure.',
    'Currently, I’m focusing on both React and React Native, which I hope to eventually specialize in.'
  ]
};

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLsummaryHeader = '<h2>%data%</h2>';
const HTMLsummaryParagraph = '<p>%data%</p>';

/** Format HTML and add to DOM... */

const formattedSummaryHeader = HTMLsummaryHeader.replace('%data%', summary.header);
$summary.append(formattedSummaryHeader);

for (const paragraph in summary.paragraphs) {

  const formattedSummaryParagraph = HTMLsummaryParagraph.replace('%data%', summary.paragraphs[paragraph]);
  $summary.append(formattedSummaryParagraph);

}
