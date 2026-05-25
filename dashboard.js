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

    //şəkilə click və şəkildən çıxış etmək üçün
    $(document).on("click", ".imgbox img", function () {
        $("#exitModal").addClass("active");
    });

    $(".cancel").on("click", function () {
        $("#exitModal").removeClass("active");
    });

});