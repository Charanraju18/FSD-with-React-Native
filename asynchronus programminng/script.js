// function fun(){
// 	var x = new Date();
// 	// x.setHours(0);
// 	// x.setMinutes(0);
// 	// x.setSeconds(0);
// 	document.getElementsByClassName("hours")[0].innerHTML = x.getHours();
// 	document.getElementsByClassName("minutes")[0].innerHTML = x.getMinutes();
// 	document.getElementsByClassName("ms")[0].innerHTML = x.getSeconds();
// }
// var stopTime = setInterval(fun,1000);

// // document.getElementsByClassName("ms").style.transition = "transform .5s";

// // setInterval(flip,500);

// function reset(){
// 	var x = new Date();
// 	x.setHours(0);
// 	var sethrs = document.getElementsByClassName("hours")[0].innerHTML = x.getHours();
// 	// console.log(sethrs);
// 	x.setMinutes(0);
// 	var setmin = document.getElementsByClassName("minutes")[0].innerHTML = x.getMinutes();
// 	// console.log(setmin);
// 	x.setSeconds(0);
// 	var setsec = document.getElementsByClassName("ms")[0].innerHTML = x.getSeconds();
// 	// console.log(setsec);
// }
// function start(){
// 	setInterval(fun,1000);
// }
// function stop(){
// 	clearInterval(stopTime);

// }

var timer;
var h = 0,
  m = 0,
  s = 0,
  mhr = 0;
var running = false;

function start() {
  if (!running) {
    running = true;
    timer = setInterval(updateTimer, 1);
  }
}

function updateTimer() {
  s++;
  if (s >= 10) {
    m++;
    s = 0;
    if (m >= 6) {
      h++;
      m = 0;
	  if(h>=6){
		mhr++;
		h=0;
		if(mhr>=24){
			mhr=0;
		}
	  }
    }
  }
  updateShow();
}

function updateShow() {
	document.querySelector(".mainhrs").textContent = mhr.toString().padStart(2, "0");
  document.querySelector(".hours").textContent = h.toString().padStart(2, "0");
  document.querySelector(".minutes").textContent = m.toString().padStart(2, "0");
  document.querySelector(".seconds").textContent = s.toString().padStart(2, "0");

}

function stop() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  (h = 0), (m = 0), (s = 0), (mhr=0);
  updateShow();
}
