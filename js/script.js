
document.querySelector('.home-nav').addEventListener('click', function() {
    const heroImage = document.querySelector('.fly-in');
    heroImage.classList.remove('animate');
    void heroImage.offsetWidth; 
    heroImage.classList.add('animate');
});

 $(document).ready(function () {
        $(".nav-link").on("click", function (e) {
            if ($(this).attr("href") === "AboutUs.html") { 
                e.preventDefault(); 
                
           
                $("body").fadeOut(500, function () {
                  
                    window.location.href = "AboutUs.html"; 
                });
            }
        });
 });
 $(document).ready(function () {
    function animateImages() {
        $(".staircase-layout .image-container").each(function (index) {
            $(this).delay(index * 500).queue(function (next) { 
                $(this).addClass("show"); 
                next();
            });
        });
    }
    animateImages();
});
$(document).ready(function () {
    function animateText() {
        $("#who-we-are .text-fly-in").css("opacity", "0"); 
        $("#who-we-are .text-fly-in").addClass("text-fly-in");
    }
    $('#services').on('click', function () {
        animateText();
    });
});

