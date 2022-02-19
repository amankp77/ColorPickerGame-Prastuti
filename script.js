const rgb = document.querySelector(".rgb");
const boxesEasy = document.querySelectorAll(".box-e");
const boxesHard = document.querySelectorAll(".box-h");
const newGameColor = document.querySelector(".new");
const easy = document.querySelector(".l-easy");
const hard = document.querySelector(".l-hard");
const conteasy = document.querySelector(".easy");
const conthard = document.querySelector(".hard");
const note = document.querySelector(".note")
const rules = document.querySelector(".rulestext")

// Math.random() * 256) + 1
let r = 0;
let g = 0;
let b = 0;
let count = 0
let answerrgb;
let processOn;
let boxcount;

if(count == 0){
answerrgb = "";
boxcount = 3;
processOn = boxesEasy;
newcolor();
count++;
}

//loading funcion first call


function random() {
  return Math.floor((Math.random() * 255) + 1);
}

function generatRGB() {
  r = random();
  g = random();
  b = random();

  return `rgb(${r},${g},${b})`;
}

function newcolor() {
  let answer = Math.floor((Math.random() * boxcount) + 1);
  processOn.forEach((box, idx) => {
    let color = generatRGB();
    box.style.backgroundColor = color;
    if (idx + 1 == answer) {
      rgb.innerHTML = color;
      answerrgb = color;
    }
  });

  note.innerHTML = ""
}

newGameColor.addEventListener("click", newcolor);


easy.addEventListener("click", () => {
  boxcount = 3;
  processOn = boxesEasy;
  conthard.style.display = "none";
  conteasy.style.display = "flex";
  answerrgb = ""
  newcolor();
  rules.style.display = "block";
  // console.log(processOn)
});

hard.addEventListener("click", () => {
  boxcount = 6;
  processOn = boxesHard;
  conthard.style.display = "flex";
  conteasy.style.display = "none";
  answerrgb = ""
  newcolor();
  rules.style.display = "none";
  // console.log(processOn)
});



boxesHard.forEach((box,idx) => {
  box.addEventListener("click", () => {
    if (box.style.backgroundColor.replaceAll(" ", "") == answerrgb) {
      processOn.forEach((boxin) => {
        note.innerHTML = 'Congratulations You Guessed it Right!!'
        boxin.style.backgroundColor = answerrgb;
      });
    } else {
      box.style.backgroundColor = "black";
      note.innerHTML = "Try Again"
    }
  });
});

boxesEasy.forEach((box, idx) => {
  box.addEventListener("click", () => {
    if (box.style.backgroundColor.replaceAll(" ", "") == answerrgb) {
      processOn.forEach((boxin) => {
        note.innerHTML = 'Congratulations You Guessed it Right!!'
        boxin.style.backgroundColor = answerrgb;
      });
    } else {
      box.style.backgroundColor = "black";
      note.innerHTML = "Try Again"
      
    }
  });
});