$(document).ready(function(){
    $('.card').click(function(){
				$(this).find('.details-1, .details-2').toggleClass('unfold').parents('.card').siblings().children('.details-1, .details-2').removeClass('unfold');
				$(this).toggleClass('span').siblings('.card').removeClass('span');
    });
});







// Get the modaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaal 111111111111111111
var modalA = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalA) {
        modalA.style.display = "none";
    }
}// Get the modaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaal 22222222222222
var modalB = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalB) {
        modalB.style.display = "none";
    }
}