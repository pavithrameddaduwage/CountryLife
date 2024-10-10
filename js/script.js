// $(document).ready(function () {
//     // On clicking the Services link
//     $('a[href="Services.html"]').on('click', function (event) {
//         event.preventDefault(); // Prevent the default link behavior

//         // Fade out the current content
//         $('body').fadeOut(500, function () {
//             // Redirect after fading out
//             window.location.href = 'Services.html';
//         });
//     });

//     // On page load, fade in the "Who We Are" section
//     if (window.location.pathname.endsWith("Services.html")) {
//         $('#who-we-are').addClass('visible');
//     }
// });


document.querySelector('.scroll-down').addEventListener('click', function() {
    document.getElementById('target-section').scrollIntoView({
        behavior: 'smooth'
    });
});
