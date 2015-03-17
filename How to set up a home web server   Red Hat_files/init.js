
/* --------------------------------------------------------------

    * Filename:         init.js
    * Client:           redhat.com
    * Project:          redesign prototype
   
-------------------------------------------------------------- */

jQuery(document).ready(function(jQuery) {
                            
    // Search Box 'Type To Search' switch
    jQuery('.search-field').focus(function() {
        if (this.value == this.defaultValue){
            this.value = '';
        }
        if(this.value != this.defaultValue){
            this.select();
        }
    });
    
    // Select Box Styling
    jQuery('.quick-links-select').selectbox({debug: false});
    
    // quicklinks redirection
	jQuery('#quick_links_form #_container li').click(function() {
		var gotoAddr = jQuery(this).attr("id").split("_input_")[1];
		gotoAddr = gotoAddr.trim();
		if (gotoAddr == "") {
			return;
		} else {
			window.open(gotoAddr);
		}
	});
	
	jQuery('#quick_links_form #test').click(function() {
		window.open("http://www.redhat.com");
	});
    
    // Footer Call Out Box Hover Animations
    jQuery('.call-out-box').hover(function(){
        jQuery(this).find('div').stop().animate({
            marginLeft: '-156px'
        }, 'slow');

    },function(){
        jQuery(this).find('div').stop().animate({
            marginLeft: '0px'
        }, 'slow');
    });
    
    // Check for primary nav dropdowns and handle hover
    // if (jQuery("#primary-nav ul li .dropdown").length > 0) {
    //     jQuery('#primary-nav ul li').hover(function(){
    //         jQuery(this).find('.dropdown:first').toggle();
    
    //     },function(){
    //         jQuery(this).find('.dropdown:first').toggle();
    //     });
    // }
    
    // Check for secondary nav dropdowns
    // if (jQuery("#secondary-nav ul li .dropdown").length > 0) {
    //     jQuery('#secondary-nav ul li').click(function(){
    //         toggleDropdown(this);
    //     });
    // }
    
    // Secondary navigation
	jQuery('#showCountryLang_a').click(function() {
		jQuery('#countryLanguage_OverLay').css("display", "block");
	});

	jQuery('#hideCountryLang_a').click(function() {
		jQuery('#countryLanguage_OverLay').css("display", "none");
	});
    
    // Widget Toggling
    if (jQuery("#content .widget .widget-toggler").length > 0) {
        jQuery("#content .widget .widget-toggler").click(function(){
            toggleWidget(this);
        });
    }   
    
    // Tabs
    if (jQuery("#tabs").length > 0) {
        if (jQuery("#product-detail").length > 0) {
            jQuery('#tabs').tabs({selected: 2});
        } else if (jQuery("#solutions").length > 0) {
            jQuery('#tabs').tabs({selected: 1});
        } else {
            jQuery('#tabs').tabs();
        }
    }
    
    // Product Boxes
    if (jQuery(".product-box").length > 0) {
        jQuery('.product-box').hover(function(){
            jQuery(this).addClass('active');
        },function(){
            jQuery(this).removeClass('active');
        });
        
        jQuery('.product-box').click(function() {
            if(jQuery(this).attr("rel") != null) {
                window.location=jQuery(this).attr("rel");
            }
                 
         });
    }
    
    // Delayed Drop Downs
    jQuery.getScript('https://www.redhat.com/j/lib/jquery/plugins/jquery.hoverIntent.js', function() {
		jQuery("#primary-nav .primaryNavItem").hoverIntent({
			sensitivity: 7,
			interval: 150, 
			over: drops_show, 
			timeout: 150, 
			out: drops_hide
		});
	});
	jQuery("#primary-nav .primaryNavItem").addClass('with-js');
    
});


// Login Box - Pre Active State
function activateLogin() {
    jQuery("#login-active").animate({
	marginTop: '0px'
    }, 'slow');
}

function deactivateLogin() {
    jQuery("#login-active").animate({
	marginTop: '-170px'
    }, 'slow');
}

// Secondary Nav Drop Down Function
function toggleDropdown(dom) {
    if(jQuery(dom).find('.dropdown:first').css('display') == 'none') {
	jQuery(dom).find('.dropdown:first').stop(true, true).fadeIn();
    } else {
	jQuery(dom).find('.dropdown:first').stop(true, true).fadeOut();
    }
}

// Widget Toggling Function
function toggleWidget(dom) {
    if(jQuery(dom).hasClass('collapsed')) {
	jQuery(dom).removeClass('collapsed');
	jQuery(dom).addClass('expanded');
    } else {
	jQuery(dom).removeClass('expanded');
	jQuery(dom).addClass('collapsed');
    }
    jQuery(dom).parent().find('.widget-content').toggle();
}

// Swap Tab Subcontent
function loadSubcontent(caller, dom) {
    jQuery("#tabs .subnav a.subnav-item").removeClass("selected");
    jQuery(caller).addClass("selected");
    jQuery('.subcontent div').hide();
    jQuery(dom).show();
}

// Delayed Drop Downs

function drops_show(){ jQuery(this).addClass('show'); jQuery(this).removeClass('with-js'); }
function drops_hide(){ jQuery(this).removeClass('show'); jQuery(this).addClass('with-js'); }

// For new Cloud section
function cloudFancyboxWebinar () {
jQuery('.fancybox-webinar').fancybox({
	autoSize: false,
	width: "559px",
	height: "191px",
	scrolling: "no",
	afterClose: function(){
		jQuery('.webinarSection').css({
			"display":"block"
		});
	}
});
}

function cloudFancybox () {
jQuery('.info-1, div.magnifier a').fancybox({
	fitToView : false,
	beforeShow: function(){
		jQuery(".fancybox-skin").css({
			"backgroundColor":"transparent",
			"box-shadow":"none"
		});
	},
	afterShow: function(){
		jQuery(".fancybox-close").css({
			"right":"12px",
			"top":"-3px"
		});
	}
});
}

function cloudFancyboxMedia () {
jQuery('.fancybox-media')
	.fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});
}			
			
