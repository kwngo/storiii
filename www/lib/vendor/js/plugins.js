
/* 
---------------------------------------------------
ACCORDION
---------------------------------------------------
*/

$(function() {
	$('.accordion-content').hide();
	
	$('.accordion > div a').click(function() {
		if ($(this).parent().hasClass('accordion-selected')) {
			$(this).parent().removeClass('accordion-selected');
			$(this).next().slideUp();
        } else {
        	$('.accordion-content').slideUp();
        	$('.accordion > div').removeClass('accordion-selected');
        	$(this).next().slideDown();
			$(this).parent().addClass('accordion-selected');
			$(this).parent().next().slideDown();
		}
		return false;
	});
});

/* 
---------------------------------------------------
CLEAR TEXTAREA
---------------------------------------------------
*/

$('textarea').focus(function() {
	"use strict";
	$(this).val('');
});

/* 
---------------------------------------------------
CLOSE / HIDE
---------------------------------------------------
*/

$(function() {
	"use strict";
	$('.close').click(function() {
		$(this).parent().fadeTo(500, 0.1, function() {
            $(this).slideUp(200);
        });
	});
});

/* 
---------------------------------------------------
FEATURES SHOWCASE
---------------------------------------------------
*/

$(function() {
	"use strict";
	$('.showcase > ul li:nth-child(1)').addClass('active');
	$('#f-1C').siblings().hide();
	
	$('.showcase > ul li').click(function(){
		var t = $(this).attr('id');
		
		$('.showcase > ul li').removeClass('active');           
		$(this).addClass('active');
		$('#'+ t + 'C').siblings().slideUp();
		$('#'+ t + 'C').slideDown();
	});
});

/* 
---------------------------------------------------
FILTER
---------------------------------------------------
*/

$(document).ready(function() {
	"use strict"; 
    $('.filter-menu li a').click(function() {  
        $('.filter-menu li').removeClass('active'); 
        $(this).parent().addClass('active'); 
         
        var filterVal = $(this).text().toLowerCase().replace(' ','-');  
                  
        if(filterVal == 'all') {  
            $('.filter-wrap li.hidden').fadeTo(500, 1).removeClass('hidden');  
        } else {  
            $('.filter-wrap li').each(function() {  
                if(!$(this).hasClass(filterVal)) {  
                    $(this).fadeTo(500, 0.2).addClass('hidden');  
                } else {  
                    $(this).fadeTo(500, 1).removeClass('hidden');  
                }  
            });  
        }  
          
        return false;  
    });  
});

/* 
---------------------------------------------------
MOBILE NAV
---------------------------------------------------
*/

$(function() {
	"use strict";
	$("<select />").appendTo("#mobile-nav");
	
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
	}).appendTo("#site-header nav select");
	
	$("#site-header nav a").each(function() {
		var el = $(this);
		$("<option />", {
		   "value"   : el.attr("href"),
		   "text"    : el.text()
		}).appendTo("#site-header nav select");
	});
	
	$("#site-header nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
});


/* --- CUSTOM SELECT ICON --- */

$(document).ready(function(){
	"use strict";
	$("#mobile-nav select").each(function(){
	  	$(this).wrap('<div class="selectbox"/>');
		$(this).after("<span class='selecttext'></span>");
		
		var val = $(this).children("option:selected").text();
		$(this).next(".selecttext").text(val);
		$(this).change(function(){
			var val = $(this).children("option:selected").text();
			$(this).next(".selecttext").text(val);
		});
		
        var selectId = $(this).attr('id');
        if( selectId !== undefined ){
            var linkClass = selectId;
        }
        
        if(linkClass){
            $(this).parent('.selectbox').addClass(linkClass);
        }
	});
});

/* --- SEARCH HIDE/SHOW --- */

$(function() {
	"use strict";
	$('#search-btn').click(function() {
		$('#site-header nav').fadeTo(500, 0, function() {
            $('#header-search').fadeTo(500, 1);
        });
	});
	
	$('#search-close').click(function() {
		$('#header-search').fadeTo(500, 0, function() {
            $('#site-header nav').fadeTo(500, 1);
            $('#header-search').hide();
        });
	});
});

/* 
---------------------------------------------------
PROGRESS BAR ANIMATION
---------------------------------------------------
*/

$('document').ready(function() {
	"use strict";
    $('.meter div').each(function () {
        $(this).animate({
            width: this.title,
        }, {
            duration: 1000,
            step: function (current) {
            	$(this).children('h4').html(parseInt(current, 10) + '%')
                $('.meter div').css("overflow","visible");
            }
            
        });
    });
});

/* 
---------------------------------------------------
SCROLL TO TOP
---------------------------------------------------
*/

$(function() {
	"use strict";
	var offset =500;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery("#totop").fadeIn(duration);
        } else {
            jQuery("#totop").fadeOut(duration);
        }
    });
    
    jQuery("#totop").click(function(event) {
        event.preventDefault();
        jQuery("html, body").animate({scrollTop: 0}, duration);
        return false;
    })
    
    $("a[href=#top]").click(function(){
        $("html, body").animate({scrollTop:0}, "slow");
        return false;
    });
});

/* 
---------------------------------------------------
STOP # JUMP
---------------------------------------------------
*/

(function () {
	"use strict";
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
})();

/* 
---------------------------------------------------
TABS
---------------------------------------------------
*/

$(function() {
	"use strict";
	$('.tabs > ul li a:not(:first)').addClass('inactive');
	$('#tab1C').siblings().hide();
	
	$('.tabs > ul li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ 
			$('.tabs > ul li a').addClass('inactive');           
			$(this).removeClass('inactive');
			
			$('#'+ t + 'C').siblings().slideUp();
			$('#'+ t + 'C').slideDown();
		}
	});
});

/* 
---------------------------------------------------
TESTIMONIAL SLIDER
---------------------------------------------------
*/

$(function() {
	"use strict";
	$('.testimonial-slider ul li:not(:first)').addClass('inactive');
	$('#testimonial-1C').siblings().hide();
	
	$('.testimonial-slider li').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ 
			$('.testimonial-slider ul li').addClass('inactive');           
			$(this).removeClass('inactive');
			
			$('#'+ t + 'C').siblings().slideUp();
			$('#'+ t + 'C').slideDown();
		}
	});
});

/* 
---------------------------------------------------
TEAM TABS
---------------------------------------------------
*/

$(function() {
	"use strict";
	$('.team-tabs .tt-thumbs li:nth-child(1)').addClass('active');
	$('#t-1C').siblings().hide();
	
	$('.team-tabs .tt-thumbs li').click(function(){
		var t = $(this).attr('id');
		
		$('.team-tabs .tt-thumbs li').removeClass('active');           
		$(this).addClass('active');
		$('#'+ t + 'C').siblings().slideUp();
		$('#'+ t + 'C').slideDown();
	});
});

/* 
---------------------------------------------------
TEAM SLIDER
---------------------------------------------------
*/

$(function() { 
	"use strict";
	$('#ts-3').addClass('active');
	$('.ts-content > li:nth-child(3)').siblings().hide();
	
	$('.ts .ts-thumbs li').click(function(){
		var t = $(this).attr('id');
		var src = $("img", this).attr("src");
		
		$(this).siblings().removeClass('active');           
		$(this).addClass('active');
		$(this).closest('section').css({backgroundImage : 'url(' + src + ')'});
		$('#'+ t + 'C').siblings().slideUp();
		$('#'+ t + 'C').slideDown();
	});
});



