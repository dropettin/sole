// JavaScript Document
$(document).ready(function() {
	$("div.back").hide();
	
    $("input[id='bfronte']").click(function() {
        $("div.back").hide();
        $("div.front").show();
    });
	
	    $("input[id='bretro']").click(function() {
        $("div.front").hide();
        $("div.back").show();
    });
});



function displayResult() {
	 document.getElementById('is-hidden').id = 'is-active';
	
	
	
	$(document).mouseup(function (e){
    var container = $("#is-active");

    if (container.has(e.target).length === 0) {
        document.getElementById('is-active').id = 'is-hidden';
    }
});
}