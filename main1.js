// GOLD STAR 1
var fs = require("fs");

function fileParser(){
	var text = fs.readFileSync("./input1.txt").toString('utf-8');
	var total = 0;
	for(var x = 0; x < text.length; x++)
		if( text[ (x + 1) % text.length] === text[x])
			total += parseInt(text[x]);
	console.log('final answer: ', total);
}

fileParser();


// GOLD STAR 2
function fileParser2(){
	var text = fs.readFileSync("./input1.txt").toString('utf-8');
	var total = 0;
	for(var x = 0; x < text.length; x++)
		if(text[(x + text.length/2) % text.length] === text[x])
			total += parseInt(text[x]);
	console.log('final answer: ', total);
}

fileParser2();
