$(document).foundation()

$('#enlarge-icon-img').hover(
    function () {
        $('#enlarge-icon-img').attr('src', '/img/tactileflux/enlargeIconHoverEffect.svg');
    }, function () {
        $('#enlarge-icon-img').attr('src', '/img/tactileflux/enlargeIcon.svg');
    }
);