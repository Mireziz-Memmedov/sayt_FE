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
            console.log('Data received:', data); // DEBUG

            $('#listings-container').html('');
            const listingsContainer = $('#listings-container');

            data.forEach(listing => {
                // İlk şəkili al (artıq tam URL olacaq)
                const imageUrl = listing.images && listing.images.length > 0
                    ? listing.images[0].image
                    : '';

                console.log('Image URL:', imageUrl); // DEBUG

                const listingBox = $(`
                                        <div class="listing-box">
                                            ${imageUrl ? `<img src="${imageUrl}" alt="${listing.make} ${listing.model}" style="width: 100%; height: auto; object-fit: cover;">` : '<p>No image available</p>'}
                                            <p><strong>Make:</strong> ${listing.make}</p>
                                            <p><strong>Model:</strong> ${listing.model}</p>
                                            <p><strong>Price:</strong> $${listing.price}</p>
                                            <p><strong>Year:</strong> ${listing.year}</p>
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