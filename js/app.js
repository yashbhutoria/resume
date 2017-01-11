//TODO: Refactor all code

// Objects

var bio = {
	"name": "Mike Joyce",
	"role": "Front-End Developer",
	"location": "Nelson, New Zealand",
	"bioPic": "img/profile.jpg"
}

var skills = {
	"header": "Skills",
	"fields": [
		{
			"field": "Languages",
			"skills": ["CSS", "Sass", "SCSS", "JavaScript", "HTML", "XML", "PHP", "Python"]
		},
		{
			"field": "Libraries",
			"skills": ["jQuery", "D3"]
		},
		{
			"field": "Frameworks",
			"skills": ["Foundation", "Bootstrap", "Compass", "Knockout", "Kendo UI"]
		},
		{
			"field": "Build Tools",
			"skills": ["Gulp", "Grunt", "Bower", "Brunch"]
		},
		{
			"field": "Applications",
			"skills": ["VIM", "Sublime Text"]
		},
		{
			"field": "Methodologies",
			"skills": ["AJAX", "JSON", "JSONP", "OOP", "Google Maps API", "Uber API", "Foursquare API"]
		},
		{
			"field": "Project Domains",
			"skills": ["UX/UI Design", "Application Design", "Testing"]
		},
		{
			"field": "Operating Systems",
			"skills": ["macOS", "Windows", "Linux"]
		},
		{
			"field": "Version Control",
			"skills": ["Git", "Mercurial"]
		},
		{
			"field": "Databases",
			"skills": ["MySQL"]
		}
	]
}

var navigation = {
	"nav": ["work", "projects", "education", "skills"]
}

var contacts = {
	"email": "hello@mikejoyce.io",
	"github": "mikejoyceio",
	"codepen": "mikejoyceio",
	"instagram": "mikejoyce",
	"twitter": "@mikejoyceio"
}

var work = {
	"header": "Work",
	"jobs": [
		{
			"employer": "CityGate GIS",
			"url": "http://citygategis.com/",
			"title": "Remote Front-End Developer",
			"location": "Annapolis MD, United States",
			"dates": "January 2015 - Present",
			"description": "Development, modification and maintenance of websites and web application user interfaces. Involves working closely with server-side developers to implement their server-side code in order to develop complex, interactive and database driven websites which adhere to industry standards particularly in regard to accessibility, usability, and emerging technologies."
		},
		{
			"employer": "John's Mustang",
			"url": "http://johnsmustang.com",
			"title": "Remote Front-End Developer",
			"location": "Houston TX, United States",
			"dates": "January 2015 - Present",
			"description": "General web development tasks and maintenance of an eCommerce platform built with Netsuite and Magento."
		},
		{
			"employer": "Mikejoyce.io",
			"url": "http://mikejoyce.io",
			"title": "Freelance Front-End Developer",
			"location": "The World",
			"dates": "January 2014 - Present",
			"description": "General front-end web development for a variety of clients. A large majority of the work involves the translation of .psd designs and wireframes into cross-browser HTML5, CSS3 and JavaScript with a fast turnaround time."
		}
	]	
}

var projects = {
	"header": "Projects",
	"projects": [
		{
			"title": "Map Panda",
			"url": "http://mappanda.co",
			"dates": "2015",
			"description": "Map Panda is a single-page JavaScript application that grabs the user's location with the Geolocation API, and through the Google Places API a selection of popular location types are available to explore. The Foursquare and Uber APIs are leveraged to provide further functionality to the application.",
			"images": [
			"img/mapPanda01.jpg", "img/mapPanda02.jpg", "img/mapPanda03.jpg"
			]
		},
		{
			"title": "iOpenDecision",
			"url": "http://citygategis.com/products/iopengov",
			"dates": "2014 - Present",
			"description": "iOpenDecision is a web based application which enables the development of cost-benefit models which include a geographic component.  A collaborative approach is used to allow subject matter experts in different areas to come together and create a financial model.  This approach allows for a more comprehensive understanding of the nature of the costs and the valued benefits of a project. <br><br> The software is currently being used by The Maryland Department of Transportation (MDOT), a government agency in the U.S. state of Maryland",
			"images": [
			"img/iOpenDecision01.jpg", "img/iOpenDecision02.jpg", "img/iOpenDecision03.jpg"
			]
		},
		{
			"title": "Here Now",
			"url": "http://weareherenow.com",
			"dates": "2014",
			"description": "Here Now landing page for <a class='link-text' href='//purpose.com' target='_blank'>Purpose</a>. Commissioned by New York based agency, <a class='link-text' href='//3-tone.com' target='_blank'>3tone</a>. PSD to HTML. Built with Foundation 5, jQuery and Greensock.",
			"images": [
			"img/hereNow01.jpg", "img/hereNow02.jpg", "img/hereNow03.jpg"
			]
		},
		{
			"title": "Date Asia",
			"url": "https://date-asia.com/?skin=def_mobile",
			"dates": "2014 - Present",
			"description": "An in-progress reponsive reboot of a personal project that I started in an attempt to improve my front-end development skills. I learn well by doing, and this project gives me a chance to put new skills I've gained into practice. An open source PHP dating script on the backend, Bootstrap 3 on the front end.",
			"images": [
			"img/dateAsia01.jpg", "img/dateAsia02.jpg", "img/dateAsia03.jpg"
			]			
		}
	]
}

