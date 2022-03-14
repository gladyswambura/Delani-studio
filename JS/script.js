$(document).ready(function () {

    // design
    $("#design-show").click(function () {
        $("#design-show").hide();
        $("#design-hide").toggle();
    });
    $("#design-hide").click(function () {
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

// form
$(document).ready(function () {
    $("form#contactform").submit(function () {
        var personName = $("#person-name").val();
        var userMail = $("#person-email").val();
        var userMessage = $("#user-message").val();
        if (personName != '') {
            alert(personName + " , we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Check your entries");
        }
    })
})

// portfolio
$(document).ready(function () {

    $("#p1").mouseover(function () {
        $(".portfolio-1").show()
    });
    $("#p1").mouseout(function () {
        $(".portfolio-1").hide()

    });

    $("#p2").mouseover(function () {
        $(".portfolio-2").show()
    });
    $("#p2").mouseout(function () {
        $(".portfolio-2").hide()

    });

    $("#p3").mouseover(function () {
        $(".portfolio-3").show()
    });
    $("#p3").mouseout(function () {
        $(".portfolio-3").hide()

    });

    $("#p4").mouseover(function () {
        $(".portfolio-4").show()
    });
    $("#p4").mouseout(function () {
        $(".portfolio-4").hide()

    });

    $("#p5").mouseover(function () {
        $(".portfolio-5").show()
    });
    $("#p5").mouseout(function () {
        $(".portfolio-5").hide()

    });

    $("#p6").mouseover(function () {
        $(".portfolio-6").show()
    });
    $("#p6").mouseout(function () {
        $(".portfolio-6").hide()

    });

    $("#p7").mouseover(function () {
        $(".portfolio-7").show()
    });
    $("#p7").mouseout(function () {
        $(".portfolio-7").hide()

    });

    $("#p8").mouseover(function () {
        $(".portfolio-8").show()
    });
    $("#p8").mouseout(function () {
        $(".portfolio-8").hide()

    });
});