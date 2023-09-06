const task = [];
var id1 = 0;

const getTask = () => (tasks);

const addTask = (taskName) => {
    const novaTarefa = {
        id: id1,
        name: taskName,
        completed: false,
    };
    id1 +=1;
    task.push(novaTarefa)
}
const removeTask = (idTask) => {
    const novaTask = tasks.filter((task) => task.id !== idTask);
    tasks = novaTask
}
  
const updateTask = (taskId, updatedProperties) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      Object.assign(taskToUpdate, updatedProperties);
    }
  };
  