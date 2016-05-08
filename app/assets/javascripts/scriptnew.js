(function setSlideNav(){
    $wrapper = $('#wrapper');
    $drawerRight = $('#drawer-right');
    jQuery(".toggleDrawer").click(function(e){
        e.preventDefault();

        if($wrapper.css('marginLeft')=='0px'){
            $drawerRight.animate({marginRight : 0},200);
            $wrapper.animate({marginLeft : -300},200);
        }
        else{
            $drawerRight.animate({marginRight : -300},200);
            $wrapper.animate({marginLeft : 0},200);
        }

    });
}());