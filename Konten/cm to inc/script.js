count = 0;
$("#reverse").click(function(event) {
    // act on the event
    cm_contHTML = $(".cm_content").html();
    in_contHTML = $(".in_content").html();
    // alert(in_contHTML)
    
    $(".cm_content").html(in_contHTML);
    $(".in_content").html(cm_contHTML);

    if (count == 0) {
        $("#convert").attr({'onClick' : 'incm'});
    }

});

function cmin() {
    var centimeters_inches = $("#centimeters_inches").val();
    $("#inches_centimeter").val(centimeters_inches/2.54);
}

function incm() {
    var centimeters_inches = $("#inches_centimeter").val();
    $("#centimeters_inches").val(centimeters_inches*2.54);
}