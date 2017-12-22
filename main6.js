// GOLD STAR 1
var fs = require("fs");

var initalMemory = [ 10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6 ]
var oldStates = [];

function fileParser(){
	var cycle = 0;
	var mem = initalMemory;
	while( !currentStateMatchesOld(mem) ){
		mem = redistributeMemory(mem);
		cycle++;
	}
	console.log('cycles:', cycle);
	console.log('loop length: ', cycle - cycleLoopCount(mem))
}

function currentStateMatchesOld(cur){
	if(oldStates.length < 1) return false;
	for(var a = 0; a < oldStates.length; a++){
		var oS = oldStates[a];
		var match = true;
		for(var b = 0; match && b < oS.length; b++)
			if(cur[b] != oS[b])
				match = false;
		if(match) return true;
	}
	return false;
}

function redistributeMemory(mem){
	oldStates.push(mem.slice(0));
	var greatest = findGreatestIndex(mem);
	var redistributeVal = mem[greatest];
	mem[greatest] = 0;
	for(var a = (greatest + 1) % mem.length; redistributeVal > 0; a = (a + 1) % mem.length ){
		mem[a]++;
		redistributeVal--;
	}
	return mem;
}

function findGreatestIndex(mem){
	var greatest = 0;
	for(var a = 1; a < mem.length; a++)
		if(mem[a] > mem[greatest]) greatest = a;
	return greatest;
}

fileParser();


// GOLD STAR 2
function cycleLoopCount(cur){
	if(oldStates.length < 1) return false;
	for(var a = 0; a < oldStates.length; a++){
		var oS = oldStates[a];
		var match = true;
		for(var b = 0; match && b < oS.length; b++)
			if(cur[b] != oS[b])
				match = false;
		if(match) return a;
	}
}