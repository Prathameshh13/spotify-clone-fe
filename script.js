let songIndex=0;
let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("progressBar");
let audioElement=new Audio("songs/1.mp3")
let songItems=Array.from(document.getElementsByClassName("songItems"));


let songs=[{songName:"Choo Lo-The Local Train" ,filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
{songName:"Phir Se Udd Chala-Rockstar" ,filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
{songName:"Kashmir Kanyakumari-Chennai Express" ,filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
{songName:"Chor Baazari-Love Aaj Kal" ,filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
{songName:"Khuda Jaane-Baachana-e-Haseeno" ,filePath:"songs/5.mp3", coverPath:"covers/5.jpg"}]


songItems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
         audioElement.play();
         masterPlay.classList.remove("fa-circle-play");
         masterPlay.classList.add("fa-circle-pause");

    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
         masterPlay.classList.add("fa-circle-play");
    }
})


audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})


progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;  
})


function makeAllPlay(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     console.log(e.target);
     makeAllPlay();
     e.target.classList.remove("fa-circle-play");
     e.target.classList.add("fa-circle-pause");
     songIndex=parseInt(e.target.id);
     console.log(songIndex);
     audioElement.src="songs/"+songIndex+".mp3";
     audioElement.play();
    })
})


document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=1) {
songIndex=1;
    }else{
songIndex-=1;
    }
      audioElement.src="songs/"+songIndex+".mp3";
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      makeAllPlay();
      document.getElementById(songIndex).classList.remove("fa-circle-play");
      document.getElementById(songIndex).classList.add("fa-circle-pause");
})


document.getElementById('next').addEventListener('click',()=>{
    if (songIndex<5) {
songIndex+=1;
    }else{
songIndex=1;
    }
      audioElement.src="songs/"+songIndex+".mp3";
      audioElement.play();  
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      makeAllPlay();
      document.getElementById(songIndex).classList.remove("fa-circle-play");
      document.getElementById(songIndex).classList.add("fa-circle-pause");

})
