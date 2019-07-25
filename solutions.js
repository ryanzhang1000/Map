// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		document.getElementById("currentTile").innerHTML = "sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "water"; 
	}
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
		document.getElementById("currentTile").innerHTML = "hills";
	} else if (column >= 8) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 3 && column <= 7) {
		document.getElementById("currentTile").innerHTML = "sand";
	} else {
		document.getElementById("currentTile").innerHTML = "hills";
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 3) {
		document.getElementById("currentTile").innerHTML = "hills";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
	
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 3) {
		document.getElementById("currentTile").innerHTML = "hills";
	} else if (row >= 6) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if ( row >= 2 && row<= 5) {
		document.getElementById("currentTile").innerHTML = "sand";
	} else {
		document.getElementById("currentTile").innerHTML = "water";
	}
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (column == 7 && row == 4) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if ( column == 2 || row == 5) {
		document.getElementById("currentTile").innerHTML = "tree";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if ( row <= 5 && column <= 5) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if ( column <=1) {
		document.getElementById("currentTile").innerHTML = "hills";
	} else if ( column <= 3) {
		document.getElementById("currentTile").innerHTML = "trees";
	} else if ( column >= 8) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if ( row <= 3 && column <= 5) {
		document.getElementById("currentTile").innerHTML = "water";
	} else if (row <=  7 && column <= 5) {
		document.getElementById("currentTile").innerHTML = "sand";
	} else if (row <= 3 && column <= 11) {
		document.getElementById("currentTile").innerHTML = " hills";
	} else {
		document.getElementById("currentTile").innerHTML = "tree";
	}
}
function level12Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 4 && column <= 5 || row >= 5 && column >= 6) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 4 && column <=9 && row >= 2 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "sand";
	} else {
		document.getElementById("currentTile").innerHTML = "tree";
	}
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	if ( column >= 2 && column <= 4 && row >= 1 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "tree";
	} else if (column >= 7 && column <= 10 && row >= 3 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
}