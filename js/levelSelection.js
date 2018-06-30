function setVariables() 
{
	let name = ['Stark', 'Baratheon', 'Targaryen', 'Lannister', 'Greyjoy'];

	var content = "<div id='cover'>";
	for(let i=0;i<5;i++)
	{
		content += "<div class='levelItem' onclick='shiftToLevel(" + i + ")'";
		if(participant['unlocked'][i])
			content += "style='opacity: 0;'";
		content += "></div>";
	}
	content += "</div>";
	content += "<div id='text'>";
	for(let i=0;i<5;i++)
	{
		content += "<div class='levelText'";
		if(participant['unlocked'][i])
			content += "style='color: #e8e8e8'";
		else
			content += "style='background-color: #080808'";
		content += ">" + name[i] + "</div>";
	}
	$('#ggBottom').html(content);
	$('#gg').show();
	nwin.show();
	nwin.maximize();
}

function shiftToLevel(n)
{
	if(!participant['unlocked'][parseInt(n)])
	{
		alert('You have not unlocked this stage yet');
		return;
	}
	sessionStorage.currentLevel = n;
	db.insert(
	{
		participant: sjcl.encrypt(author, JSON.stringify(participant)),
		questions: sjcl.encrypt(author, JSON.stringify(questions))
		// participant: participant,
		// questions: questions
	}, function(err, newDocs){window.location.href = "Home.html";});
}

function launchApp()
{
	db.find({}, function(err, docs)
	{
		if(docs.length == 0)
		{
			participant['startTimeStamp'] = new Date().getTime();
			participant['latestTimeStamp'] = participant['startTimeStamp'];
			participant['endTimeStamp']   = participant['startTimeStamp'] + duration * 60000;
			db.insert(
			{
				participant: sjcl.encrypt(author, JSON.stringify(participant)),
				questions: sjcl.encrypt(author, JSON.stringify(questions))
				// participant: participant,
				// questions: questions
			},function(err, newDocs){	setVariables();	});
		}
		else
		{
			participant = JSON.parse(sjcl.decrypt(author, docs[0].participant));
			questions   = JSON.parse(sjcl.decrypt(author, docs[0].questions));
			// participant = docs[0].participant;
			// questions = docs[0].questions;
			setVariables();
		}
	});
}

$(document).ready(function() 
{
	try{ launchApp(); } 
	catch(err){ console.log(err); }
});

document.addEventListener('contextmenu', event => event.preventDefault());