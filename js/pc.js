$(function(){
    $('#btn1').click(function(){
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        $('#areaul').hide();

        $('#btn2 a').removeClass("yellow");   
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   

        $('#tab1st').toggle(function () {
            if($('#tab1st').is(':hidden')){
                $('#btn1 a').removeClass("yellow");   
            }else {
                $('#btn1 a').addClass("yellow");
            }
        });
    });
    $('#btn1 a').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });
});

$(function(){
    $('#btn2').click(function(){
        $('#tab1st').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        $('#areaul').hide();

        $('#btn1 a').removeClass("yellow");   
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   

        $('#tab2nd').toggle(function () {
            if($('#tab2nd').is(':hidden')){
                $('#btn2 a').removeClass("yellow");   
            }else  
                $('#btn2 a').addClass("yellow");      
        });
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });

    $('#btn2 a').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });
});
$(function(){
    $('#btn3').click(function(){
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        $('#areaul').hide();

        $('#btn2 a').removeClass("yellow");   
        $('#btn1 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   

        $('#tab3rd').toggle(function () {
            if($('#tab3rd').is(':hidden')){
                $('#btn3 a').removeClass("yellow");   
            }else {
                $('#btn3 a').addClass("yellow");
            }
        });
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });
    $('#btn3 a').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });
});

$(function(){
    $('#btn4').click(function(){
        $('#tab1st').hide();
        $('#tab3rd').hide();
        $('#tab2nd').hide();
        $('#tab5th').hide();
        $('#areaul').hide();

        $('#btn1 a').removeClass("yellow");   
        $('#btn3 a').removeClass("yellow");   
        $('#btn2 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   

        $('#tab4th').toggle(function () {
            if($('#tab4th').is(':hidden')){
                $('#btn4 a').removeClass("yellow");   
            }else  
                $('#btn4 a').addClass("yellow");      
        });
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });
    $('#btn4 a').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });
});
$(function(){
    $('#btn5').click(function(){
        $('#tab1st').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab2nd').hide();
        $('#areaul').hide();

        $('#btn1 a').removeClass("yellow");   
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn2 a').removeClass("yellow");   

        $('#tab5th').toggle(function () {
            if($('#tab5th').is(':hidden')){
                $('#btn5 a').removeClass("yellow");   
            }else  
                $('#btn5 a').addClass("yellow");      
        });
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });
    $('#btn5 a').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });
});

//禁止选择
document.onselectstart=function(){return false;};

$(function(){
    $('#excol1').click(function(){
        $('#excol1').addClass("yellow");
        $('#excol2').removeClass("yellow");   
        $('#excol3').removeClass("yellow");   
        $('#excol4').removeClass("yellow");    
    });
    $('#excol1').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });

    $('#excol2').click(function(){
        $('#excol2').addClass('yellow');
        $('#excol1').removeClass("yellow");   
        $('#excol3').removeClass("yellow");   
        $('#excol4').removeClass("yellow");   

    });
    $('#excol2').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });

    $('#excol3').click(function(){
        $('#excol3').addClass('yellow');
        $('#excol2').removeClass("yellow");   
        $('#excol1').removeClass("yellow");   
        $('#excol4').removeClass("yellow");   

    });
    $('#excol3').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });

    $('#excol4').click(function(){
        $('#excol4').addClass('yellow');
        $('#excol2').removeClass("yellow");   
        $('#excol3').removeClass("yellow");   
        $('#excol1').removeClass("yellow");   

    });
    $('#excol4').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });

    $('#excol5').click(function(){
        $('#excol5').addClass('yellow');
        $('#excol6').removeClass("yellow");   
    });
    $('#excol5').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });

    $('#excol6').click(function(){
        $('#excol6').addClass('yellow');
        $('#excol5').removeClass("yellow");   
    });
    $('#excol6').hover(function(){
        $(this).addClass("lightyellow");
    },function () { 
        $(this).removeClass("lightyellow");
    });

});

