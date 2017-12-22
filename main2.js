// GOLD STAR 1
var fs = require("fs");

function fileParser(){
	var text = fs.readFileSync("./text2.txt").toString('utf-8');
	var textByLine = text.split("\n")
	var total = 0;
	for(var x = 0; x < textByLine.length; x++){
		var numberArr = textByLine[x].split("\t");
		numberArr = numberArr.map( y => parseInt(y) ).sort( (a,b) => a - b);
		total += numberArr[numberArr.length -1 ] - numberArr[0];
	}
	console.log('final answer: ', total);
}

fileParser();


// GOLD STAR 2
function fileParser2(){
	var textByLine = fs.readFileSync("./text2.txt").toString('utf-8').split("\n")
	var total = 0;
	for(var x = 0; x < textByLine.length; x++){
		var numberArr = textByLine[x].split("\t").map( y => parseInt(y) ).sort( (a,b) => a - b);
		var found = false;
		for(var z = 0; z < numberArr.length - 1 && !found ; z++)
			for(var a = numberArr.length - 1; a > z; a-- )
				if( ((numberArr[a]/numberArr[z]) % 1) === 0){
					found = true;
					total += numberArr[a]/numberArr[z];
				}
	}
	console.log('final answer: ', total);
}

fileParser2();
