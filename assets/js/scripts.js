//CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = {
  x: 0,
  y: 0
};

document.addEventListener("mouseenter", start);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}



//SCROLL



    //top text
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
var elementWidth = document.getElementById('container1').offsetWidth;
var width = window.innerWidth + elementWidth;
var duration = window.innerHeight;
var official = duration + "%";
    
tl
.to('.container1', 5, {x: width, ease: Power0.easeNone});

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.container1',
    triggerHook: 0,
    duration: official
})
.setPin('.container1')
.setTween(tl)
.addTo(controller);

    //bottom text
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
var elementWidth = document.getElementById('container2').offsetWidth;
var width = window.innerWidth - elementWidth;
var duration = window.innerHeight;
var official = duration + '%';
    
tl
.to('.container2', 5, {x: width, ease: Power0.easeNone});

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.container1',
    triggerHook: 0,
    duration: official,
    offset: - innerHeight
})
.setPin('.container2')
.setTween(tl)
.addTo(controller);



//REVERSE 7
$(function() {
  $(".target").html(("<span>" + $(".target").html().split("").join("</span><span>") + "</span>"));
  var rotate = 0;
  $(".target span").each(function() {
    rotate = rotate - 180
    $(this).css({
      "-webkit-transform": "rotate(" + rotate + "deg)",
      "display": "inline-block"
    });
  });
  start();
});
