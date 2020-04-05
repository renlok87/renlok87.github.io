document.addEventListener("DOMContentLoaded", function() {

    window.onscroll = function() {myFunction()};

    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

});
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        item: 1,
        auto:true,
        autoWidth:true,
        loop:true,
        pauseOnHover: true,
        controls: false,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        },
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
$(document).ready(function() {
    $('#vertical').lightSlider({
        gallery:true,
        item:1,
        vertical:true,
        verticalHeight:295,
        vThumbWidth:100,
        vThumbHeight:100,
        thumbItem:4,
        thumbMargin:8,
        slideMargin:50
    });
});
$(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:4,
        verticalHeight:295,
        vThumbWidth:100,
        slideMargin:4,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });
});

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top -120},'600');
});
