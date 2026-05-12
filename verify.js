$(document).ready(function () {

    const inputs = document.querySelectorAll(".otp input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {

            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }

            let code = "";
            inputs.forEach(i => code += i.value);

            if (code.length === 6) {
                verifyCode(code);
            }
        });
    });

    function verifyCode(code) {
        console.log("Verifying:", code);
        // fetch backend endpoint burada çağırılır
    }

});