const functionalityModule = (() => {

    newDateBtn = () => {
        let submitBtn = document.querySelector('#submitBtn');
        submitBtn.addEventListener('click',function(){
            let selected_date_element = document.querySelector('.selected-date');
            let date = selected_date_element.getAttribute('data-value');
            datePicker.runDatePicker();
        });
    }

})();