var currentQuestion = 0;
var currentLevel = 0;
var duration = 91;
var numberOfQuestions = 25;

var participant = 

{
	'startTimeStamp': 0,
	'endTimeStamp' : 0,
	'score': 0,
	'unlocked': [true, false, false, false, false],
	'submissionHistory': [[],[],[],[],[],[],[],[],[],[],[],[],[],
						  [],[],[],[],[],[],[],[],[],[],[],[],[]]
};

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
var DataStore = require('nedb');
var path = require('path');
var db = new DataStore(
{
	filename : path.join(ngui.App.dataPath, 'aegons-conquest.db'),
	autoload : true
});