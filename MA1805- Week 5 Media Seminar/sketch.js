let img;
let bg;
let hum;
let video;

function preload() {
   bg = loadImage('busycrossing.jpg');
   img = loadImage('Doom Slayer.png');
   hum = loadSound('doom-eternal.mp3');
   video = createVideo('Rickroll_Memes_Download.mp4');
     video.hide();
}

function setup() {
  createCanvas(2000, 1200);
  image(bg, 0, 0, 1600, 800);

}

function mouseClicked() {
  hum.loop();
  hum.amp(0.5);
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }

  if (video && video.elt) {
    if (video.time() > 0 && video.time() < video.duration()) {
      video.pause();
    } else {
      video.play();
    }
  }
}

function draw() {

  image(img, 750, 400, 100, 150); 
  image(video, 0, 0, 2000, 1200);
}
