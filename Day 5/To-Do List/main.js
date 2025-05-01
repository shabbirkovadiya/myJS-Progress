const addtask = document.getElementById('addtask');
const taskDiv = document.getElementById('task-div');
taskDiv.innerText = "No Data Found !";



function addData(){
    if(addtask.value.length == 0){
        alert("Enter Value");
        return;
    }
    if (taskDiv.innerText === "No Data Found !") {
                taskDiv.innerText = "";
            }
    var id = Math.random().toString(16).slice(2);
    const taskValue= addtask.value;
    addtask.value ="";
    const task=document.createElement('div');
    const taskName=document.createElement('p');
    const deleteIcon =document.createElement('i');
    deleteIcon.setAttribute("class","fa-solid fa-trash");
    deleteIcon.setAttribute("onclick",`removeData("${id}")`);
    task.setAttribute("id",id);
    task.setAttribute("class","task");
    taskName.innerHTML=taskValue;
    task.append(deleteIcon,taskName);
    taskDiv.appendChild(task);
    
}

function removeData(id) {
    const task = document.getElementById(id);
    if (task) {
        task.remove();
    }

    // Check if there are no more tasks
    if (taskDiv.querySelectorAll('.task').length === 0) {
        taskDiv.innerText = "No Data Found !";
    }
}