$(function(){
    $('#area-select1').click(function(){
        $('#areaul').toggle();
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();

        $('#earth').css('display','inline');

        $('#btn1 a').removeClass("yellow");  
        $('#btn2 a').removeClass("yellow");    
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });

    $('#area-select2').click(function(){
        $('#areaul').toggle();
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        // $('#col-team a').css('color','darkgray');
        $('#earth').css('display','inline');

        $('#btn1 a').removeClass("yellow");  
        $('#btn2 a').removeClass("yellow");    
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });

    $('#area-select3').click(function(){
        $('#areaul').toggle();
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        // $('#col-team a').css('color','darkgray');
        $('#earth').css('display','inline');

        $('#btn1 a').removeClass("yellow");  
        $('#btn2 a').removeClass("yellow");    
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });

    $('#area-select4').click(function(){
        $('#areaul').toggle();
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        // $('#col-team a').css('color','darkgray');
        $('#earth').css('display','inline');

        $('#btn1 a').removeClass("yellow");  
        $('#btn2 a').removeClass("yellow");    
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });

    $('#area-select5').click(function(){
        $('#areaul').toggle();
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        // $('#col-team a').css('color','darkgray');
        $('#earth').css('display','inline');

        $('#btn1 a').removeClass("yellow");  
        $('#btn2 a').removeClass("yellow");    
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }
    });

    $('#area-select6').click(function(){
        $('#areaul').toggle();
        $('#tab1st').hide();
        $('#tab2nd').hide();
        $('#tab3rd').hide();
        $('#tab4th').hide();
        $('#tab5th').hide();
        // $('#col-team a').css('color','darkgray');
        $('#earth').css('display','inline');

        $('#btn1 a').removeClass("yellow");  
        $('#btn2 a').removeClass("yellow");    
        $('#btn3 a').removeClass("yellow");   
        $('#btn4 a').removeClass("yellow");   
        $('#btn5 a').removeClass("yellow");   
        if($('#areaul').is(':hidden')){
            $('#earth').css('display','none');           
        }

    });
});

$(function(){
    $('#area1').click(function(){
        $(this).css('color','yellow');
        $('#area2').css('color','darkgray');
        $('#area3').css('color','darkgray');
        $('#area4').css('color','darkgray');
        $('#area5').css('color','darkgray');
        $('#area6').css('color','darkgray');
        $('#earth').css('top','30%');

        $('#area-select1').css('display','inline');
        $('#area-select2').css('display','none');
        $('#area-select3').css('display','none');
        $('#area-select4').css('display','none');
        $('#area-select5').css('display','none');
        $('#area-select6').css('display','none');

    });

    $('#area2').click(function(){
        $(this).css('color','yellow');
        $('#area1').css('color','darkgray');
        $('#area3').css('color','darkgray');
        $('#area4').css('color','darkgray');
        $('#area5').css('color','darkgray');
        $('#area6').css('color','darkgray');
        $('#earth').css('top','35%');

        $('#area-select1').css('display','none');
        $('#area-select2').css('display','inline');
        $('#area-select3').css('display','none');
        $('#area-select4').css('display','none');
        $('#area-select5').css('display','none');
        $('#area-select6').css('display','none');

    });

    $('#area3').click(function(){
        $(this).css('color','yellow');
        $('#area2').css('color','darkgray');
        $('#area1').css('color','darkgray');
        $('#area4').css('color','darkgray');
        $('#area5').css('color','darkgray');
        $('#area6').css('color','darkgray');
        $('#earth').css('top','41%');

        $('#area-select1').css('display','none');
        $('#area-select2').css('display','none');
        $('#area-select3').css('display','inline');
        $('#area-select4').css('display','none');
        $('#area-select5').css('display','none');
        $('#area-select6').css('display','none');

    });

    $('#area4').click(function(){
        $(this).css('color','yellow');
        $('#area2').css('color','darkgray');
        $('#area3').css('color','darkgray');
        $('#area1').css('color','darkgray');
        $('#area5').css('color','darkgray');
        $('#area6').css('color','darkgray');
        $('#earth').css('top','47%');

        $('#area-select1').css('display','none');
        $('#area-select2').css('display','none');
        $('#area-select3').css('display','none');
        $('#area-select4').css('display','inline');
        $('#area-select5').css('display','none');
        $('#area-select6').css('display','none');

    });

    $('#area5').click(function(){
        $(this).css('color','yellow');
        $('#area2').css('color','darkgray');
        $('#area3').css('color','darkgray');
        $('#area4').css('color','darkgray');
        $('#area1').css('color','darkgray');
        $('#area6').css('color','darkgray');
        $('#earth').css('top','52%');

        $('#area-select1').css('display','none');
        $('#area-select2').css('display','none');
        $('#area-select3').css('display','none');
        $('#area-select4').css('display','none');
        $('#area-select5').css('display','inline');
        $('#area-select6').css('display','none');

    });

    $('#area6').click(function(){
        $(this).css('color','yellow');
        $('#area2').css('color','darkgray');
        $('#area3').css('color','darkgray');
        $('#area4').css('color','darkgray');
        $('#area5').css('color','darkgray');
        $('#area1').css('color','darkgray');
        $('#earth').css('top','57%');

        $('#area-select1').css('display','none');
        $('#area-select2').css('display','none');
        $('#area-select3').css('display','none');
        $('#area-select4').css('display','none');
        $('#area-select5').css('display','none');
        $('#area-select6').css('display','inline');

    });
    $('#bdbtn').click(function () { 
        $('#bd').toggle();
    });
});

