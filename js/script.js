const myVideo = document.getElementById('myVideo');
const myAudio = document.getElementById('myAudio');
const enter = document.getElementById('enter');
timer = null;
let counter=0;
enter.addEventListener('cilck', enterPressed);
enter.addEventListener('keydown', keyPressed);
document.body.style.backgroundColor = "lightGray";

//gif, audio
const vids = ["video00.gif","video01.gif","video02.gif", "video03.gif", "video04.gif"];
const audio = ["audio00.mp3", "audio01.mp3", "audio02.mp3", "audio03.mp3", "audio04.mp3"];
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
    if(counter==8){
        vidPlaying = 2;
        audioPlaying = 2;
        counter=-1;
        document.body.style.backgroundColor = "MediumBlue";
        document.getElementById("head").style.color = "white";
        document.getElementById("head2").style.color = "white";
        document.getElementById("number").style.color = "white";
        document.getElementById("foot").style.color = "white";
    }else if(counter==3){
        vidPlaying = 3;
        audioPlaying = 3;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black"; 
    }else if(counter==6){
        vidPlaying = 4;
        audioPlaying = 4;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black";   
    }else if(counter==0){
        vidPlaying = 0;
        audioPlaying = 0;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black";   
    }else {
        vidPlaying = 1;
        audioPlaying = 1;
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

