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

    //signup endpoindi istifade etmek
    function signup() {
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();
        const email = $('#email').val().trim();
        const errorMsg = $('#error-msg');
        const url = 'https://sayt-be.onrender.com/api/signup/'

        if (password.length < 8) {
            errorMsg.text("Password must be at least 8 characters long.").show();
            return;
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    errorMsg.hide();
                    alert('Verification code sent successfully')
                } else {
                    errorMsg.text(data.error).show();
                }
            })
            .catch(error => {
                console.log(error);
                errorMsg.text("Server error").show();
            });
    }

    $('#login-btn').click(function (e) {
        e.preventDefault();
        signup();
    });

});