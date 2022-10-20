// variable declarations
var slides = document.getElementById("slides");
var box = document.getElementById("box");
var still = document.getElementById("film-still");
var widthSlider = document.getElementById("width-slider");
var heightSlider = document.getElementById("height-slider");
var hueSlider = document.getElementById("hue-slider");
var data = null;
var enableAccessButton = document.getElementById("access-camera");
var continueButton = document.getElementById("click-photo");
var intro = document.getElementById("intro");
var color = document.getElementById("color");
var controls = document.getElementById("controls");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var audioButton = document.getElementById("audio-button");
var textButton = document.getElementById("text-button");
var audioOne = document.getElementById("audio-one");
var audioTwo = document.getElementById("audio-two");
var audioThree = document.getElementById("audio-three");
var audioFour = document.getElementById("audio-four");
var audioFive = document.getElementById("audio-five");
var subtitles = document.getElementById("subtitles");
var endingFilm = document.getElementById("jemcohen-film");

var no = 0;

// array with subtitles, from 'Waiting for Godot'
var titles = [" ", "Given the existence as uttered forth", "in the public works of Puncher and Wattmann", "of a personal God quaquaquaqua with white beard", "quaquaquaqua outside time without extension", "who from the heights of divine apathia", "divine athambia divine aphasia", "loves us dearly with some exceptions", "for reasons unknown", "but time will tell and suffers", "like the divine Miranda with those", "who for reasons unknown but time will tell", "are plunged in torment plunged in fire", "whose fire flames if that continues and who can doubt", "it will fire the firmament that is to say blast hell to heaven", "so blue still and calm so calm with a calm", "which even though intermittent is better than nothing", "but not so fast and considering what is more that", "as a result of the labors left unfinished", "crowned by the Acacacacademy", "of Anthropopopometry of Essy-in-Possy of Testew and Cunard", "it is established beyond all doubt all other doubt", "than that which clings to the labors of men that as a result of the labors", "unfinished of Testew and Cunnard it is established as hereinafter", "but not so fast for reasons unknown that as a result of", "the public works of Puncher and Wattmann it is established", "beyond all doubt that in view of the labors of Fartov and Belcher", "left unfinished for reasons unknown of Testew and Cunard left unfinished", "it is established what many deny that man in Possy of Testew and Cunard", "that man in Essy that man in short that man in brief", "in spite of the strides of alimentation and defecation", "wastes and pines wastes and pines and", "concurrently simultaneously what is more for reasons unknown", "in spite of the strides of physical culture", "the practice of sports such as", "tennis football running cycling swimming", "flying floating riding gliding", "conating camogie skating tennis", "of all kinds dying flying sports of all sorts", "autumn summer winter winter tennis of all kinds", "hockey of all sorts", "penicillin and succedanea", "in a word I resume flying gliding golf", "over nine and eighteen holes", "tennis of all sorts in a word for reasons unknown", "in Feckham Peckham Fulham Clapham", "namely concurrently simultaneously", "what is more for reasons unknown", "but time will tell fades away I resume", "Fulham Clapham in a word the dead", "loss per head since the death of Bishop Berkeley", "being to the tune of", "one inch four ounce per head", "approximately by and large more or less", "to the nearest decimal good measure", "round figures stark naked", "in the stockinged feet in Connemara", "in a word for reasons unknown", "no matter what matter the facts are there", "and considering what is more much more grave", "that in the light of the labors", "lost of Steinweg and Peterman", "it appears what is more much more grave", "that in the light the light the light of the labors lost", "of Steinweg and Peterman that in the plains", "in the mountains by the seas by the rivers", "running water running fire", "the air is the same and then the earth", "namely the air and then the earth", "in the great cold", "the great dark", "the air and the earth abode of stones", "in the great cold", "alas alas in the year of their Lord", "six hundred and something", "the air the earth the sea the earth", "abode of stones in the great deeps", "the great cold on sea", "on land and in the air", "I resume for reasons unknown", "in spite of the tennis the facts are there", "but time will tell I resume", "alas alas on on in short", "in fine on on abode of stones", "who can doubt it I resume", "but not so fast I resume", "the skull fading fading fading", "and concurrently simultaneously", "what is more for reasons unknown", "in spite of the tennis", "on on the beard the flames", "the tears the stones", "so blue so calm alas alas", "on on the skull the skull the skull the skull", "in Connemara in spite of the tennis", "the labors abandoned left unfinished", "graver still abode of stones", "in a word I resume", "alas alas abandoned unfinished", ""];

