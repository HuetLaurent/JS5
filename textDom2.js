//exercice DOM 4

const paragraph = document.getElementById("paragraph");

function myFunction() {
    const answer = prompt("Voulez-vous afficher le texte ?");
    if (answer == "oui" || answer == "yes") {
        paragraph.hidden = false;
    } else {
        paragraph.hidden = true;
    }
}

//exercice DOM 5

/*function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}

const btnHTML = document.getElementById("btnHTML");
const btnCSS = document.getElementById("btnCSS");
const btnJS = document.getElementById("btnJS");
const btn = document.getElementById("btn");

btnHTML.addEventListener('click', () => {
    createDom("div", "Ayooo", div);
});*/

//exercice DOM 6
let mseconds = 0;
let seconds = 55;
let minutes = 0;

let square_minutes = document.getElementById("minutes");
let square_seconds = document.getElementById("seconds");
let square_mseconds = document.getElementById("mseconds");

const time = setInterval(()=>{
    mseconds++;
    square_mseconds.textContent = mseconds;
    if (mseconds == 100) {
        mseconds = 0;
        seconds++;
        square_seconds.textContent = seconds;
    } else if (seconds == 60) {
        seconds = 0;
        mseconds = 0;
        minutes++;
        square_minutes.textContent = minutes;
    }
},10);


/*let i = 0;
const id_interval = setInterval(()=>{
  i++;
  console.log(i);
  if (i==5) clearInterval(id_interval);
},1000);*/