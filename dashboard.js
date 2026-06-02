$(document).ready(function () {
    // console.log("DASHBOARD ORIGIN:", location.origin);
    
    // Dashboard səhifəsində istifadəçi adını göstərmək
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    
    $('.username').text(username);
    $('.email').text(email);

// Dashboard səhifəsindəki ikonlara click edəndə müvafiq səhifəyə yönləndirmək
    $('.home').on('click', function () {
        window.location.href = 'dashboard.html';
    });

    $('.listings').on('click', function () {
        window.location.href = 'listings.html';
    });

//logout düyməsinə click edəndə istifadəçi məlumatlarını localStorage-dan silmək və login səhifəsinə yönləndirmək
    $('.logout').on('click', function () {
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = 'login.html';
    });

//username olmadan dashboard səhifəsinə daxil olmağa çalışanda login səhifəsinə yönləndirmək
    if (!username) {
        window.location.href = 'login.html';
        return;
    }

});