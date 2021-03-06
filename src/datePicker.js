//Factory function for datePicker objects
//Needs corresponding css and html
const datePicker = () => {

    const date_picker_element = document.querySelector('.date-picker');
    const selected_date_element = document.querySelector('.date-picker .selected-date');
    const dates_element = document.querySelector('.date-picker .dates');
    const mth_element = document.querySelector('.date-picker .dates .month .mth');
    const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
    const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
    const days_element = document.querySelector('.date-picker .dates .days');
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'];

    let date = new  Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let selectedDate = date;
    let selectedDay = day;
    let selectedMonth = month;
    let selectedYear = year;

    mth_element.textContent = months[month] + ' ' + year;

    selected_date_element.textContent = formatDate(date);
    selected_date_element.dataset.value = formatDate2(selectedDate);

    populateDates();

    //EVENT LISTENERS
    date_picker_element.addEventListener('click', toggleDatePicker);
    next_mth_element.addEventListener('click', function(){
        goToNextMonth();
        populateDates();
    });
    prev_mth_element.addEventListener('click', function(){
        goToPrevMonth();
        populateDates();
    });

    //FUNCTIONS

    function switchToBtn1(){
        let submitBtn = document.querySelector('#submitBtn');
        if (submitBtn.classList.contains('hidden')){
            submitBtn.classList.toggle('hidden');
        }
        let submitBtn3 = document.querySelector('#submitBtn3')
        if(!(submitBtn3.classList.contains('hidden'))){
            submitBtn3.classList.add('hidden');
        }
    }

    function switchToBtn3(){
        let submitBtn = document.querySelector('#submitBtn');
        if (!(submitBtn.classList.contains('hidden'))){
            submitBtn.classList.add('hidden');
        }
        let submitBtn3 = document.querySelector('#submitBtn3')
        if(submitBtn3.classList.contains('hidden')){
            submitBtn3.classList.toggle('hidden');
        }
    }

    function runDatePicker(){
        date_picker_element.classList.toggle('active');
    }

    function toggleDatePicker(e){
        if (!checkEventPathForClass(e.path, 'dates')){
            dates_element.classList.toggle('active');
        }
    }

    function goToNextMonth(e){
        month++;
        if (month > 11){
            month = 0;
            year++;
        }
        mth_element.textContent = months[month] + ' ' + year;
    }

    function goToPrevMonth(e){
        month--;
        if (month < 0){
            month = 11;
            year--;
        }
        mth_element.textContent = months[month] + ' ' + year;
    }

    function populateDates(e) {
        days_element.innerHTML = '';

        let daysAmount = daysInMonth(month, year);

        for (let i = 0; i<daysAmount; i++){
            const day_element = document.createElement('div');
            day_element.classList.add('day');
            day_element.textContent = i + 1;
            if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month){
                day_element.classList.add('selected');
            }
            day_element.addEventListener('click', function(){
                selectedDate = new Date(year + '-' + (month + 1) + '-' + (i+1))
                selectedDay = i+1;
                selectedMonth = month;
                selectedYear = year;
                selected_date_element.textContent = formatDate(selectedDate);
                selected_date_element.dataset.value = formatDate2(selectedDate);

                populateDates();
            });
            days_element.appendChild(day_element);
        }
    }

    //HELPER FUNCTIONS
    function checkEventPathForClass(path, selector){
        for(let i=0; i<path.length; i++){
            if (path[i].classList && path[i].classList.contains(selector)){
                return true;
            }
        }
        return false;
    }

    function formatDate2(d){
        date = d.toDateString();
        return date;
    }

    function formatDate(d){
        let day = d.getDate();
        if (day<10){
            day = '0' + day;
        }
        let month = d.getMonth() + 1;
        if (month<10){
            month = '0' + month;
        }
        let year = d.getFullYear();
        return month + ' / ' + day + ' / ' + year;
    }

    function daysInMonth (month, year) {
        month++;
        return new Date(year, month, 0).getDate();
    }

    return {runDatePicker, switchToBtn1, switchToBtn3, formatDate2};

};

export {datePicker};