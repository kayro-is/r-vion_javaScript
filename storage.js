export function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks || [];
}


