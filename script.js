document.addEventListener('DOMContentLoaded', function() {
    if (window.jQuery) {
        console.log('бибра');
    }
    
});

$(function(){
    var $button = $("a.button");
    var $div = $("div.div");
    
    $button.click(function() {
        $div.toggle('.unvisible');
    });
}); 

/*

var div = document.querySelector('.div');
var button = document.querySelector('.button');



button.addEventListener('click', function(evt) {
    evt.preventDefault();
    div.classList.toggle('unvisible');

});
*/