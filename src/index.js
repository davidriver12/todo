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

let currentArray;
let currentProject;
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
        currentArray.push(tempTask);
        let modalBG = document.querySelector('.modal-bg');
        modalBG.remove();
        if (currentProject){
            cardCreator.createProjectDetail(currentProject);
        } else {
            cardCreator.printHome();
        }
        //A partir de aqui son pruebas..
        /*
        let mainDiv = document.querySelector('#mainDiv');
        cardCreator.createTaskCard(mainDiv, tempTask)
        console.log(taskManager1.tasks);
        */
        //..hasta aca
    });
});

const submitBtn3 = document.querySelector('#submitBtn3');
submitBtn3.addEventListener('click', function(){
    let tempDate = formManager1.getDate();
    datePicker1.runDatePicker();
    formManager1.printProjectform();
    let submitBtn4 = document.querySelector('#submitBtn4');
    submitBtn4.addEventListener('click', function(){
        let tempTitle = formManager1.getTitle();
        let tempDesc = formManager1.getDescription();
        let tempPriority = formManager1.getPriority();
        let tempProject = projectManager1.createProject(tempDate, tempTitle, tempDesc, tempPriority);
        projectManager1.projects.push(tempProject);
        let modalBG = document.querySelector('.modal-bg');
        modalBG.remove();
        cardCreator.showProjectTitles(projectManager1);
    });
});

const newTaskBtn = document.querySelector('#taskBtn');
currentArray = taskManager1.tasks;
currentProject = null;
newTaskBtn.addEventListener('click', function(){
    datePicker1.runDatePicker();
    datePicker1.switchToBtn1();
});

const newProjectBtn = document.querySelector('#projectBtn');
newProjectBtn.addEventListener('click', function(){
    datePicker1.runDatePicker();
    datePicker1.switchToBtn3();
})

const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', function(){
    cardCreator.printHome();
});

//Implement default projects
let testDate = new Date();
testDate = datePicker1.formatDate2(testDate);
let task0 = taskManager1.createTask(testDate, 'Task 0', 'asdasdsd', 'urgent');
taskManager1.tasks.push(task0);
let project1 = projectManager1.createProject(testDate, 'Project 1', 'xdxdxd', 'standard');
projectManager1.projects.push(project1);
let project1Task1 = taskManager1.createTask(testDate, 'Task 1', 'ajsdjnasdnajsdn', 'standard')
project1.tasks.push(project1Task1);
let project1Task2 = taskManager1.createTask(testDate, 'Task 2', 'asdjasdhasudaisd', 'important')
project1.tasks.push(project1Task2);
let project2 = projectManager1.createProject(testDate, 'Project 2', 'lololol', 'urgent');
projectManager1.projects.push(project2);
let project2Task1 = taskManager1.createTask(testDate, 'Task 3', 'ajsdjnasdnajsdn', 'standard')
project2.tasks.push(project2Task1);
let project2Task2 = taskManager1.createTask(testDate, 'Task 4', 'asdjasdhasudaisd', 'important')
project2.tasks.push(project2Task2);
cardCreator.showProjectTitles(projectManager1);

cardCreator.printHome();

export {datePicker1, currentArray, currentProject, taskManager1, projectManager1};

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