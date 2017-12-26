// GOLD STAR 1
var fs = require("fs");
var dataObj = {};

function fileParser(){
	var text = fs.readFileSync("./text8.txt").toString('utf-8'),
			textByLine = text.split("\n");

	for(var x = 0; x < textByLine.length ; x++){
		var words = textByLine[x].split(" ");
		var toAltername = words[0];
		var evalVal = words[4];
		var evalStatement = textByLine[x].split("if ")[1];
		if(!dataObj.hasOwnProperty(evalVal))
			dataObj[evalVal] = 0;
		if(!dataObj.hasOwnProperty(toAltername))
			dataObj[toAltername] = 0;
		if(eval( "dataObj." + evalStatement)){
			if(words[1] == 'inc')
				dataObj[toAltername] += parseInt(words[2])
			else
				dataObj[toAltername] -= parseInt(words[2])
		}
	}
	console.log('final answer: ', Math.max(...Object.values(dataObj)));
}

fileParser();

// GOLD STAR 2
dataObj = {};

function fileParser2(){
	var text = fs.readFileSync("./text8.txt").toString('utf-8'),
			textByLine = text.split("\n");
	var highestVal = 0;

	for(var x = 0; x < textByLine.length ; x++){
		var words = textByLine[x].split(" ");
		var toAltername = words[0];
		var evalVal = words[4];
		var evalStatement = textByLine[x].split("if ")[1];
		if(!dataObj.hasOwnProperty(evalVal))
			dataObj[evalVal] = 0;
		if(!dataObj.hasOwnProperty(toAltername))
			dataObj[toAltername] = 0;
		if(eval( "dataObj." + evalStatement)){
			if(words[1] == 'inc')
				dataObj[toAltername] += parseInt(words[2])
			else
				dataObj[toAltername] -= parseInt(words[2])
			if(dataObj[toAltername] > highestVal)
				highestVal = dataObj[toAltername];
		}
	}
	console.log('final answer: ', highestVal);
}

fileParser2();
