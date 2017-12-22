// GOLD STAR 1
// deduced logically with maths
var directions = { right: {x: 1, y: 0}, left: { x: -1, y: 0}, up: { x:0, y: -1}, down: { x: 0, y: 1 } };
var nextDirection = { right: "up", up: "left", left: "down", down: "right" };
var arr = [ new Array(15), new Array(15), new Array(15), new Array(15), new Array(15), new Array(15), new Array(15),
		new Array(15), new Array(15), new Array(15), new Array(15), new Array(15), new Array(15), new Array(15), new Array(15) ];
var sameDirectionCount = 0;
var twoSideLength = 1;

// GOLD STAR 2
function main(){
	var start = 1;
	var pos = { x: 7, y: 7 };
	var direction = "right";
	for(var x = 0; start < 312051; x++ ){
		start = getNearSum(pos);
		arr[pos.x][pos.y] = start;
		sameDirectionCount++;
		pos = getNextPos(pos, directions[direction]);
		direction = getNextDirection(direction);
	}
	console.log('final answer: ', start);
}

function getNextDirection(direction){
	if(sameDirectionCount >= twoSideLength){
		sameDirectionCount = 0;
		if(nextDirection[direction] == "right" || nextDirection[direction] == "left")
			twoSideLength++;
		return nextDirection[direction];
	} else {
		return direction;
	}
}

function getNextPos(pos, change){
	return { x: (pos.x + change.x), y: (pos.y + change.y) };
}

function getNearSum(pos){
	var topRight = arr[pos.x + 1][pos.y -1] || 0,
			middleRight = arr[pos.x + 1][pos.y] || 0,
			bottomRight = arr[pos.x + 1][pos.y + 1] || 0,
			bottomMiddle = arr[pos.x][pos.y + 1] || 0,
			bottomLeft = arr[pos.x - 1][pos.y + 1] || 0,
			middleLeft = arr[pos.x - 1][pos.y] || 0,
			topLeft = arr[pos.x - 1][pos.y - 1] || 0,
			topMiddle = arr[pos.x][pos.y - 1] || 0;
	var total = topRight + middleRight + bottomRight + bottomMiddle + bottomLeft + middleLeft + topLeft + topMiddle;
	return total || 1;
}

main();
