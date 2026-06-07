$(document).ready(function () {
    //ili avtomatik doldurmaq ucun
    const yearSelect = document.getElementById('year');

    for (let year = new Date().getFullYear(); year >= 1980; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    //make secende ona uygun model secimi gelsin
    $('#make').on('change', function () {
        const make = $(this).val();
        const modelSelect = $('#model');

        modelSelect.html('<option value="">Select Model</option>');

        if (make === 'Toyota') {
            modelSelect.append(`
                <option value="Corolla">Corolla</option>
                <option value="Camry">Camry</option>
                <option value="RAV4">RAV4</option>
            `);
        }
    });


    //max 20 sekil qebul edecek, drag&drop ve input file ile sekil secme funksionalligi
    const MAX_FILES = 20;
    let selectedFiles = [];

    // dragover ve dragleave
    $('#drop-area').on('dragover', function (e) {
        e.preventDefault();
        $(this).css('background', '#1a1a1f');
    });

    $('#drop-area').on('dragleave', function () {
        $(this).css('background', '#0f0f12');
    });

    // drop
    $('#drop-area').on('drop', function (e) {
        e.preventDefault();
        $(this).css('background', '#0f0f12');

        handleFiles(e.originalEvent.dataTransfer.files);
    });

    // input file ile sekil secme
    $('#images').on('change', function () {
        handleFiles(this.files);
    });

    // sekil secme funksionalligi
    function handleFiles(files) {

        for (let i = 0; i < files.length; i++) {

            if (selectedFiles.length >= MAX_FILES) {
                alert("Maximum " + MAX_FILES + " şəkil!");
                break;
            }

            const file = files[i];

            if (!file.type.startsWith('image/')) continue;

            selectedFiles.push(file);
        }

        renderPreviews();
    }

    // sekil preview funksionalligi
    function renderPreviews() {

        $('#preview-container').html('');

        selectedFiles.forEach((file, index) => {

            const reader = new FileReader();

            reader.onload = function (e) {

                const box = $(`
                    <div class="preview-box">
                        <img src="${e.target.result}">
                        <button class="remove-btn" data-index="${index}">x</button>
                    </div>
                `);

                $('#preview-container').append(box);
            };

            reader.readAsDataURL(file);
        });
    }

    // sekil silme funksionalligi
    $(document).on('click', '.remove-btn', function () {
        const index = $(this).data('index');
        selectedFiles.splice(index, 1);
        renderPreviews();
    });

    // form submit
    $('#listing-form').on('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        selectedFiles.forEach((file, index) => {
            formData.append('images[]', file);
        });

        // burada formData ile backend'e gonderme kodu olacaq
    });

});