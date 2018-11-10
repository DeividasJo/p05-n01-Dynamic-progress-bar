function move() {
  var elem = document.getElementById("box");
  var number = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (number >= 90) {
      clearInterval(id);
    } else {
      number++;
      elem.innerHTML = number * 1 + '%';
    }
  }
}
function move1() {
  var elem = document.getElementById("box");
  var number = 90;
  var id = setInterval(frame, 20);
  function frame() {
    if (number <= 0) {
      clearInterval(id);
    } else {
      number--;
      elem.innerHTML = number * 1 + '%';
    }
  }
}
function move2() {
  var elem = document.getElementById("box1");
  var number = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (number >= 80) {
      clearInterval(id);
    } else {
      number++;
      elem.innerHTML = number * 1 + '%';
    }
  }
}
function move3() {
  var elem = document.getElementById("box1");
  var number = 80;
  var id = setInterval(frame, 20);
  function frame() {
    if (number <= 0) {
      clearInterval(id);
    } else {
      number--;
      elem.innerHTML = number * 1 + '%';
    }
  }
}
function move4() {
  var elem = document.getElementById("box2");
  var number = 0;
  var id = setInterval(frame, 35);
  function frame() {
    if (number >= 50) {
      clearInterval(id);
    } else {
      number++;
      elem.innerHTML = number * 1 + '%';
    }
  }
}
function move5() {
  var elem = document.getElementById("box2");
  var number = 50;
  var id = setInterval(frame, 35);
  function frame() {
    if (number <= 0) {
      clearInterval(id);
    } else {
      number--;
      elem.innerHTML = number * 1 + '%';
    }
  }
}