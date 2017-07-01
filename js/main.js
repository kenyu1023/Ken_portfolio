
$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});


$(function(){

    

    var currentScrollPosition = 1;
    var animate = false;
    var timeoutSection1ani1,timeoutSection1ani2,timeoutSection1ani3;

    window.addEventListener('mousewheel',scrollToDiv);

    function scrollToDiv(event){
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
                    });
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

    window.addEventListener('load',function(){
        $('html, body').animate({scrollTop: $('#section1').offset().top }, 0);
        console.log('loaded!');
        
    });

    

})