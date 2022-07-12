const formManager = () => {

    const printTaskForm = () => {
        let body_element = document.querySelector('body');
        let modalBG = document.createElement('div');
        modalBG.classList.add('modal-bg');
        modalBG.classList.add('centered');
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = 'Task Title: '
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'title');
        titleInput.setAttribute('id', 'title');
        let descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Task Description: '
        let descriptionInput = document.createElement('textarea');
        descriptionInput.setAttribute('name', 'description');
        descriptionInput.setAttribute('id', 'description');
        descriptionInput.setAttribute('rows', '8');
        descriptionInput.setAttribute('cols', '30');
        let submitBtn2 = document.createElement('button');
        submitBtn2.classList.add('submitBtn');
        submitBtn2.setAttribute('id', 'submitBtn2');
        submitBtn2.textContent = 'Submit';

        let radioBtnContainer = document.createElement('div');
        radioBtnContainer.setAttribute('id', 'radioBtnContainer');
        let radioBtnTitle = document.createElement('p');
        radioBtnTitle.textContent = 'Task priority: ';
        radioBtnContainer.appendChild(radioBtnTitle);
        let radioBtnList = document.createElement('ul');
        let li1 = document.createElement('li');
        let radio1Label = document.createElement('label');
        radio1Label.setAttribute('for', 'standard');
        radio1Label.textContent = 'Standard';
        let radio1Input= document.createElement('input');
        radio1Input.setAttribute('checked', true);
        radio1Input.setAttribute('type', 'radio');
        radio1Input.setAttribute('id', 'standard');
        radio1Input.setAttribute('name', 'priority');
        radio1Input.setAttribute('value', 'standard');
        li1.appendChild(radio1Label);
        li1.appendChild(radio1Input);
        radioBtnList.appendChild(li1);
        let li2 = document.createElement('li');
        let radio2Label = document.createElement('label');
        radio2Label.setAttribute('for', 'important');
        radio2Label.textContent = 'Important';
        let radio2Input= document.createElement('input');
        radio2Input.setAttribute('type', 'radio');
        radio2Input.setAttribute('id', 'important');
        radio2Input.setAttribute('name', 'priority');
        radio2Input.setAttribute('value', 'important');
        li2.appendChild(radio2Label);
        li2.appendChild(radio2Input);
        radioBtnList.appendChild(li2);
        let li3 = document.createElement('li');
        let radio3Label = document.createElement('label');
        radio3Label.setAttribute('for', 'urgent');
        radio3Label.textContent = 'Urgent';
        let radio3Input= document.createElement('input');
        radio3Input.setAttribute('type', 'radio');
        radio3Input.setAttribute('id', 'urgent');
        radio3Input.setAttribute('name', 'priority');
        radio3Input.setAttribute('value', 'urgent');
        li3.appendChild(radio3Label);
        li3.appendChild(radio3Input);
        radioBtnList.appendChild(li3);
        radioBtnContainer.appendChild(radioBtnList)

        modal.appendChild(titleLabel);
        modal.appendChild(titleInput);
        modal.appendChild(descriptionLabel);
        modal.appendChild(descriptionInput);
        modal.appendChild(radioBtnContainer);
        modal.appendChild(submitBtn2);
        modalBG.appendChild(modal);
        body_element.appendChild(modalBG);
    };
    
    const getDate = () =>{
        let selected_date_element = document.querySelector('.selected-date');
        let tempDate = selected_date_element.getAttribute('data-value');
        return tempDate;
    };

    const getTitle = () =>{
        let title_input_element = document.querySelector('input#title');
        let tempTitle = title_input_element.value;
        return tempTitle;
    };

    const getDescription = () =>{
        let description_element = document.querySelector('textarea#description');
        let tempDesc = description_element.value;
        return tempDesc;
    };

    const getPriority = () => {
        let standard = document.querySelector('input#standard');
        if (standard.checked){
            return 'standard';
        }
        let important = document.querySelector('input#important');
        if (important.checked){
            return 'important';
        }
        let urgent = document.querySelector('input#urgent');
        if (urgent.checked){
            return 'urgent';
        }
    };

    return {printTaskForm, getDate, getTitle, getDescription, getPriority};

}

export {formManager};