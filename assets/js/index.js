const songs = [
    "bladee - obedient",
    "glaive - sick",
    "blair witch - mahshallah",
    "yung lean - summertime blood",
    "thaiboy digital - legendary member",
    "ecco2k - western union",
    "ecco2k - calcium"
];

let songIndex;
let songArrLength = songs.length;
let interacted = false;
songIndex = Math.floor(Math.random() * songArrLength);

// praying that no one looks in this file this is the most jank shit ever
// prolly will research later and look for proper event listeners to like avoid most of this but fuck it i got what i wanted to working LMFAOO


$(document).ready(() => {
    $(".song").text(`${songs[songIndex]} (${songIndex + 1}/${songArrLength})`);
    $(".player").html(`<audio id="jankplaya" controls autoplay><source src="assets/music/${songIndex}.mp3" type="audio/mpeg"></audio>`);


    const titles = [
        "catatonic angels",
        "sleeping in the corner",
        "holding my hands",
        "i promise that i'll never let go",
        "never let go.",
        "never let go..",
        "never let go...",
        "never let go...."
    ]
      
    var currentIndex = 0;
    setInterval(() => {
        if(currentIndex == titles.length) currentIndex = 0;
        $(document).attr("title", titles[currentIndex]);
        currentIndex++;
    }, 3500);

});

$("jankplaya").on("ended", () => {
    if(songIndex + 1 < songArrLength) {
        songIndex++;
        $(".song").text(`${songs[songIndex]} (${songIndex + 1}/${songArrLength})`);
        $(".player").html(`<audio id="jankplaya" controls autoplay><source src="assets/music/${songIndex}.mp3" type="audio/mpeg"></audio>`);
    }
});

$(document).click(() => {
    if(!interacted) {
        document.getElementById("jankplaya").play(); // yeah vanilla at this point idk why i even used jquery in this at all
        $(".pause").html(`<i class="fa-solid fa-pause"></i>`);
        interacted = true;
    }
});


let back = () => {
    if(songIndex > 0) {
        songIndex--;
        $(".song").text(`${songs[songIndex]} (${songIndex + 1}/${songArrLength})`);
        $(".player").html(`<audio id="jankplaya" controls autoplay><source src="assets/music/${songIndex}.mp3" type="audio/mpeg"></audio>`); // document.createElement("jankplaya"); (idc...)
    }
}

let change = () => {
    let audio = document.getElementById('jankplaya'); // more vanilla
    if (audio.duration > 0 && !audio.paused) {
        $(".pause").html(`<i class="fa-solid fa-play"></i>`); // AHHAHAHAH
        audio.pause();
    } else {
        $(".pause").html(`<i class="fa-solid fa-pause"></i>`); // HAHAHAHHAHAHAHA
        audio.play();
    }
}

let forward = () => {
    if(songIndex + 1 < songArrLength) {
        songIndex++;
        $(".song").text(`${songs[songIndex]} (${songIndex + 1}/${songArrLength})`);
        $(".player").html(`<audio id="jankplaya" controls autoplay><source src="assets/music/${songIndex}.mp3" type="audio/mpeg"></audio>`);
    }
}


// if u somehow got to this now u know why u can't inspect element LMFAOO
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