var wait = false;
if (window.location.href.indexOf("index") > -1) {
  slides.addEventListener('wheel', function(event) {
    clearTimeout();
    if (!wait) {
      if (event.deltaY > 0) {
        if (slides.classList.contains("to-mission")) {
          goToScreening();
        }
        else if (slides.classList.contains("to-screening")) {
        }
        else { goToMission(); }
      }
      else if (event.deltaY < 0) {
        if (slides.classList.contains("to-screening")) {
          goToMission();
        }
        else if (slides.classList.contains("to-mission")) {
          toHome();
        }
      }
    }
    wait = true;
    setTimeout(function() { wait = false; }, 2000);
  });
}

// homepage navigation bar
function toHome() { slides.className = "to-home"; }
function goToMission() { slides.className = "to-mission"; }
function goToScreening() { slides.className = "to-screening"; }

// begin film experience
function beginFilm() {
  intro.style.display="none";
  controls.style.visibility="visible";
}

// go to next image & adjust interactivity accordingly
function next() {
  no++;

  if (no == 100) {
    prevButton.style.display="none";
    textButton.style.display="none";
    subtitles.style.display="none";
    audioButton.style.display="none";
    audioOne.pause();
    audioTwo.pause();
    audioThree.play();
  }

  if (no == 124) {
    audioFour.play();
    color.style.display = "none";
    still.style.width = "100vw";
    still.style.height = "95vh";
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      slider.style.visibility = "hidden";
    });
  }

  if (no == 145) {
    audioFive.play();
  }

  if (no == 200) {
    audioThree.pause();
  }

  if (no == 205) {
    audioFour.pause();
  }

  if (no == 210) {
    audioFive.pause();
    nextButton.style.display="none";
    endingFilm.style.display="block";
    controls.style.backgroundColor="#000000";
    endingFilm.play();
  }

  if (no == 97 || no == 118 || no == 189 || no == 191 || no == 195) {
    subtitles.style.display="none";
    color.style.display = "none";
    canvas.style.display = "block";
  }

  else if (no == 98 || no == 119 || no == 190 || no == 192 || no == 196) {
    canvas.style.display = "none";
    if (no == 98) {
      subtitles.style.display="block";
    }
    if (no == 98 || no == 119) {
      color.style.display = "block";
    }
  }

  subtitles.innerHTML = titles[no];
  var image = "url(" + images[no].src + ")";
  still.style.backgroundImage = image;
}

// go to previous image
function prev() {
  if (no > 0) {
    no--;
  }
  subtitles.innerHTML = titles[no];
  var image = "url(" + images[no].src + ")";
  still.style.backgroundImage = image;
}

// toggle between two available songs
function playAudio() {
  if (!audioOne.paused) {
    audioButton.style.color="purple";
    audioOne.pause();
    audioTwo.play();
  }
  else {
    audioButton.style.color="blue";
    audioTwo.pause();
    audioOne.play();
  }
}

// sliders to update width, height, color overlay of image
function updateWidth() {
  still.style.width = widthSlider.value + "vw";
}

function updateHeight() {
  still.style.height = heightSlider.value + "vh";
}

function updateHue() {
  if (hueSlider.value == 0) { color.style.opacity = "0"; }
  else { color.style.opacity = "0.25"; }
  color.style.filter = "hue-rotate(" + hueSlider.value + "deg)";
}

// reveal subtitles
function showText() {
  if (!subtitles.classList.contains("show")) {
    subtitles.classList.add("show");
    textButton.style.color = "#A5D9C9";
  }
  else {
    subtitles.classList.remove("show");
    textButton.style.color = "#000000"
  }

}

endingFilm.addEventListener('ended',returnHome,false);
function returnHome() {
    window.location.href = "index.html";
}

// This section of code was adapted from Stack Overflow.
// https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
// Preload all images to prevent lag.
var images = [];
var srcs = [];

for (var i = 1; i <= 210; i++) {
    srcs.push("FILM/IMG_" + i.toString() + ".jpg");
}

preload.apply(null, srcs);

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// This section of code was adapted from Useful Angle.
// https://usefulangle.com/post/352/javascript-capture-image-from-camera
// Take picture via webcam and display on canvas.
let camera_button = document.querySelector("#access-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    if (stream.getVideoTracks().length > 0){
      enableAccessButton.style.display = "none";
      continueButton.style.display = "block";
    }
	video.srcObject = stream;
});

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');
});
