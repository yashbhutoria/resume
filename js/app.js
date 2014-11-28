
// Objects

var bio = {
	"name": "Mike Joyce",
	"role": "Front-End Developer",
	"location": "Nelson, New Zealand",
	"bioPic": "img/profile.jpg"
}

var skills = {
	"header": "Skills",
	"skills" : [
		{
			"skill": "html",
			"percent": "80"
		},
		{
			"skill": "css",
			"percent": "80"
		},	
		{
			"skill": "sass",
			"percent": "60"
		},	
		{
			"skill": "js",
			"percent": "50"
		}	
	]
}

var navigation = {
	"nav": ["work", "projects", "education", "skills", "map"]
}

var contacts = {
	"email" : "contact@mikejoyce.me",
	"github" : "mikejoycegit",
	"twitter" : "@iammikejoyce"
}

var work = {
	"header": "Work",
	"jobs": [
		{
			"employer": "Mikejoyce.me",
			"url": "http://mikejoyce.me",
			"title": "Freelance Front-End Developer",
			"location": "Nelson, New Zealand",
			"dates": "January 2014 - Present",
			"description": "I work from home and should probably get out more. Currently working on two projects based in the US."
		}
	]	
}

var projects = {
	"header": "Projects",
	"projects": [
		{
			"title": "Here Now",
			"url": "http://weareherenow.com",
			"dates": "2014",
			"description": "One of my first freelance gigs with a New York based agency, <a class='link-text' href='http://www.3-tone.com/clients.php' target='_blank'>3tone</a>. PSD to HTML. Built with Foundation 5, jQuery and Greensock.",
			"images": [
			"img/hereNow01.jpg", "img/hereNow02.jpg", "img/hereNow03.jpg"
			]
		},
		{
			"title": "Date Asia",
			"url": "http://date-asia.com/?skin=def_mobile",
			"dates": "2014 - Present",
			"description": "A reponsive reboot of a personal project that I started in an attempt to improve my front-end development skills. I learn well by doing, and this project gives me a chance to put new skills I've gained into practice. An open source PHP dating script on the backend, Bootstrap 3 and jQuery on the front end. Seems to be very popular with Russian hackers.",
			"images": [
			"img/dateAsia01.jpg", "img/dateAsia02.jpg", "img/dateAsia03.jpg"
			]			
		}
	]
}

var education =  {
	"educationHeader": "Education",
	"onlineHeader": "Online Courses",
	"schools": [
		{
			"name": "Chulalongkorn University",
			"url": "http://www.arts.chula.ac.th/~asc/",
			"location": "Bangkok, Thailand",
			"qualification": "Thai Language Certificate",
			"dates": "2009 - 2010"
		},
		{
			"name": "Nelson College for Boys",
			"url": "http://www.nelsoncollege.school.nz/",
			"location": "Nelson, New Zealand",
			"qualification": "High School Certificate",
			"dates": "1999 - 2002"
		}
	],

	"onlineCourses": [
		{
			"school": "Udacity",
			"course": "Front-End Development Nanodegree",
			"url": "https://www.udacity.com/course/nd001",
			"dates": "2014 - Present"
		},
		{
			"school": "Treehouse",
			"course": "Front-End Development Track",
			"url": "http://teamtreehouse.com/mikejoyce",
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

var worldMap = {
	"header": "Map"
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
	$("#contacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	$("#contacts").append(formattedGithub);

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
		$(document).on("click", "#link"+target, function() {	
	    	$('html,body').animate({
	        	scrollTop: $("#"+target).offset().top
	    	}, 2000);
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

	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
		$(".education-entry:last").append(formattedName);
		var formattedQualification = HTMLschoolQualification.replace("%data%", education.schools[school].qualification);
		$(".education-entry:last").append(formattedQualification);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

	}

	var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", education.onlineHeader);
	$("#education").append(formattedOnlineClasses);

	for(course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);
		
		var formattedOnlineCourse = HTMLonlineCourse.replace("%data%", education.onlineCourses[course].course).replace("%url%", education.onlineCourses[course].url);
		$(".online-entry:last").append(formattedOnlineCourse);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".online-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".online-entry:last").append(formattedOnlineDates);
	}

}();

skills.display = function() {

	var formattedSkillsHeader = HTMLskillsHeader.replace("%data%", skills.header);
	$("#skills").append(formattedSkillsHeader);

	for(skill in skills.skills) {
		var formattedSkill = HTMLskill.replace("%id%", skills.skills[skill].skill);
		$("#skills").append(formattedSkill);

		var id = skills.skills[skill].skill;
		var label = skills.skills[skill].skill;
		var percent = skills.skills[skill].percent;

		var id =d3.select(document.getElementById(id));

	    var rp = radialProgress(document.getElementById(skills.skills[skill].skill))
        .label(label)
        .diameter(120)
        .value(percent)
        .render();
	}

}();

worldMap.display = function() {

	var formattedMapHeader = HTMLmapHeader.replace("%data%", worldMap.header);
	$("#mapDiv").append(formattedMapHeader);

	$("#mapDiv").append(googleMap);

}();

// Foundation JavaScript

$(document).foundation();