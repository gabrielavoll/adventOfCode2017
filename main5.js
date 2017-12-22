// GOLD STAR 1
var fs = require("fs");


function fileParser(){
	var text = fs.readFileSync("./text5.txt").toString('utf-8'),
			jumpArr = text.split("\n"),
			stepCount = 0;
	for(var a = 0; a < jumpArr.length; a++ ) jumpArr[a] = parseInt(jumpArr[a]);
	for(var x = 0; x < jumpArr.length || x > 0;){
		var oldx = x;
		x = x + jumpArr[x];
		jumpArr[oldx]++;
		if(x < jumpArr.length || x > 0) stepCount++;
	}
	console.log('final answer: ', stepCount);
}

fileParser();


// GOLD STAR 2
function fileParser2(){
	var text = fs.readFileSync("./text5.txt").toString('utf-8'),
			jumpArr = text.split("\n"),
			stepCount = 0;
	for(var a = 0; a < jumpArr.length; a++ ) jumpArr[a] = parseInt(jumpArr[a]);
	for(var x = 0; x < jumpArr.length || x > 0;){
		var oldx = x;
		x = x + jumpArr[x];
		if( jumpArr[oldx] >= 3) jumpArr[oldx]--;
		else jumpArr[oldx]++;
		if(x < jumpArr.length || x > 0) stepCount++;
	}
	console.log('final answer: ', stepCount);
}

fileParser2();