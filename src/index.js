import './style.css';
import { taskManager } from './task.js';
import './assets/samplePic.jpg';
import { datePicker } from './datePicker.js';
import {formManager} from './formPrinter.js';
import { cardCreator } from './cardCreator.js';
import { projectManager } from './project.js';

const datePicker1 = datePicker();
const formManager1 = formManager();
const taskManager1 = taskManager();
const projectManager1 = projectManager();

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click',function(){
    let tempDate = formManager1.getDate();
    datePicker1.runDatePicker();
    formManager1.printTaskForm();
    let submitBtn2 = document.querySelector('#submitBtn2');
    submitBtn2.addEventListener('click', function(){
        let tempTitle = formManager1.getTitle();
        let tempDesc = formManager1.getDescription();
        let tempPriority = formManager1.getPriority();
        let tempTask = taskManager1.createTask(tempDate, tempTitle, tempDesc, tempPriority);
        taskManager1.tasks.push(tempTask);
        let modalBG = document.querySelector('.modal-bg');
        modalBG.remove();
        //A partir de aqui son pruebas..
        let mainDiv = document.querySelector('#mainDiv');
        cardCreator.createTaskCard(mainDiv, tempTask)
        console.log(taskManager1.tasks);
        //..hasta aca
    });
});

const newTaskBtn = document.querySelector('#taskBtn');
newTaskBtn.addEventListener('click', function(){
    datePicker1.runDatePicker();
});

//datePicker1.runDatePicker();

/*
const today = new Date();

const filters = [
    {
        label: 'Today',
        startAt: format(today, 'yyyy-MM-dd'),
        endAt: format(today, 'yyyy-MM-dd')
    },
    {
        label: 'Next 3 days',
        startAt: format(today, 'yyyy-MM-dd'),
        endAt: format(addDays(today, 3), 'yyyy-MM-dd')
    },
    {
        label: 'Next 7 days',
        startAt: format(today, 'yyyy-MM-dd'),
        endAt: format(addDays(today, 7), 'yyyy-MM-dd')
    },
    {
        label: 'Next 30 days',
        startAt: format(today, 'yyyy-MM-dd'),
        endAt: format(addDays(today, 30), 'yyyy-MM-dd')
    },
    {
        label: 'Next 90 days',
        startAt: format(today, 'yyyy-MM-dd'),
        endAt: format(addDays(today, 90), 'yyyy-MM-dd')
    },
]
*/