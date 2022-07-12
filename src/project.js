const projectManager = () => {

    let projects = [];

    function craeteProject(dueDate, title, description, priority, tasks){
        return {
            dueDate,
            title,
            description,
            priority,
            tasks
        };
    };

    return {projects, craeteProject};

};

export {projectManager};