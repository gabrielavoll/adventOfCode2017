// GOLD STAR 1
var fs = require("fs");
var possibleBottoms = [];
var notPossibleBottom = []

function fileParser(){
	var text = fs.readFileSync("./text7.txt").toString('utf-8'),
			textByLine = text.split("\n");

	for(var x = 0; x < textByLine.length ; x++){
		var words = textByLine[x].split(" ");
		var name = words[0];
		if(words.length > 3){
			possibleBottoms.push(name);
			var notWords = textByLine[x].slice(textByLine[x].indexOf(">") + 2).split(", ");
			for(var a = 0; a < notWords.length; a++)
				notPossibleBottom.push(notWords[a]);
		} else
			notPossibleBottom.push(name);
	}
	notPossibleBottom = Array.from(new Set(notPossibleBottom));
	possibleBottoms = Array.from(new Set(possibleBottoms));
	possibleBottoms.sort();
	notPossibleBottom.sort();
	var actualPossibles = [];

	for(var x = 0; x < possibleBottoms.length; x++){
		var actuallyGood = true;
		for(var y = 0; actuallyGood && y < notPossibleBottom.length; y++)
			if(notPossibleBottom[y] == possibleBottoms[x])
				actuallyGood = false;
			else if(notPossibleBottom[y] > possibleBottoms[x] )
			 y = notPossibleBottom.length

		if(actuallyGood)
			actualPossibles.push(possibleBottoms[x]);
	}
	console.log('final answer: ', actualPossibles);
}

//fileParser();


var dataObj = {};
// GOLD STAR 2
function fileParser2(){
	var text = fs.readFileSync("./text7.txt").toString('utf-8'),
			textByLine = text.split("\n");

	for(var x = 0; x < textByLine.length ; x++){
		var words = textByLine[x].split(" ");
		var name = words[0];
		var weight = words[1].slice(1, -1);
		dataObj[name] = { weight: weight, children: [] };
		if(words.length > 3){
			var notWords = textByLine[x].slice(textByLine[x].indexOf(">") + 2).split(", ");
			dataObj[name].children = notWords
		}
	}
	var bottom = "vgzejbd";

	console.log('final answer: ', actualPossibles);
}

fileParser2();