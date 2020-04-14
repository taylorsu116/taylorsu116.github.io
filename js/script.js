const myVideo = document.getElementById('myVideo');
const myAudio = document.getElementById('myAudio');
const enter = document.getElementById('enter');
timer = null;
let counter=0;
enter.addEventListener('cilck', enterPressed);
enter.addEventListener('keydown', keyPressed);
document.body.style.backgroundColor = "lightGray";

//gif, audio
const vids = ["video01.gif","video02.gif"];
const audio = ["audio01.mp3", "audio02.mp3"];
let vidPlaying = 0;
let audioPlaying = 0;

//default
myVideo.src = "asset/" + vids[vidPlaying];
myAudio.src = "asset/" + audio[audioPlaying];
myAudio.play();



function keyPressed(){
    if(keyCode === 13){
        enterPressed();
    }
}

function enterPressed(){
    counter++;
    console.log(counter);
    if(counter==5){
        vidPlaying = 1;
        audioPlaying = 1;
        counter=0;
        document.body.style.backgroundColor = "MediumBlue";
        document.getElementById("head").style.color = "white";
        document.getElementById("head2").style.color = "white";
        document.getElementById("number").style.color = "white";
        document.getElementById("foot").style.color = "white";
        
    }else{
        vidPlaying = 0;
        audioPlaying = 0;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black";
    }
    myAudio.src = "asset/" + audio[audioPlaying];
    myAudio.play();
    myVideo.src = "asset/" + vids[vidPlaying];
    
}

