export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        // Ajouter ici la logique pour mettre à jour le stockage local si nécessaire
    }

    // Ajouter d'autres méthodes pour manipuler les tâches comme nécessaire
}
