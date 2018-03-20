
function isSpaceChar(char){ return (char < 33 || char > 126);}

function dropSpaceChars(string)
{
	var x = 0, y = string.length - 1;
	while(isSpaceChar(string.charCodeAt(x))) x++;
	while(isSpaceChar(string.charCodeAt(y))) y--;
	return string.substr(x, y - x + 1);
}

/*
Question Link Format
<div id="qn13" class="questionLink" onclick="displayQuestion(13)">
	<div id="qn13T" class="questionNumber">
		Question 13
	</div>
	<div id="qn13S" class="questionStatus">
		<div>
			7
		</div>
	</div>
</div>
*/

function setVariables()
{
	$('#sDinner2').text(participant['score']);

	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i = currentLevel * 5 + 1; i <= (currentLevel + 1) * 5; i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "<div id='qn" + i + "S' class='questionStatus'><div>" + (questions[i]['solved'] ? '&#10003;' : questions[i]['penalties']) + "</div></div>";
		questionLinksHTML += "</div>" + (i == numberOfQuestions ? "<hr style='width: 100%;'>" : "<hr>");
	}
	$('#sideBarID').html(questionLinksHTML);

	for(let i = currentLevel * 5 + 1; i <= (currentLevel + 1) * 5; i++)
	{
		if(questions[i]['solved'])
			$("#qn" + i + "S").css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		else if(questions[i]['attempted'])
			$("#qn" + i + "S").css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
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
	});
}

function obtainableScore(n){return questions[n]['scored'];}

function getTable()
{
	var tableContent = "<div class='tableOfScores'><div class='tableOfScoresRow'><div>Problem</div><div>Penalties</div><div>Score</div></div><hr>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		var div1 = "<div>" + i + "</div>";
		var div2 = "<div>" + questions[i]['penalties'] + "</div>";
		var div3 = "<div>" + (questions[i]['scored'] == 0 ? obtainableScore(i) : "<span style='color: #37B76C'>" + questions[i]['scored'] + "</span>") + "</div>";
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
		// db.remove({}, { multi: true }, function (err, numRemoved) 
		// {
		// 	db.insert(
		// 	{
		// 		participant: participant,
		// 		questions: questions
		// 	}, function(err, newDocs){
		// 		console.log(err);
		// 		console.log(newDocs);
		// 	});
		// });
	});
}

function submitX(callback) 
{
	var typedAnswer = $('#answerText').val();

	if(currentQuestion <= 0 || questions[currentQuestion]['solved'] || questions[currentQuestion]['attempts'] <= 0)
		return callback();

	questions[currentQuestion]['attempted'] = true;

	var id = "#qn"+currentQuestion+"S";

	typedAnswer = dropSpaceChars(typedAnswer);

	if(typedAnswer.length <= 0)
		return callback();

	if(participant['submissionHistory'][currentQuestion].indexOf(typedAnswer) >= 0)
		if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
			return callback();

	participant['submissionHistory'][currentQuestion].push(typedAnswer);

	if(Sha256.hash(typedAnswer) === questions[currentQuestion]['answer']) 
	{
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		questions[currentQuestion]['attempts'] = -1;
		$(id).css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		$(id + " > div").html('&#10003;');
		questions[currentQuestion]['solved'] = true;
		participant['score'] += questions[currentQuestion]['score'];
		$('#sDinner2').text(participant['score']);
		callback();
	}
	else if(questions[currentQuestion]['attempts'] > 0)
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		questions[currentQuestion]['attempts']--;
		$(id).css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
		$(id + " > div").text(questions[currentQuestion]['attempts']);
		callback();
	}

}

$(document).ready(function() 
{
	try{ setVariables(); } 
	catch(err){ console.log(err); }
});

// document.addEventListener('contextmenu', event => event.preventDefault());

