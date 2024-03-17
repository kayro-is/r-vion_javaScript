import { TaskManager } from './taskManager.js';
import { addTaskToList, initializeTaskFilters  } from './taskUI.js';
import { saveTasks, loadTasks } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskManager = new TaskManager();

    // Charge les tâches depuis le stockage local et les ajoute à la liste
    loadTasks().forEach(task => {
        addTaskToList(task.text); // Supposons que 'task' est un objet avec une propriété 'text'
        taskManager.addTask(task);
    });

    // Fonction pour ajouter une tâche à la fois dans l'UI et dans le gestionnaire de tâches
    function ajouterTache() {
        const task = taskInput.value.trim();
        if (task) {
            addTaskToList(task);
            taskManager.addTask({ text: task }); // Supposons que 'addTask' attend un objet
            saveTasks(taskManager.tasks);
            taskInput.value = '';
        } else {
            alert('Veuillez entrer une tâche!');
        }
    }

    // Écouteur d'événement pour le clic sur le bouton d'ajout
    addTaskBtn.addEventListener('click', ajouterTache);

    // Écouteur d'événement pour la touche "Entrée"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            ajouterTache(); // Exécute la fonction ajouterTache lorsque l'utilisateur appuie sur "Entrée"
            event.preventDefault(); // Empêche le comportement par défaut de "Enter" qui pourrait rafraîchir la page
        }
    });
});
initializeTaskFilters();