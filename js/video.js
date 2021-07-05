const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlerPlay);
$pause.addEventListener("click", handlerPause);
$backward.addEventListener("click", handlerBackward);
$forward.addEventListener("click", handlerForward);
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);
$progress.addEventListener("input", handleInput);

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

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

function handleInput() {
  $video.currentTime = $progress.value;
}

const hashtag = document.querySelector("#hashtag");
if (hashtag) {
  hashtag.innerHTML = $progress.value;
}
$progress.addEventListener("input", handleHashtag);

function handleHashtag() {
  console.log("soy una funcion");
  hashtag.innerHTML = $progress.value;
}
