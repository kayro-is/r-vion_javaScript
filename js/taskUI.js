export function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    listItem.addEventListener('dblclick', function() {
        listItem.remove(); // Plus moderne et direct que `tasksList.removeChild(listItem)`
    });
    document.getElementById('tasksList').appendChild(listItem);
}

export function filterTaches(filter) {
    document.querySelectorAll('#tasksList li').forEach(tache => {
        switch(filter) {
            case 'all':
                tache.style.display = '';
                break;
            case 'active':
                tache.style.display = tache.classList.contains('completed') ? 'none' : '';
                break;
            case 'completed':
                tache.style.display = !tache.classList.contains('completed') ? 'none' : '';
                break;
        }
    });
}

export function updateTasksCount() {
    const count = document.querySelectorAll('#tasksList li:not(.completed)').length;
    document.getElementById('tasksCount').textContent = `Tâches restantes : ${count}`;
}

export function initializeTaskFilters() {
    document.getElementById('filterAll').addEventListener('click', () => filterTaches('all'));
    document.getElementById('filterActive').addEventListener('click', () => filterTaches('active'));
    document.getElementById('filterCompleted').addEventListener('click', () => filterTaches('completed'));
    updateTasksCount();
}
