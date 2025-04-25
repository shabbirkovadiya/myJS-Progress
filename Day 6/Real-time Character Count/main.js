const textArea = document.createElement('textarea');


const liveCount = document.getElementById('livecount');
const Tarea = document.getElementById('Tarea');


function count(){
    liveCount.innerText = Tarea.value.length;
}
