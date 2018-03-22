
$("#appPassCode").keyup(function(event) 
{
	if (event.keyCode === 13)
		$("#enterApp").click();
});

function validatePassword()
{
	var pass = $("#appPassCode").val();
	$("#appPassCode").val('');
	return pass === "valarmorghulis";
}

$(document).ready(function()
{
	nwin.show();
	nwin.maximize();
	$('#iecseLogo').delay(600).fadeIn();
	$('#iecseLogo').delay(800).fadeOut();
	setTimeout(function() {
		$('#loginScreen').delay(600).fadeIn();
	}, 1800);
	db.find({}, function(err, docs)
	{
		if(docs.length != 0)
		{
			$('#appPassCode').val('valarmorghulis');
			$('#enterApp').trigger('click');
		}
	});
});

document.addEventListener('contextmenu', event => event.preventDefault());
