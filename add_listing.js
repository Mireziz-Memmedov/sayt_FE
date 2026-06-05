$(document).ready(function () {
    //ilkin olaraq cari ili əldə edib "Year" dropdown-una əlavə etmək və 1980-ci ilə qədər olan illəri əlavə etmək
    const yearSelect = document.getElementById('year');

    for (let year = new Date().getFullYear(); year >= 1980; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
    
});