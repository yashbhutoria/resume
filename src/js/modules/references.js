/**
 * @file references
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * DOM Elements
 * @type {Object}
 */
const $references = $('#references');

/**
 * references
 * @type {Object}
 */
const references = {
  'header': 'References',
  'references': [
    {
      'name': 'Matt Lima',
      'profileImage': '../dist/images/profile-matt.jpg',
      'company': ' 3tone',
      'position': 'Founder',
      'email': 'matt@3-tone.com',
      'quote': '<p>Mike writes the most well-commented code of anyone I\'ve worked with. This alone should be enough for you to hire him, but he adds a plethora of other skills - superb HTML/CSS/JS dev skills and a great work ethic. Mike is curious, good at research, and doesn\'t need micromanaging to deliver great product.</p>'
    },
    {
      'name': 'Frank Conry',
      'profileImage': '../dist/images/profile-frank.jpg',
      'company': 'Citygate GIS',
      'position': 'CTO',
      'email': 'frank@citygategis.com',
      'quote': `<p>Mike was an exceptional employee throughout his tenure at Citygate GIS. He started with us quite junior but grew professionally at an impressive pace to where he was taking leadership roles with us and mentoring other team members before long.</p>
                <p>What really set Mike apart at Citygate was twofold. First his continued zeal for new technologies and desire to improve our code and coding practices by leveraging them and second his unusual ability to think of the needs of the business and direct his attention toward those tasks that were most mission critical without needing any guidance. This made him exceptionally valuable because he could be given wide latitude to self direct and could be relied upon to seek requirements or direction when they were needed or to doggedly pursue the right tasks when they were not.</p>
                <p>It was a pleasure watching Mike grow, contribute more and more to the team and the company and I would jump at the opportunity to work with Mike again.</p>
                <p>I recommend Mike whole heartedly and without any reservation.</p>`
    }
  ]
};

/**
 * HTML Helpers
 * @type {string}
 */
const HTMLreferencesHeader = '<h2>%data%</h2>';
const HTMLreferenceStart = '<blockquote class="reference content"></blockquote>';
const HTMLreferenceQuote = '%data%';
const HTMLreferenceCite = `<footer>
                            <img src="%imgSrc%">
                            <cite>
                              <a href="mailto:%email%">%name%</a><span>, %position% at %company%</span>
                            </cite>
                           </footer>`

/** Format HTML and add to DOM... */

const formattedReferencesHeader = HTMLreferencesHeader.replace('%data%', references.header);
$references.append(formattedReferencesHeader);

for (const reference in references.references) {

  $references.append(HTMLreferenceStart);

  const formattedQuote = HTMLreferenceQuote.replace('%data%', references.references[reference].quote);
  $('.reference:last').append(formattedQuote);

  const formattedCite = HTMLreferenceCite
                        .replace('%imgSrc%', references.references[reference].profileImage)
                        .replace('%name%', references.references[reference].name)
                        .replace('%position%', references.references[reference].position)
                        .replace('%email%', references.references[reference].email)
                        .replace('%company%', references.references[reference].company);
  $('.reference:last').append(formattedCite);

}
