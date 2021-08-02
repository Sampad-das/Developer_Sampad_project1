$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:20,
        autoplay:true,
        autoplayTimeout:2000,
        responsive :{
            
            992:{
                items:3
            },
            
            768:{
                items:2
            },
            576:{
                items:1
            },
            480:{
                items:1
            },
            320:{
                items:1
            }


        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
// strat aso plagin
    AOS.init({
        
    });
// end aso plagin
// 
    $(".grow-you-bisniess").waypoint(function(direction){
        if(direction == "down"){
            $(".navigation").addClass("sticky-manu");
        }
        else{
            $(".navigation").removeClass("sticky-manu");
        }
    })
});

function opnebtn(){
    document.querySelector("#mynav").style.width = "100%"
}
function closebtn(){
    document.querySelector("#mynav").style.width = "0%"
}