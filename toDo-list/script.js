let tasks=[];
const addTask = ()=>{
    const inputTask=document.getElementById('inputTask');
    const text=inputTask.value.trim();
    if(text){
        tasks.push({text: text, completed: false});
        updateTaskList();
        inputTask.value="";
    }
}
const toggleOnCheck= (index)=>{
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
};
const deleteTask = (index) =>{
    tasks.splice(index,1);
    updateTaskList();
};
const editTask = (index) => {
    const inputTask = document.getElementById('inputTask');
    inputTask.value = tasks[index].text; // Populate input with the task text
    tasks.splice(index,1);
    editIndex = index; // Store the index of the task being edited
};
const updateTaskList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="taskitem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <img src="/toDo-List/edit.png" onClick="editTask(${index})"/>
                    <img src="/toDo-List/delete.png" onClick="deleteTask(${index})"/> 
                </div>
            </div>
        `;
        listItem.addEventListener("change", ()=> toggleOnCheck(index));
        taskList.append(listItem);
    });
};
document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
})