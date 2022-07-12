const cardCreator = (() => {

    const createTaskDetail = (task) => {
        let sideDiv = document.querySelector('#sideDiv');
        sideDiv.innerHTML = '';
        let title = document.createElement('h1');
        title.textContent = `${task.title}`;
        let descriptionTitle = document.createElement('h3');
        descriptionTitle.textContent = 'Description: ';
        let description = document.createElement('p');
        description.textContent = `${task.description}`;
        let priority_element = document.createElement('p');
        priority_element.textContent = `${task.priority}`;

        sideDiv.appendChild(title);
        sideDiv.appendChild(descriptionTitle);
        sideDiv.appendChild(description);
        sideDiv.appendChild(priority_element);
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

    return {createTaskDetail, createTaskCard, showSideDiv};

})();

export {cardCreator};