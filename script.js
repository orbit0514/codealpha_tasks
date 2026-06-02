let audio=
document.getElementById("audio");

let progress=
document.getElementById("progress");

function playMusic(){

audio.play();

}

function pauseMusic(){

audio.pause();

}

audio.ontimeupdate=function(){

progress.value=
(audio.currentTime
/
audio.duration)
*100;

};

progress.oninput=function(){

audio.currentTime=
(progress.value
/
100)
*
audio.duration;

};
let volume=
document.getElementById(
"volume"
);

volume.oninput=
function(){

audio.volume=
volume.value;

}
let time=
document.getElementById(
"time"
);

audio.ontimeupdate=
function(){

progress.value=
(
audio.currentTime
/
audio.duration
)
*100;

time.innerHTML=
Math.floor(
audio.currentTime
)
+
"s";

};