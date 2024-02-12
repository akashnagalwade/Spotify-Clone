console.log("Welcome to Spotify");
//initialize 
let songIndex = 0;
let audioElement = new Audio("Tere Liye.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');


let songs = [
    {songName:"Tere Liye", filePath:"downloads/Tere Liye.mp3",coverPath: "love1.jpg"},
    {songName:"Chune Se", filePath:"downloads/Chune Se.mp3",coverPath: "love1.jpg"},
    {songName:"Tere Liye", filePath:"downloads/Tere Liye.mp3",coverPath: "love1.jpg"},
    {songName:"Tere Liye", filePath:"downloads/Tere Liye.mp3",coverPath: "love1.jpg"},
    {songName:"Tere Liye", filePath:"downloads/Tere Liye.mp3",coverPath: "love1.jpg"},
    {songName:"Tere Liye", filePath:"downloads/Tere Liye.mp3",coverPath: "love1.jpg"},
]

//let audioElement = new audio('1.mp3');
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity= 0;
    }
})

//listen to Events
    audioElement.addEventListener('timeupdate',()=>{

    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})
    myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})

