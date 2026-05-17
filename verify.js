$(document).ready(function () {

    const inputs = document.querySelectorAll(".otp input");

    // yazdiqda avtomatik olaraq novbeti xanaya kecmesi ve 
    // tamalandiqda tesdiq olunmasi ucun funksiya.
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

    // silende avtomatik olaraq novbeti xanaya kecmesi ucun funksiya.
    inputs.forEach((input, index) => {
        input.addEventListener("keydown", (e) => {

            if (e.key === "Backspace" && index > 0 && input.value === "") {
                inputs[index - 1].focus();
            };

        });
    });

    //saga ve sola xanalari istifade edende hereket etmesi ucun funksiya
    inputs.forEach((input, index) => {
        input.addEventListener("keydown", (e) => {

            if (e.key === "ArrowLeft") {
                if (index > 0) {
                    inputs[index - 1].focus();
                } else {
                    inputs[inputs.length - 1].focus();
                }
            }

            if (e.key === "ArrowRight") {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    inputs[0].focus();
                }
            }

        });
    });

});