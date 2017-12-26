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

fileParser();


var dataObj = {};
var firstBadApple = true;
// GOLD STAR 2
function fileParser2(){
	var text = fs.readFileSync("./text7.txt").toString('utf-8'),
			textByLine = text.split("\n");

	for(var x = 0; x < textByLine.length ; x++){
		var words = textByLine[x].split(" ");
		var name = words[0];
		var weight = parseInt(words[1].slice(1, -1));
		dataObj[name] = { weight: weight, children: [] };
		if(words.length > 3){
			var notWords = textByLine[x].slice(textByLine[x].indexOf(">") + 2).split(", ");
			dataObj[name].children = notWords
		}
	}

	var bottom = "vgzejbd";
	getWeightOfChildren(bottom);
}

function getWeightOfChildren(name){
	if(dataObj[name].children.length > 0){
		var total = dataObj[name].weight;
		var childrenWeight = new Array(dataObj[name].children.length);
		for(var a = 0; a < dataObj[name].children.length; a++)
			childrenWeight[a] = getWeightOfChildren(dataObj[name].children[a]);
		var missingOneOut = childrenWeight.find((x,i,arr) => x != arr[( i > 0 ? i - 1 : arr.length -1  )] && x != arr[ ( i + 1 ) % arr.length ] );
		if( missingOneOut && firstBadApple){
			firstBadApple = false;
			console.log('inconsistency in parent', name, dataObj[name]);
			console.log('weght of children', childrenWeight);
			var i = childrenWeight.findIndex((x,i,arr) => x != arr[( i > 0 ? i - 1 : arr.length -1  )] && x != arr[ ( i + 1 ) % arr.length ] );
			console.log('bad apple', dataObj[name].children[i],
			dataObj[dataObj[name].children[i]], '\n')

			firstBadApple = false;
			var difference = childrenWeight[(i+1) % childrenWeight.length] - missingOneOut;
			console.log('to fix balance ', dataObj[name].children[i], ' should change ', difference );
			console.log('current weight ', dataObj[dataObj[name].children[i]].weight );
			console.log('updated weight ', dataObj[dataObj[name].children[i]].weight + difference, '\n')
		}
		dataObj[name].actualWeight = dataObj[name].weight + childrenWeight.reduce((a, b) => a + b, 0);
		return dataObj[name].actualWeight;
	} else {
		dataObj[name].actualWeight = dataObj[name].weight;
		return dataObj[name].actualWeight;
	}
}

fileParser2();