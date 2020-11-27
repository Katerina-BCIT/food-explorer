// Write your JavaScript here...

// Show Hide Nav
const $btnShowNav = $('#btn-main-nav');
const $navMain = $('#main-nav');

//$navMain.hide();

$btnShowNav.click(function(e){
    e.preventDefault();
    $navMain.slideToggle();
});

const mql = window.matchMedia('(min-width: 500px)');

function screenTest(e) {
  if (e.matches) {
    $navMain.removeAttr('style');
  }else {
    $navMain.hide();
  } 
}

mql.addListener(screenTest);


