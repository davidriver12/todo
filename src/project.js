const projectManager = () => {

    let projects = [];

    function createProject(dueDate, title, description, priority){
        let tasks = [];
        return {
            dueDate,
            title,
            description,
            priority,
            tasks
        };
    };

    return {projects, createProject};

};

export {projectManager};