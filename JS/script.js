// user interface
$(document).ready(function() {

    // design
    $("#design-show").click(function() {
        $("#design-show").hide();
        $("#design-hide").toggle();
    });
$("#design-hide").click(function() {
    $("#design-hide").hide();
    $("#design-show").toggle();
});

// development
$("#development-show").click(function () {
    $("#development-show").hide();
    $("#development-hide").toggle();
});
$("#development-hide").click(function () {
    $("#development-hide").hide();
    $("#development-show").toggle();
});

// product-management
$("#Product-management-show").click(function () {
    $("#Product-management-show").hide();
    $("#Product-management-hide").toggle();
});
$("#Product-management-hide").click(function () {
    $("#Product-management-hide").hide();
    $("#Product-management-show").toggle();
});






});