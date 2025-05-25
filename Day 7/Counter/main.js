const current=document.getElementById('current');
var currentCount = 1;
let intervalId=null;

 function timerStart(){
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    current.innerText = currentCount ;
    currentCount++;
  }, 1000);
};


function timerReset() {
  clearInterval(intervalId);       
  intervalId = null;               
  currentCount = 1;                
  current.innerText = "0";         
}

function timerStop(){
   clearInterval(intervalId);  
   intervalId=null;                   
}
