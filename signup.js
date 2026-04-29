$(document).ready(function () {

    //Əsas səyfəyə qayıtmaq üçün
    $('.left').click(function (e) {
        e.preventDefault();
        window.location.href = "./index.html";
    });

    //Şifrəni görünməz etmək üçün
    $('#toggle-password').click(function () {
        const pass = $('#password');
        const icon = $('#toggle-password');

        if (pass.attr('type') === 'password') {
            pass.attr('type', 'text');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            pass.attr('type', 'password');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });

});