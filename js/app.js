
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
			"percent": "90"
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
	"work": "Work",
	"projects": "Projects",
	"education": "Education",
	"skills": "Skills",
	"map": "Map"
}

var contacts = {
	"skype" : "michael.james.joyce",
	"email" : "contact@mikejoyce.me",
	"github" : "mikejoycegit",
	"twitter" : "@iammikejoyce"
}

var work = {
	"header": "Work",
	"jobs": [
		{
			"employer": "employer01",
			"title": "title",
			"location": "New York, USA",
			"dates": "January 2000 - Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi ratione ducimus impedit dolorum ipsa et aspernatur, dolor deleniti quisquam quam nobis aliquid ab mollitia numquam iste similique eveniet. Eos."
		},
		{
			"employer": "employer02",
			"title": "title",
			"location": "Nottingham, UK",
			"dates": "Febuary 2005 - June 2011",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint, sed eveniet incidunt, ex, laudantium dolore perspiciatis velit eos nobis quasi pariatur inventore itaque! Autem error accusamus velit minima nulla."		
		}
	]	
}

var projects = {
	"header": "Projects",
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
	"header": "Education",
	"schools": [
		{
			"name": "School Name",
			"location": "Bangkok, Thailand",
			"qualification": "BA",
			"dates": "2012 - 2014",
			"major": ["major01", "major02"]
		},
		{
			"name": "School Name",
			"location": "Nelson, New Zealand",
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

var worldMap = {
	"header": "Map"
}

// Display Objects

bio.display = function() {

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedLocation = HTMLlocation.replace("%data%", bio.location);
	$("#topContacts").append(formattedLocation);

}();

contacts.display = function() {

	var formattedMobile = HTMLskype.replace("%data%", contacts.skype);
	$("#footer").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", contacts.email);
	$("#footer").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	$("#footer").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
	$("#footer").append(formattedTwitter);

}();

navigation.display = function() {

	var formattedNavWork = HTMLnavigation.replace("%data%", navigation.work).replace("%id%", navigation.work);
	$("#nav").append(formattedNavWork);	
	$(document).on("click", "#linkWork", function() {
		anchorScroll("#work");
	});

	var formattedNavProjects = HTMLnavigation.replace("%data%", navigation.projects).replace("%id%", navigation.projects);
	$("#nav").append(formattedNavProjects);
	$(document).on("click", "#linkProjects", function() {
		anchorScroll("#projects");
	});

	var formattedNavEducation = HTMLnavigation.replace("%data%", navigation.education).replace("%id%", navigation.education);
	$("#nav").append(formattedNavEducation);
	$(document).on("click", "#linkEducation", function() {
		anchorScroll("#education");
	});

	var formattedNavSkills = HTMLnavigation.replace("%data%", navigation.skills).replace("%id%", navigation.skills);
	$("#nav").append(formattedNavSkills);
	$(document).on("click", "#linkSkills", function() {
		anchorScroll("#skills");
	});

	var formattedNavMap = HTMLnavigation.replace("%data%", navigation.map).replace("%id%", navigation.map);
	$("#nav").append(formattedNavMap);
	$(document).on("click", "#linkMap", function() {
		anchorScroll("#map");
	});

	function anchorScroll(target) {
	    $('html,body').animate({
	        scrollTop: $(target).offset().top
	    }, 2000);
	}

}();

work.display = function() {

	var formattedWorkHeader = HTMLworkHeader.replace("%data%", work.header);
	$("#work").append(formattedWorkHeader);

	for(job in work.jobs) {

		$("#work").append(HTMLworkStart);

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

	var formattedProjectsHeader = HTMLprojectsHeader.replace("%data%", projects.header);
	$("#projects").append(formattedProjectsHeader);

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
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

	var formattedEducationHeader = HTMLeducationHeader.replace("%data%", education.header);
	$("#education").append(formattedEducationHeader);

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