var education =  {
	"educationHeader": "Education",
	"formalHeader": "Formal",
	"formalSchools": [
	
	],
	"onlineHeader": "Online",
	"onlineSchools": [
		{
			"school": "Udacity",
			"course": "Front-End Web Developer Nanodegree",
			"url": "https://mikejoyce.io/certificates/udacity/front-end-web-developer-nanodegree.pdf",
			"dates": "2015"
		},
		{
			"school": "Udacity",
			"course": "Website Performance Optimization",
			"url": "https://mikejoyce.io/certificates/udacity/website-performance-optimization.pdf",
			"dates": "2015"
		},
		{
			"school": "Udacity",
			"course": "Object Orientated JavaScript",
			"url": "https://mikejoyce.io/certificates/udacity/object-orientated-javascript.pdf",
			"dates": "2015"
		},
		{
			"school": "Udacity",
			"course": "JavaScript Basics",
			"url": "https://mikejoyce.io/certificates/udacity/javascript-basics.pdf",
			"dates": "2014"
		},
		{
			"school": "Udacity",
			"course": "Intro to HTML & CSS",
			"url": "https://mikejoyce.io/certificates/udacity/intro-to-html.pdf",
			"dates": "2014"
		},
		{
			"school": "Treehouse",
			"course": "Front-End Development Track",
			"url": "https://teamtreehouse.com/mikejoyce",
			"dates": "2014"
		},
		{
			"school": "Udemy",
			"course": "User Experience Design Fundamentals",
			"url": "https://www.udemy.com/certificate/UC-4DQF7AK2/",
			"dates": "2014"
		}
	]
}

// Display Objects

bio.display = function() {

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#bio").append(formattedBioPic);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#bio").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#bio").append(formattedRole);

}();

contacts.display = function() {

	var formattedEmail = HTMLemail.replace("%data%", contacts.email);
	$("#leftContent").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	$("#contacts").append(formattedGithub);

	var formattedCodepen = HTMLcodepen.replace("%data%", contacts.codepen);
	$("#contacts").append(formattedCodepen);

	var formattedInstagram = HTMLinstagram.replace("%data%", contacts.instagram);
	$("#contacts").append(formattedInstagram);

	var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
	$("#contacts").append(formattedTwitter);

}();

navigation.display = function() {

	for(nav in navigation.nav) {
		var formattedNavigation = HTMLnavigation.replace("%data%", navigation.nav[nav]).replace("%id%", navigation.nav[nav]);
		$("#nav").append(formattedNavigation);

		anchorScroll(navigation.nav[nav]);
	}

	function anchorScroll(target) {
		$("#link"+target).on("click", function() {
				$("#"+target).children("h2").removeClass("pop");
	    	$('html,body').animate({
	        	scrollTop: $("#"+target).offset().top
	    	}, 1000, function() {
	    	});
	    });
	}

}();

work.display = function() {

	var formattedWorkHeader = HTMLworkHeader.replace("%data%", work.header);
	$("#work").append(formattedWorkHeader);

	for(job in work.jobs) {

		$("#work").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url);
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

	var formattedProjectsHeader = HTMLprojectsHeader.replace("%data%", projects.header);
	$("#projects").append(formattedProjectsHeader);

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		$(".project-entry:last").append(HTMLprojectImageStart);

		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
				$(".project-images:last").append(formattedImage);
			}
		}

	}	

}();

education.display = function() {

	var formattedEducationHeader = HTMLeducationHeader.replace("%data%", education.educationHeader);
	$("#education").append(formattedEducationHeader);

	// var formattedFormalHeader = HTMLformalHeader.replace("%data%", education.formalHeader);
	// $("#education").append(formattedFormalHeader);

	// for(school in education.formalSchools) {
	// 	$("#education").append(HTMLformalStart);
		
	// 	var formattedFormalSchool = HTMLformalSchool.replace("%data%", education.formalSchools[school].school).replace("%url%", education.formalSchools[school].url);
	// 	$(".formal-entry:last").append(formattedFormalSchool);

	// 	var formattedFormalQualification = HTMLformalQualification.replace("%data%", education.formalSchools[school].qualification);
	// 	$(".formal-entry:last").append(formattedFormalQualification);

	// 	var formattedFormalDates = HTMLformalDates.replace("%data%", education.formalSchools[school].dates);
	// 	$(".formal-entry:last").append(formattedFormalDates);
	// }

	var formattedOnlineHeader = HTMLonlineHeader.replace("%data%", education.onlineHeader);
	$("#education").append(formattedOnlineHeader);

	for(school in education.onlineSchools) {
		$("#education").append(HTMLonlineStart);
		
		var formattedOnlineCourse = HTMLonlineCourse.replace("%data%", education.onlineSchools[school].course).replace("%url%", education.onlineSchools[school].url);
		$(".online-entry:last").append(formattedOnlineCourse);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[school].school);
		$(".online-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineSchools[school].dates);
		$(".online-entry:last").append(formattedOnlineDates);
	}

}();

skills.display = function() {

	var formattedSkillsHeader = HTMLskillsHeader.replace("%data%", skills.header);
	$("#skills").append(formattedSkillsHeader);

	for(field in skills.fields) {

		var formattedSubHeader = HTMLskillsSubHeader.replace("%data%", skills.fields[field].field)
		$("#skills").append(formattedSubHeader);

		var formattedSkillsList = HTMLskillsList.replace("%data%", field);
		$("#skills").append(formattedSkillsList);

		for (skill in skills.fields[field].skills) {
			var formattedSkillsItem = HTMLskillsItem.replace("%data%", skills.fields[field].skills[skill]);
			$('#skillsList' + field).append(formattedSkillsItem);
		}

	}

}();

// Foundation
$(document).foundation();
