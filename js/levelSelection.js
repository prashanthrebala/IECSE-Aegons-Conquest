function setVariables() 
{
	var content = "<div class='levelContainer'>";
	for(let i=0;i<5;i++)
	{
		content += "<div id='" + i + "' class='levelItem'>";
		if(!participant['unlocked'][i])
			content += "<img src='img/lock.png' style='height: 50%; width: 50%;'>";
		content += "</div>";
	}
	$('#ggBottom').html(content);
	nwin.show();
	nwin.maximize();
}

function shiftToLevel(n)
{

}

function launchApp()
{
	db.find({}, function(err, docs)
	{
		if(docs.length == 0)
		{
			participant['startTimeStamp'] = new Date().getTime();
			participant['endTimeStamp']   = participant['startTimeStamp'] + duration * 60000;
			db.insert(
			{
				participant: sjcl.encrypt(author, JSON.stringify(participant)),
				questions: sjcl.encrypt(author, JSON.stringify(questions))
			},function(err, newDocs){	setVariables();	});
		}
		else
		{
			participant = JSON.parse(sjcl.decrypt(author, docs[0].participant));
			questions   = JSON.parse(sjcl.decrypt(author, docs[0].questions));
			$('#sDinner2').text(participant['currency']);
			setVariables();
		}
	});
}

$(document).ready(function() 
{
	try{ launchApp(); } 
	catch(err){ console.log(err); }
});