$(document).ready(function () {
    // console.log("LOGIN ORIGIN:", location.origin);

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

    //login endpoindi istifade etmek
    $('#login-btn').click(function (e) {
        e.preventDefault();
        const username_or_email = $('#username_or_email').val().trim();
        const password = $('#password').val().trim();
        const errorMsg = $('#error-msg');

        if (!username_or_email || !password) {
            errorMsg.text("All fields must be filled in.").show();
            return;
        }

        fetch('https://sayt-be.onrender.com/api/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username_or_email: username_or_email,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);

                if (data.success) {
                    //login olanda localStorage-a username ve email-i yazmaq
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('email', data.email);

                    errorMsg.hide();
                    alert('Login successful');
                    window.location.href = "./dashboard.html";
                } else {
                    errorMsg.text("Invalid username/email or password.").show();
                }
            })
            .catch(error => {
                console.error("Error occurred while logging in:", error);
                errorMsg.text("An error occurred. Please try again later.").show();
            });
    });

    $(document).on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            $('#login-btn').click();
        }
    });
});