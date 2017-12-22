// GOLD STAR 1
var fs = require("fs");

function fileParser(){
	var text = fs.readFileSync("./text4.txt").toString('utf-8');
	var textByLine = text.split("\n")
	var total = 0;
	for(var x = 0; x < textByLine.length; x++){
		var wordArr = (textByLine[x].split(" ")).sort(),
				matchFound = false;
		for(var y = 0; !matchFound && y < wordArr.length; y++)
			for(var z = y + 1; !matchFound && z < wordArr.length; z++ )
				if(wordArr[y] == wordArr[z])
					matchFound = true;

		if(!matchFound) total++;
	}
	console.log('final answer: ', total);
}

fileParser();


// GOLD STAR 2
function fileParser2(){
	var text = fs.readFileSync("./text4.txt").toString('utf-8');
	var textByLine = text.split("\n")
	var total = 0;
	for(var x = 0; x < textByLine.length; x++){
		var wordArr = (textByLine[x].split(" ")).sort(),
				matchFound = false;
		//sort letters
		for(var w = 0; w < wordArr.length; w++)
			wordArr[w] = wordArr[w].split("").sort().join("");
		for(var y = 0; !matchFound && y < wordArr.length; y++)
			for(var z = y + 1; !matchFound && z < wordArr.length; z++ )
				if(wordArr[y] == wordArr[z])
					matchFound = true;

		if(!matchFound) total++;
	}
	console.log('final answer: ', total);
}


fileParser2();
