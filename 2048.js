var board;
var row = 4;
var column = 4;
var t1, t2;

window.onload = function() {
	Start();
}

function Start() {
	board = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	]
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			// createElement -> tao 1 div <div id="xx"> </div>
			var tile = document.createElement("div");
			tile.id = i.toString() + j.toString();
			var tmp = board[i][j];
			updateTile(tile, tmp);
			document.getElementById("board").append(tile); // append cai tile vao trong bang
		}
	}
	gacha();
}

// classList : thay doi class cua phan tu  

function updateBoard() {
	var max = 0;
	var nah = 0;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var tile = document.getElementById(i.toString() + j.toString());
			var tmp = board[i][j];
			max += tmp;
			if(tmp!=0) nah++;
			updateTile(tile, tmp);
		}
	}
	document.getElementById("score").innerText= "";
	document.getElementById("score").innerText= max.toString();
	if(nah==16) {
		document.getElementById("status").innerText= "";
		document.getElementById("status").innerText= "loser";
	}
}

function updateTile(tile, tmp) {
	tile.innerText = "";  // xoa num
	tile.classList.value = "";  // xoa class v2,v4 .. 
	tile.classList.add("tile");
	if(tmp>0) {
		tile.innerText = tmp;
		tile.classList.add("v"+tmp.toString());
	}
}

// xu ly su kien xay ra 
// keyup tha phim
// keydown giu phim
// (e) chua thong tin ve phim bam





document.addEventListener("keyup", (e) => {
	// ArrowLeft , KeyA, KeyB, Digit0, ..
	if(e.code =="ArrowLeft") {
		slideLeft();
	}
	else if(e.code=="ArrowRight") {
		slideRight();
	}
	else if(e.code=="ArrowUp") {
		slideUp();
	}
	else if(e.code=="ArrowDown") {
		slideDown();
	}
	updateBoard();
	gacha();
})



//Math floor lam tron math random tu 0 -> 1
function gacha() {
	for(var z = 1; z<=10000; z++) {
		var rd1 = Math.floor(Math.random()*3) + 1;
		var rd2 = Math.floor(Math.random()*3) + 1;
		if(board[rd1][rd2]==0) {
			var num1 = 2;
			var num2 = 4;
			if(Math.random() < 0.5) {
				board[rd1][rd2] = num1;
			}
			else {
				board[rd1][rd2] = num2;
			}
			var m = board[rd1][rd2];
			updateBoard();
			break;
		}
	}
}

// push cuoi  mang . unshift dau mang 
//splice xoa
function slideLeft() {
	for(var i = 0; i < 4; i++) {
		var cnt = [];
		for(var j = 0; j < 4; j++) {
			if(board[i][j] != 0) {
				cnt.push(board[i][j]);
			}
		}
		for(var j = 0; j < cnt.length - 1; j++) {
			if(cnt[j] == cnt[j+1]) {
				cnt[j] *= 2;
				cnt.splice(j+1, 1);
			}
		}
		var k = cnt.length;
		for(var j = k; j < 4; j++) {
			cnt.push(0);
		}
		for(var j = 0; j < 4; j++) {
			board[i][j] = cnt[j];
		}
	}
}

function slideRight() {
	for(var i = 0; i < 4; i++) {
		var cnt = [];
		for(var j = 0; j < 4; j++) {
			if(board[i][j] != 0) {
				cnt.push(board[i][j]);
			}
		}
		for(var j = cnt.length - 1; j > 0; j--) {
			if(cnt[j] == cnt[j-1]) {
				cnt[j] *= 2;
				cnt.splice(j-1, 1);
			}
		}
		var k = cnt.length;
		for(var j = k; j < 4; j++) {
			cnt.unshift(0);
		}
		for(var j = 0; j < 4; j++) {
			board[i][j] = cnt[j];
		}
	}
}


function slideDown() {
	for(var i = 0; i < 4; i++) {
		var cnt = [];
		for(var j = 0; j < 4; j++) {
			if(board[j][i] != 0) {
				cnt.push(board[j][i]);
			}
		}
		for(var j = cnt.length - 1; j > 0; j--) {
			if(cnt[j] == cnt[j-1]) {
				cnt[j] *= 2;
				cnt.splice(j-1, 1);
			}
		}
		var k = cnt.length;
		for(var j = k; j < 4; j++) {
			cnt.unshift(0);
		}
		for(var j = 0; j < 4; j++) {
			board[j][i] = cnt[j];
		}
	}
}

function slideUp() {
	for(var i = 0; i < 4; i++) {
		var cnt = [];
		for(var j = 0; j < 4; j++) {
			if(board[j][i] != 0) {
				cnt.push(board[j][i]);
			}
		}
		for(var j = 0; j < cnt.length - 1; j++) {
			if(cnt[j] == cnt[j+1]) {
				cnt[j] *= 2;
				cnt.splice(j+1, 1);
			}
		}
		var k = cnt.length;
		for(var j = k; j < 4; j++) {
			cnt.push(0);
		}
		for(var j = 0; j < 4; j++) {
			board[j][i] = cnt[j];
		}
	}
}
