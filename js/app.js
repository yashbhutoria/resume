
// Objects


var language = {
	"eng" : {
		"bio" : {
			"name" : "Mike Joyce",
			"role" : "Front-End Developer",
			"contacts" : {
				"mobile" : "094-2930-930",
				"email" : "contact@mikejoyce.me",
				"github" : "mikejoycegit",
				"twitter" : "@iammikejoyce",
				"location" : "Nelson, New Zealand"
			},
			"skills" : [
				"skill01", "skill02", "skill03", "skill04"
			],
			"bioPic" : "img/fry.jpg"
		}
	},
	"esp" : {
		"bio" : {
			"name" : "Mike Joyce",
			"role" : "Devloper",
			"contacts" : {
				"mobile" : "094-2930-930",
				"email" : "contact@mikejoyce.me",
				"github" : "mikejoycegit",
				"twitter" : "@iammikejoyce",
				"location" : "Nelson, New Zealand"
			},
			"skills" : [
				"skill01", "skill02", "skill03", "skill04"
			],
			"bioPic" : "img/fry.jpg"
			}
	}
}

// var bio = {
// 	"name" : "Mike Joyce",
// 	"role" : "Front-End Developer",
// 	"contacts" : {
// 		"mobile" : "094-2930-930",
// 		"email" : "contact@mikejoyce.me",
// 		"github" : "mikejoycegit",
// 		"twitter" : "@iammikejoyce",
// 		"location" : "Nelson, New Zealand"
// 	},
// 	"skills" : [
// 		"skill01", "skill02", "skill03", "skill04"
// 	],
// 	"bioPic" : "img/fry.jpg"
// }


var work = {
	"jobs": [
		{
			"employer": "employer01",
			"title": "title",
			"location": "Madrid, Spain",
			"dates": "January 2000 - Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi ratione ducimus impedit dolorum ipsa et aspernatur, dolor deleniti quisquam quam nobis aliquid ab mollitia numquam iste similique eveniet. Eos."
		},
		{
			"employer": "employer02",
			"title": "title",
			"location": "Rome, Italy",
			"dates": "Febuary 2005 - June 2011",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint, sed eveniet incidunt, ex, laudantium dolore perspiciatis velit eos nobis quasi pariatur inventore itaque! Autem error accusamus velit minima nulla."		
		}
	]	
}

var projects = {
	"projects": [
		{
			"title": "title",
			"dates": "dates",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum atque omnis quasi expedita eum voluptate tenetur ipsa adipisci illum corporis aspernatur, corrupti dolore at, architecto voluptatem? Atque, consequuntur similique doloremque!",
			"images": [
			"img/img01.jpg", "img/img02.jpg", "img/img03.jpg"
			]
		},
		{
			"title": "title",
			"dates": "dates",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel saepe autem officia quidem, velit eligendi eius perspiciatis nulla ipsum libero natus voluptate quisquam veniam, laboriosam, labore vero delectus maiores.",
			"images": [
			"img/img01.jpg", "img/img02.jpg", "img/img03.jpg"
			]			
		}
	]
}

var education =  {
	"schools": [
		{
			"name": "School Name",
			"location": "Christchurch, New Zealand",
			"qualification": "BA",
			"dates": "2012 - 2014",
			"major": ["major01", "major02"]
		},
		{
			"name": "School Name",
			"location": "Auckland, New Zealand",
			"qualification": "BA",
			"dates": "2024 - 2015",
			"major": ["major01", "major02"]
		}
	],

	"onlineCourses": [
		{
			"title": "Title",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com"
		}
	]
}

// Display Objects

$("#header").append("<button id='lang'>Click</button>");


var lang = language.eng;

$(document).on('click', '#lang', function() {
	return lang = language.esp;	
});


lang.bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", lang.bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", lang.bio.role);
	$("#header").append(formattedRole);
	var formattedBioPic = HTMLbioPic.replace("%data%", lang.bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedMobile = HTMLmobile.replace("%data%", lang.bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", lang.bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", lang.bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", lang.bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", lang.bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	if(lang.bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);	
		for(skill in lang.bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", lang.bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

}();

work.display = function() {

	for(job in work.jobs) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);

		// concat employer and title 
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}();

projects.display = function() {

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
				$(".project-entry:last").append(formattedImage);
			}
		}

	}	

}();

education.display = function() {

	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedQualification = HTMLschoolQualification.replace("%data%", education.schools[school].qualification);
		var formattedTitle = formattedName + formattedQualification;
		$(".education-entry:last").append(formattedTitle);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if(education.schools[school].major.length > 0) {
			for(subject in education.schools[school].major) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[subject]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

	}

}();

// Google Map

$("#mapDiv").append(googleMap);

// International Name

function inName(name) {

  name = name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+ name[1];

}

// Foundation JavaScript
$(document).foundation();