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
                <option value="4Runner">4Runner</option>
                <option value="86">86</option>
                <option value="Alphard">Alphard</option>
                <option value="Avalon">Avalon</option>
                <option value="Aygo">Aygo</option>
                <option value="bZ4X">bZ4X</option>
                <option value="C-HR">C-HR</option>
                <option value="Camry">Camry</option>
                <option value="Celica">Celica</option>
                <option value="Corolla">Corolla</option>
                <option value="Corolla Cross">Corolla Cross</option>
                <option value="Crown">Crown</option>
                <option value="FJ Cruiser">FJ Cruiser</option>
                <option value="Fortuner">Fortuner</option>
                <option value="GR86">GR86</option>
                <option value="GR Corolla">GR Corolla</option>
                <option value="Highlander">Highlander</option>
                <option value="Hilux">Hilux</option>
                <option value="Land Cruiser">Land Cruiser</option>
                <option value="Mirai">Mirai</option>
                <option value="Prius">Prius</option>
                <option value="Proace">Proace</option>
                <option value="RAV4">RAV4</option>
                <option value="Sequoia">Sequoia</option>
                <option value="Sienna">Sienna</option>
                <option value="Supra">Supra</option>
                <option value="Tacoma">Tacoma</option>
                <option value="Tundra">Tundra</option>
                <option value="Venza">Venza</option>
                <option value="Verso">Verso</option>
                <option value="Yaris">Yaris</option>
            `);
        } else if (make === 'Honda') {
            modelSelect.append(`
                <option value="Accord">Accord</option>
                <option value="Civic">Civic</option>
                <option value="CR-V">CR-V</option>
                <option value="Fit">Fit</option>
                <option value="HR-V">HR-V</option>
                <option value="Insight">Insight</option>
                <option value="Odyssey">Odyssey</option>
                <option value="Passport">Passport</option>
                <option value="Pilot">Pilot</option>
                <option value="Ridgeline">Ridgeline</option>
            `);
        } else if (make === 'Ford') {
            modelSelect.append(`
                <option value="Bronco">Bronco</option>
                <option value="EcoSport">EcoSport</option>
                <option value="Edge">Edge</option>
                <option value="Escape">Escape</option>
                <option value="Expedition">Expedition</option>
                <option value="Explorer">Explorer</option>
                <option value="F-150">F-150</option>
                <option value="Mustang">Mustang</option>
                <option value="Ranger">Ranger</option>
                <option value="Transit">Transit</option>
            `);
        } else if (make === 'BMW') {
            modelSelect.append(`
                <option value="3 Series">3 Series</option>
                <option value="5 Series">5 Series</option>
                <option value="7 Series">7 Series</option>
                <option value="X1">X1</option>
                <option value="X3">X3</option>
                <option value="X5">X5</option>
                <option value="X7">X7</option>
                <option value="Z4">Z4</option>
            `);
        } else if (make === 'Mercedes-Benz') {
            modelSelect.append(`
                <option value="A-Class">A-Class</option>
                <option value="C-Class">C-Class</option>
                <option value="E-Class">E-Class</option>
                <option value="S-Class">S-Class</option>
                <option value="GLA">GLA</option>
                <option value="GLC">GLC</option>
                <option value="GLE">GLE</option>
                <option value="GLS">GLS</option>
                <option value="G-Class">G-Class</option>
            `);
        } else if (make === 'Audi') {
            modelSelect.append(`
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
                <option value="A6">A6</option>
                <option value="A7">A7</option>
                <option value="A8">A8</option>
                <option value="Q3">Q3</option>
                <option value="Q5">Q5</option>
                <option value="Q7">Q7</option>
                <option value="Q8">Q8</option>
            `);
        } else if (make === 'Volkswagen') {
            modelSelect.append(`
                <option value="Polo">Polo</option>
                <option value="Golf">Golf</option>
                <option value="Passat">Passat</option>
                <option value="Tiguan">Tiguan</option>
                <option value="Touareg">Touareg</option>
                <option value="Arteon">Arteon</option>
                <option value="Atlas">Atlas</option>
                <option value="Jetta">Jetta</option>
            `);
        } else if (make === 'Nissan') {
            modelSelect.append(`
                <option value="Altima">Altima</option>
                <option value="Armada">Armada</option>
                <option value="Frontier">Frontier</option>
                <option value="GT-R">GT-R</option>
                <option value="Juke">Juke</option>
                <option value="Leaf">Leaf</option>
                <option value="Maxima">Maxima</option>
                <option value="Murano">Murano</option>
                <option value="Pathfinder">Pathfinder</option>
                <option value="Rogue">Rogue</option>
                <option value="Sentra">Sentra</option>
                <option value="Titan">Titan</option>
                <option value="Versa">Versa</option>
                <option value="X-Trail">X-Trail</option>
            `);
        } else if (make === 'Subaru') {
            modelSelect.append(`
                <option value="Impreza">Impreza</option>
                <option value="Legacy">Legacy</option>
                <option value="Outback">Outback</option>
                <option value="Forester">Forester</option>
                <option value="Crosstrek">Crosstrek</option>
                <option value="WRX">WRX</option>
                <option value="BRZ">BRZ</option>
            `);
        } else if (make === 'Mazda') {
            modelSelect.append(`
                <option value="Mazda2">Mazda2</option>
                <option value="Mazda3">Mazda3</option>
                <option value="Mazda6">Mazda6</option>
                <option value="CX-3">CX-3</option>
                <option value="CX-30">CX-30</option>
                <option value="CX-5">CX-5</option>
                <option value="CX-9">CX-9</option>
            `);
        } else if (make === 'Chevrolet') {
            modelSelect.append(`
                <option value="Spark">Spark</option>
                <option value="Sonic">Sonic</option>
                <option value="Cruze">Cruze</option>
                <option value="Malibu">Malibu</option>
                <option value="Impala">Impala</option>
                <option value="Camaro">Camaro</option>
                <option value="Corvette">Corvette</option>
                <option value="Trax">Trax</option>
                <option value="Equinox">Equinox</option>
                <option value="Blazer">Blazer</option>
                <option value="Traverse">Traverse</option>
                <option value="Tahoe">Tahoe</option>
                <option value="Suburban">Suburban</option>
            `);
        } else if (make === 'Kia') {
            modelSelect.append(`
                <option value="Rio">Rio</option>
                <option value="Forte">Forte</option>
                <option value="Optima">Optima</option>
                <option value="Stinger">Stinger</option>
                <option value="Soul">Soul</option>
                <option value="Seltos">Seltos</option>
                <option value="Sportage">Sportage</option>
                <option value="Sorento">Sorento</option>
                <option value="Telluride">Telluride</option>
            `);
        } else if (make === 'Hyundai') {
            modelSelect.append(`
                <option value="Accent">Accent</option>
                <option value="Elantra">Elantra</option>
                <option value="Sonata">Sonata</option>
                <option value="Ioniq">Ioniq</option>
                <option value="Kona">Kona</option>
                <option value="Tucson">Tucson</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Palisade">Palisade</option>
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
    $('#add-listing-form').on('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        selectedFiles.forEach((file, index) => {
            formData.append('images', file);
        });

        // burada formData ile backend'e gonderme kodu olacaq

        fetch("https://sayt-be.onrender.com/api/add_listing/", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access_token")
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Listing yaradıldı!");
                    window.location.reload();
                } else {
                    alert("Xəta baş verdi!");
                }
            })
            .catch(err => {
                console.error(err);
                alert("Server xətası!");
            });
    });
});
