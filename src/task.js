const taskManager = () => {

    let tasks = [];

    function createTask(dueDate, title, description, priority) {
        return {
            dueDate,
            title,
            description,
            priority
        }
    }

    return {createTask, tasks};

};

export { taskManager };