const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlerPlay);
$pause.addEventListener("click", handlerPause);
$backward.addEventListener("click", handlerBackward);
$forward.addEventListener("click", handlerForward);

function handlerPlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  // console.log("diste clic en play");
}

function handlerPause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handlerBackward() {
  $video.currentTime -= 10;
}

function handlerForward() {
  $video.currentTime += 10;
}
