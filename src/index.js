import './style.css';
import { taskCreatorFunction } from './task.js';
import './assets/samplePic.jpg';
import { datePicker } from './datePicker.js';
import {formPrinterCreator} from './formPrinter.js';

const datePicker1 = datePicker();
const formPrinter = formPrinterCreator();
const taskCreator = taskCreatorFunction();

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click',function(){
    datePicker1.runDatePicker();
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