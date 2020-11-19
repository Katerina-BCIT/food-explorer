// Write your JavaScript here...

const $body = $('body');
const $btnMainNav = $('#btn-main-nav');

$btnMainNav.click(function(e){
    e.preventDefault();
    $body.toggleClass('show-nav');
});