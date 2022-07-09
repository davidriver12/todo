import { format, formatDistance, addDays } from 'date-fns'
import './style.css';
import { createTask } from './task.js';
import './assets/samplePic.jpg';

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