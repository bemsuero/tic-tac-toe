console.log("Everything is in control.")

gamePieces = {
  xImage: "images/" + "xImage.png",
  oImage: "images/" + "oImage.png",
  blankImage: "images/" + "blankImage.png",
  paperblankImage: "images/" + "paperBlank.jpg"
}

var a = document.getElementById("one");
a.src = gamePieces.blankImage;
var b = document.getElementById("two");
b.src = gamePieces.blankImage;
var c = document.getElementById("three");
c.src = gamePieces.blankImage;
var d = document.getElementById("four");
d.src = gamePieces.blankImage;
var e = document.getElementById("five");
e.src = gamePieces.blankImage;
var f = document.getElementById("six");
f.src = gamePieces.blankImage;
var g = document.getElementById("seven");
g.src = gamePieces.blankImage;
var h = document.getElementById("eight");
h.src = gamePieces.blankImage;
var i = document.getElementById("nine");
i.src = gamePieces.blankImage;
var j = document.getElementById("score-card");
j.src = gamePieces.paperblankImage;


var counter = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;
var counter9 = 0;

function resetBoard() {
  var c = document.getElementById("one");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("two");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("three");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("four");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("five");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("six");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("seven");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("eight");
  c.src = gamePieces.blankImage;
  var c = document.getElementById("nine");
  c.src = gamePieces.blankImage;
  counter = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;
  counter5 = 0;
  counter6 = 0;
  counter7 = 0;
  counter8 = 0;
  counter9 = 0;
}

function cycleXo() {
  if (counter == 0) {
    var a = document.getElementById("one");
    a.src = gamePieces.xImage;
    counter++;
  } else if (counter == 1) {
    var b = document.getElementById("one");
    b.src = gamePieces.oImage;
    counter++;
  } else if (counter == 2) {
    var c = document.getElementById("one");
    c.src = gamePieces.blankImage;
    counter = 0;
  }
};

function cycleXo2() {
  if (counter2 == 0) {
    var a = document.getElementById("two");
    a.src = gamePieces.xImage;
    counter2++;
  } else if (counter2 == 1) {
    var b = document.getElementById("two");
    b.src = gamePieces.oImage;
    counter2++;
  } else if (counter2 == 2) {
    var c = document.getElementById("two");
    c.src = gamePieces.blankImage;
    counter2 = 0;
  }
};

function cycleXo3() {
  if (counter3 == 0) {
    var a = document.getElementById("three");
    a.src = gamePieces.xImage;
    counter3++;
  } else if (counter3 == 1) {
    var b = document.getElementById("three");
    b.src = gamePieces.oImage;
    counter3++;
  } else if (counter3 == 2) {
    var c = document.getElementById("three");
    c.src = gamePieces.blankImage;
    counter3 = 0;
  }
};

function cycleXo4() {
  if (counter4 == 0) {
    var a = document.getElementById("four");
    a.src = gamePieces.xImage;
    counter4++;
  } else if (counter4 == 1) {
    var b = document.getElementById("four");
    b.src = gamePieces.oImage;
    counter4++;
  } else if (counter4 == 2) {
    var c = document.getElementById("four");
    c.src = gamePieces.blankImage;
    counter4 = 0;
  }
};

function cycleXo5() {
  if (counter5 == 0) {
    var a = document.getElementById("five");
    a.src = gamePieces.xImage;
    counter5++;
  } else if (counter5 == 1) {
    var b = document.getElementById("five");
    b.src = gamePieces.oImage;
    counter5++;
  } else if (counter5 == 2) {
    var c = document.getElementById("five");
    c.src = gamePieces.blankImage;
    counter5 = 0;
  }
};

function cycleXo6() {
  if (counter6 == 0) {
    var a = document.getElementById("six");
    a.src = gamePieces.xImage;
    counter6++;
  } else if (counter6 == 1) {
    var b = document.getElementById("six");
    b.src = gamePieces.oImage;
    counter6++;
  } else if (counter6 == 2) {
    var c = document.getElementById("six");
    c.src = gamePieces.blankImage;
    counter6 = 0;
  }
};

function cycleXo7() {
  if (counter7 == 0) {
    var a = document.getElementById("seven");
    a.src = gamePieces.xImage;
    counter7++;
  } else if (counter7 == 1) {
    var b = document.getElementById("seven");
    b.src = gamePieces.oImage;
    counter7++;
  } else if (counter7 == 2) {
    var c = document.getElementById("seven");
    c.src = gamePieces.blankImage;
    counter7 = 0;
  }
};

function cycleXo8() {
  if (counter8 == 0) {
    var a = document.getElementById("eight");
    a.src = gamePieces.xImage;
    counter8++;
  } else if (counter8 == 1) {
    var b = document.getElementById("eight");
    b.src = gamePieces.oImage;
    counter8++;
  } else if (counter8 == 2) {
    var c = document.getElementById("eight");
    c.src = gamePieces.blankImage;
    counter8 = 0;
  }
};

function cycleXo9() {
  if (counter9 == 0) {
    var a = document.getElementById("nine");
    a.src = gamePieces.xImage;
    counter9++;
  } else if (counter9 == 1) {
    var b = document.getElementById("nine");
    b.src = gamePieces.oImage;
    counter9++;
  } else if (counter9 == 2) {
    var c = document.getElementById("nine");
    c.src = gamePieces.blankImage;
    counter9 = 0;
  }
};

var keepScore = document.getElementById("score1");
keepScore.innerHTML = "0";
var keepScore2 = document.getElementById("score2");
keepScore2.innerHTML = "0";
var scoor1 = 0;
var scoor2 = 0;

function winConditions() {
  if (counter == 1 && counter2 == 1 && counter3 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter == 2 && counter2 == 2 && counter3 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  if (counter4 == 1 && counter5 == 1 && counter6 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter4 == 2 && counter5 == 2 && counter6 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else if (counter7 == 1 && counter8 == 1 && counter9 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter7 == 2 && counter8 == 2 && counter9 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else if (counter == 1 && counter4 == 1 && counter7 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter == 2 && counter4 == 2 && counter7 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else if (counter5 == 1 && counter2 == 1 && counter8 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter5 == 2 && counter2 == 2 && counter8 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else if (counter6 == 1 && counter9 == 1 && counter3 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter6 == 2 && counter9 == 2 && counter3 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else if (counter == 1 && counter5 == 1 && counter9 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter == 2 && counter5 == 2 && counter9 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else if (counter5 == 1 && counter7 == 1 && counter3 == 1) {
    var updateScore1 = document.getElementById("score1");
    scoor1++;
    updateScore1.innerHTML = scoor1;
    alert("Player 1 Wins!");
  } else if (counter5 == 2 && counter7 == 2 && counter3 == 2) {
    var updateScore2 = document.getElementById("score2");
    scoor2++;
    updateScore2.innerHTML = scoor2;
    alert("Player 2 Wins!");
  }
  else {
  }
  resetBoard();
}
