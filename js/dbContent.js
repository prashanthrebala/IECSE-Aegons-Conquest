var currentQuestion = 0;
var currentLevel = 0;
var duration = 60;
var numberOfQuestions = 20;

var participant = 

{
	'startTimeStamp': 0,
	'endTimeStamp' : 0,
	'score': 0,
	'unlocked': [true, false, false, false, false],
	'submissionHistory': [[],[],[],[],[],[],[],[],[],[],[],[],[],
						  [],[],[],[],[],[],[],[],[],[],[],[],[]],
	'penalty': 0
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