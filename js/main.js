// nav animation //

var isNav = 0;

$("#openNav").click(function(){
    $(this).animate({"opacity":"0"});
    $(".nav-section").animate({"height":"30vw"},"ease");
    $(".nav-ul").css("opacity","1");
    $("body").css("overflow","hidden");
    isNav = 1;
});

$("#closeNav").click(function(){
    if(isNav = 1){
        $("#openNav").animate({"opacity":"1"});
        $(".nav-section").animate({"height":"0"});
        $(".nav-ul").css("opacity","0");
        $("body").css("overflow","auto");
        isNav = 0;
    }
});

///////////////////


// going back to top when you load page
$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});


$(function(){
    var currentScrollPosition = 1;
    var animate = false;
    var timeoutSection1ani1,timeoutSection1ani2,timeoutSection1ani3;
    var isWorksSection = false;
    var isFixedMode = false;

     window.addEventListener('mousewheel',scrollToDiv);

    function scrollToDiv(event){
        if(isWorksSection){
            // console.log(document.body.scrollTop);

            var depth, i, layer, layers, movement, topDistance, translate3d;
            topDistance = this.pageYOffset-$('#section3').offset().top;

            if(this.pageYOffset > $('#worksContent').offset().top-41){
                if(!isFixedMode){
                    console.log('ads');
                    isFixedMode = true;
                    $('#worksContent').css({'position':'fixed','top':'45px','left':'0', 'width':'100%'});
                }
            }
            if(this.pageYOffset < $('#section3').offset().top + 186){
                $('#worksContent').css({'position':'relative'});
                isFixedMode = false;
            }  

            console.log(topDistance);
            layers = document.querySelectorAll("[data-type='parallaxworks']");
            for (i = 0; i < layers.length; i++) {
                layer = layers[i];
                depth = layer.getAttribute('data-depth');
                movement = (topDistance * depth);
                if( i == 0 ){
                    if(movement<($(window).width()*0.33)){
                        // console.log(movement);
                        translate3d = 'translate3d('+movement+'px,0,0)';
                        layer.style.transform = translate3d;
                    }
                }else{
                    if(movement<($(window).width()*0.66)){
                        // console.log(movement);
                        translate3d = 'translate3d('+movement+'px,0,0)';
                        layer.style.transform = translate3d;
                        $('.works-category').each(function (){
                            $(this).removeClass('active-show');
                        });
                    }else{
                        layers[0].style.transform = 'translate3d('+$(window).width()*0.33+'px,0,0)';
                        layers[1].style.transform = 'translate3d('+$(window).width()*0.66+'px,0,0)';

                        $('.works-category').each(function (){
                            $(this).addClass('active-show');
                            $('#worksContent').css({'position':'relative'});
                        });
                    }
                }
                if(topDistance<0){
                    layers[0].style.transform = 'translate3d(0,0,0)';
                    layers[1].style.transform = 'translate3d(0,0,0)';
                }
            }

            if(document.body.scrollTop<($('#section3').offset().top-10)){
                isWorksSection = false;
            }
            if(document.body.scrollTop>($('#section4').offset().top-10)){
                isWorksSection = false;
            }
        }else{
            event.preventDefault();
            if(!animate){
                if(event.deltaY<0){
                    currentScrollPosition-=1;
                    if(currentScrollPosition<=0){
                        currentScrollPosition = 1;
                    }else{
                        animate = true;
                        $('html, body').animate({scrollTop: $('#section'+currentScrollPosition).offset().top }, 1500, function(){
                            animate = false;
                            $('html, body').stop();
                            if(currentScrollPosition == 1){
                                resetAnimatSection1();
                            }else if(currentScrollPosition == 2){
                                startAnimateSection1();
                            }else if(currentScrollPosition == 3){
                                resetAnimatSection1();
                            }

                            if(currentScrollPosition == 3){
                                isWorksSection = true;
                            }
                        });
                    }
                }else{
                    currentScrollPosition+=1;
                    if(currentScrollPosition>=5){
                        currentScrollPosition = 4;
                    }else{
                        animate = true;
                        $('html, body').animate({scrollTop: $('#section'+currentScrollPosition).offset().top }, 1500, function(){
                            animate = false;
                            $('html, body').stop();
                            if(currentScrollPosition == 1){
                                resetAnimatSection1();
                            }else if(currentScrollPosition == 2){
                                startAnimateSection1();
                            }else if(currentScrollPosition == 3){
                                resetAnimatSection1();
                            }

                            if(currentScrollPosition == 3){
                                isWorksSection = true;
                            }
                        });
                    }
                }
            }
        }
    }

    function startAnimateSection1(){
        var stepAnimation = 0;

        timeoutSection1ani1 = setTimeout(function(){
            $('#section1ani1').removeClass('opacity-animation');
        },200);

        timeoutSection1ani2 = setTimeout(function(){
            $('#section1ani2').removeClass('fadein-animation');
        },1000);

        timeoutSection1ani3 = setTimeout(function(){
            $('#section1ani3').removeClass('opacity-animation');
        },3000);

       
    }

    function resetAnimatSection1(){
        clearTimeout(timeoutSection1ani1);
        clearTimeout(timeoutSection1ani2);
        clearTimeout(timeoutSection1ani3);

        $('#section1ani1').addClass('opacity-animation');
        $('#section1ani2').addClass('fadein-animation');
        $('#section1ani3').addClass('opacity-animation');
    }

    function startAnimateSection4(){
         var stepAnimation = 0;

         timeoutSection4ani1 = setTimeout(function(){
            $('#section4ani1').removeClass('opacity-animation');
        },1000);
    }

     function resetAnimatSection4(){
        clearTimeout(timeoutSection4ani1);
         $('#section4ani1').addClass('opacity-animation');
     }

    window.addEventListener('load',function(){
        $('html, body').animate({scrollTop: $('#section1').offset().top }, 0);
        console.log('loaded!');
        
    });

    /////////////////
    // window.addEventListener("scroll", function(event){
    //     var allLayer = $(".parallax-layers");
        
    //     for (var i=0; i>allLayer.length; i+=1){
    //         var topDistanse = $(".page-header").offset();
    //         var depth = allLayer[i].attr("data-depth");
    //         var movement = -(topDistanse * depth);
    //         allLayer[i].css({"transform":"translate3d(0 , ' + movement + ' , 0)"});
    //     }

    // });

    ////// page top scroll parallax animation /////
    window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    if (topDistance > 1000)
        return;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0; i < layers.length; i++) {
    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(topDistance * depth);
    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style.transform = translate3d;
  }
});

    

})