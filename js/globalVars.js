
function isSpaceChar(char){ return (char < 33 || char > 126);}

function dropSpaceChars(string)
{
	var x = 0, y = string.length - 1;
	while(isSpaceChar(string.charCodeAt(x))) x++;
	while(isSpaceChar(string.charCodeAt(y))) y--;
	return string.substr(x, y - x + 1);
}

/*
Question Link Format:
<div id="qn13" class="questionLink" onclick="displayQuestion(13)">
	<div id="qn13T" class="questionNumber">
		Question 13
	</div>
</div>
*/


function setVariables()
{
	$('#sDinner2').text(participant['score']);
	currentLevel = parseInt(sessionStorage.currentLevel);

	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i = currentLevel * 4 + 1; i <= (currentLevel + 1) * 4; i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "</div>" + (i % 5 == 0 ? "<hr style='width: 100%;'>" : "<hr>");
	}
	$('#sideBarID').html(questionLinksHTML);

	for(let i = currentLevel * 4 + 1; i <= (currentLevel + 1) * 4; i++)
	{
		if(questions[i]['solved'])
			$("#qn" + i + "T").css({'color' : '#37B76C'});
		else if(questions[i]['penalties'] > 0)
			$("#qn" + i + "T").css({'color' : '#FF3F2F'});
	}

	$('#countDown').countdown(participant['endTimeStamp'])
	.on('update.countdown', function(event) 
	{
		var format = '%H:%M:%S';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) 
	{
		$(this).text("00:00:00");
		$("#submitButton").css("pointer-events","none");
		alert('Your time\'s up!');
		openNav();
	});
	nwin.show();
	nwin.maximize();
}

function getTable()
{
	var tableContent = "<div class='timeRemainingText' id='pens'> penalty time: " + participant['penalty'] + "</div><hr>";
	tableContent += "<div class='tableOfScores'><div class='tableOfScoresRow'><div>Problem</div><div>Penalties</div><div>Score</div></div><hr>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		var div1 = "<div>" + i + "</div>";
		var div2 = "<div>" + questions[i]['penalties'] + "</div>";
		var div3 = "<div>" + (!questions[i]['solved'] ? questions[i]['score'] : "<span style='color: #37B76C'>" + questions[i]['score'] + "</span>") + "</div>";
		tableContent += "<div class='tableOfScoresRow'>" + div1 + div2 + div3 + "</div><hr>";
	}
	tableContent += "</div>";
	return tableContent;
}

function displayQuestion(n)
{
	closeNav();
	currentQuestion = n;
	$('#appHeaderID').text("Question " + currentQuestion);
	$('#questionDescriptionID').html(questionStatements[currentQuestion]);
	$('#answerText').val('');
}

function openNav()
{ 
	$('#myScore').text(participant['score']);
	$('#tableOfScoresID').html(getTable());
	$('#mySidenav').css({'width' : '28%', 'transition' : '0.3s'});
}

function closeNav()
{ 	$('#mySidenav').css({'width' : '0', 'transition' : '0.0s'});}

function submit()
{
	submitX(function()
	{
		db.remove({}, { multi: true }, function (err, numRemoved) 
		{
			db.insert(
			{
				participant: sjcl.encrypt(author, JSON.stringify(participant)),
				questions: sjcl.encrypt(author, JSON.stringify(questions))
			}, function(err, newDocs){
				console.log(err);
				console.log(newDocs);
			});
		});
	});
}

function unlockNextLevel()
{
	if(currentLevel < 4 && !participant['unlocked'][currentLevel + 1])
	{
		var levelScore = 0;
		for(let i = currentLevel * 4 + 1; i <= (currentLevel + 1) * 4; i++)
			if(questions[i]['solved'])
				levelScore += questions[i]['score'];
	}
	if(levelScore >= 90)
	{
		let pass = ['royalstag', 'shenron', 'pantherea', 'sausages'];
		alert("You have unlocked level " + (currentLevel + 2) + "!\n Password for the PDF is: ");
		participant['unlocked'][currentLevel + 1] = true;
	}
}

function submitX(callback) 
{
	var typedAnswer = $('#answerText').val();

	if(currentQuestion <= 0 || questions[currentQuestion]['solved'])
		return callback();

	questions[currentQuestion]['attempted'] = true;

	var id = "#qn"+currentQuestion+"T";

	typedAnswer = dropSpaceChars(typedAnswer);

	if(typedAnswer.length <= 0)
		return callback();

	if(participant['submissionHistory'][currentQuestion].indexOf(typedAnswer) >= 0)
		if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
			return callback();

	participant['submissionHistory'][currentQuestion].push(typedAnswer);

	// if(Sha256.hash(typedAnswer) === questions[currentQuestion]['answer']) 
	if("aeiou".indexOf(typedAnswer) >= 0)
	{
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		$(id).css({'color' : '#37B76C'});
		questions[currentQuestion]['solved'] = true;
		participant['score'] += questions[currentQuestion]['score'];
		$('#sDinner2').text(participant['score']);
		participant['penalty'] += (questions[currentQuestion]['penalties'] + 1) * parseInt(Math.floor((new Date().getTime() - participant['startTimeStamp']) / 60000));
		unlockNextLevel();
		callback();
	}
	else if(!questions[currentQuestion]['solved'])
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		questions[currentQuestion]['penalties']++;
		$(id).css({'color' : '#FF3F2F'});
		callback();
	}

}

function restoreFromDB()
{
	db.find({}, function(err, docs)
	{
		participant = JSON.parse(sjcl.decrypt(author, docs[0].participant));
		questions   = JSON.parse(sjcl.decrypt(author, docs[0].questions));
		setVariables();
	});
}

$(document).ready(function() 
{
	try{ restoreFromDB(); } 
	catch(err){ console.log(err); }
});

document.addEventListener('contextmenu', event => event.preventDefault());

