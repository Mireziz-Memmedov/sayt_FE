$(document).ready(function () {

    // btn-ya click edəndə aşağı pəncərə açılır
    $('.minimenu .btn').click(function (e) {
        e.preventDefault();
        $(this).next('.dropdown').slideToggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.minimenu .btn').length && !$(e.target).closest('.dropdown').length) {
            $('.dropdown').slideUp();
        }
    });

    $('.minimenu .dropdown .option a').click(function (e) {
        e.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - $('header').outerHeight()
        }, 500, function () {
            $('.dropdown').slideUp();
        });
    });

    //listings endpoindedeki melumatlar js ile yuklenir
    fetch('https://sayt-be.onrender.com/api/listing/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {

            $('#listings-container').html('');
            const listingsContainer = $('#listings-container');

            data.forEach(listing => {
                // İlk şəkili al (artıq tam URL olacaq)
                const imageUrl = listing.images && listing.images.length > 0
                    ? listing.images[0].image
                    : '';

                const listingBox = $(`
                                        <div class="listing-box">
                                            <div class="imgbox">
                                                ${imageUrl ? `<img src="${imageUrl}" alt="${listing.make} ${listing.model}">` : '<p>No image available</p>'}
                                            </div>
                                            <div class="textbox">
                                                <p><strong></strong> ${listing.make}, ${listing.model}</p>
                                                <p><strong></strong> ${listing.price} AZN</p>
                                                <p><strong></strong> ${listing.year}, ${listing.engine} L, ${listing.mileage} km</p>
                                            </div>
                                        </div>
                                    `);
                listingsContainer.append(listingBox);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            $('#listings-container').html('<p>Error loading listings.</p>');
        });

});