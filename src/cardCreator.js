import { datePicker1, currentArray, currentProject, taskManager1, projectManager1} from "./index.js";

const cardCreator = (() => {

    const printHome = () => {
        let mainDiv = document.querySelector('#mainDiv');
        mainDiv.innerHTML = '';
        let standaloneTasksTitle = document.createElement('h2');
        standaloneTasksTitle.textContent = 'Standalone Tasks: '
        standaloneTasksTitle.classList.add('underline');
        mainDiv.appendChild(standaloneTasksTitle);
        for (let task of taskManager1.tasks){
            createTaskCard(mainDiv, task);
        }
        for (let project of projectManager1.projects){
            let projectTitle = document.createElement('h2');
            projectTitle.textContent = project.title;
            projectTitle.classList.add('underline');
            mainDiv.appendChild(projectTitle);
            for (let projectTask of project.tasks){
                createTaskCard(mainDiv, projectTask);
            }
        }
        
    };

    const createTaskDetail = (task) => {
        let sideDiv = document.querySelector('#sideDiv');
        sideDiv.innerHTML = '';
        let title = document.createElement('h1');
        title.textContent = `${task.title}`;
        let dueDate = document.createElement('p');
        dueDate.textContent = `${task.dueDate}`;
        let descriptionTitle = document.createElement('h3');
        descriptionTitle.textContent = 'Description: ';
        let description = document.createElement('p');
        description.textContent = `${task.description}`;
        let priority_element = document.createElement('p');
        priority_element.textContent = `${task.priority}`;
        if (priority_element.textContent == 'standard'){
            priority_element.classList.add('standard')
        } else if (priority_element.textContent == 'important'){
            priority_element.classList.add('important')
        }else if (priority_element.textContent == 'urgent'){
            priority_element.classList.add('urgent')
        }

        sideDiv.appendChild(title);
        sideDiv.appendChild(dueDate);
        sideDiv.appendChild(descriptionTitle);
        sideDiv.appendChild(description);
        sideDiv.appendChild(priority_element);
    };

    const createProjectDetail = (project) => {
        let mainDiv = document.querySelector('#mainDiv');
        mainDiv.innerHTML = '';
        let title = document.createElement('h1');
        title.textContent = `${project.title}`;
        let dueDate = document.createElement('p');
        dueDate.textContent = `${project.dueDate}`
        let descriptionTitle = document.createElement('h3');
        descriptionTitle.textContent = 'Description: ';
        let description = document.createElement('p');
        description.textContent = `${project.description}`;
        let priority_element = document.createElement('p');
        priority_element.textContent = `${project.priority}`;
        if (priority_element.textContent == 'standard'){
            priority_element.classList.add('standard')
        } else if (priority_element.textContent == 'important'){
            priority_element.classList.add('important')
        }else if (priority_element.textContent == 'urgent'){
            priority_element.classList.add('urgent')
        }
        let TasksTitle = document.createElement('h1');
        TasksTitle.textContent = 'Tasks: '
        let projectTaskBtn = document.createElement('button');
        currentArray = project.tasks;
        projectTaskBtn.textContent = '+ New Task';
        projectTaskBtn.setAttribute('id', 'projectTaskBtn');
        projectTaskBtn.addEventListener('click', function(){
            currentProject = project;
            datePicker1.runDatePicker();
            datePicker1.switchToBtn1();
            console.log(project.tasks);
        });

        mainDiv.appendChild(title);
        mainDiv.appendChild(dueDate);
        mainDiv.appendChild(descriptionTitle);
        mainDiv.appendChild(description);
        mainDiv.appendChild(priority_element);
        mainDiv.appendChild(TasksTitle);

        for (let task of project.tasks){
            createTaskCard(mainDiv, task);
        }

        mainDiv.appendChild(projectTaskBtn);
    };

    const createTaskCard = (element, task) => {
        let container = document.createElement('div');
        container.classList.add('task-card');

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        let text = document.createElement('div');
        text.classList.add('task-card-text');
        text.addEventListener('click', function(){
            showSideDiv();
            createTaskDetail(task);
        });
        let title = document.createElement('h3');
        title.textContent = `${task.title}`;
        text.appendChild(title);
        let dueDate = document.createElement('p');
        dueDate.textContent = task.dueDate;
        text.appendChild(dueDate);

        container.appendChild(checkbox);
        container.appendChild(text);
        element.appendChild(container);
    };

    const showSideDiv = () => {
            let sideDiv = document.querySelector('#sideDiv');
            if (!(sideDiv.classList.contains('active'))){
                sideDiv.classList.add('active');
            }
    };

    const showProjectTitles = (projectManager) => {
        const projectList = document.querySelector('#projectsUl');
        projectList.innerHTML = '';
        let projectListH3 = document.createElement('h3');
        projectListH3.textContent = 'Projects: ';
        projectListH3.classList.add('highlight');
        projectList.appendChild(projectListH3);
        for (let project of projectManager.projects){
            let li_element = document.createElement('li');
            li_element.textContent = project.title;
            li_element.addEventListener('click', function(){
                createProjectDetail(project);
            });
            projectList.appendChild(li_element);
        }
    };

    return {createTaskDetail, createTaskCard, showSideDiv, showProjectTitles, createProjectDetail, 
        printHome};

})();

export {cardCreator};