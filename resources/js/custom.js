$ (document).ready(function () {
    
    // for STICKY MENU
    $(".js--services-section").waypoint(function (direction) {
        if (direction == "down")
            $("nav").addClass("sticky");
        else
        $("nav").removeClass("sticky");
        
    });



    // for MIXER
    var mixer = mixitup('.container');
});