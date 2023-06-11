function play() {
  navigator.mediaDevices.getUserMedia({
    audio: true
  });
  sound_model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HK62OM4pa/model.json", model_loaded);

}

function model_loaded() {
  sound_model.classify(get_results);
}

function get_results(e, r) {
  if (e) {
    console.error(e);
  } else {
    console.log(r);
    red = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    document.getElementById("heading").style.color = "rgb("+red+","+g+","+b+")";
    img_1 = document.getElementById("bird.png");
    img_2 = document.getElementById("cat.png");
    img_3 = document.getElementById("dog.png");
    img_4 = document.getElementById("lion.png");
    img_5 = document.getElementById("background");
    Img = document.getElementById("animal_img");
    

    if (r[0].label == "Dog Sound [Barking]") {
      Img.src = "dog.png";
      document.getElementById("animalsound").innerHTML = "DOG"

    } else if (r[0].label == "Lion Sound [Roaring]") {
      Img.src = "lion.png";
      document.getElementById("animalsound").innerHTML = "LION"

    } else if (r[0].label == "Cat Sound [Meowing]") {
      Img.src = "cat.png";
      document.getElementById("animalsound").innerHTML = "CAT"

    } else if (r[0].label == "Bird Sound [Chirping]") {
      Img.src = "bird.png";
      document.getElementById("animalsound").innerHTML = "BIRD"
    } else {
      Img.src = "background.jpg";
      document.getElementById("animalsound").innerHTML = "BACKGROUND SOUND"

    }
  }
}