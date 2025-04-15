const box1=document.getElementById('box1')
const box2=document.getElementById('box2')


function showbox1(){
  if  (box2.classList.contains("active")){
      box2.classList.remove('active')
}
box1.classList.add('active');
}
function showbox2(){
    if  (box1.classList.contains("active")){
        box1.classList.remove('active')
    }
    box2.classList.add('active');
}
function showall() {
    box1.classList.add("active");
    box2.classList.add("active");
  }


