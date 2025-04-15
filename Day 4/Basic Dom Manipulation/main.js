
function changeBG(){
    const ex1 = document.getElementsByClassName('bodyclass');
    ex1[0].style.backgroundColor = "#c19a9a";
}

const apple = document.getElementById('f1');
const banana = document.getElementById('f2');
const watermelon = document.getElementById('f3');
function changeStyle1(){
    apple.style.fontStyle = "italic";
}
function changeStyle2(){
    banana.style.fontStyle = "italic";
}
function changeStyle3(){
    watermelon.style.fontStyle = "italic";
}
  

function getvalue(){
const outputbox = document.getElementById('name');
const inputbox = document.getElementById('inputbox').value;
// inputbox.value;
 outputbox.innerHTML ="Hello "+ inputbox;
}