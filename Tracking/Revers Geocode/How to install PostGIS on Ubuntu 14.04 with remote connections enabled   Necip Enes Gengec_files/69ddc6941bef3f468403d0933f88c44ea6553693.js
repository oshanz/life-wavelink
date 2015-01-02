
/*====================================================*/
/* FILE /sedlex/inline_scripts/36cc84d691f5709ac634826871ee5b4231bd5002.js*/
/*====================================================*/

					function UserWebStat_sC(name,value,days) {
						if (days) {
							var date = new Date();
							date.setTime(date.getTime()+(days*24*60*60*1000));
							var expires = "; expires="+date.toGMTString();
						}
						else var expires = "";
						document.cookie = name+"="+value+expires+"; path=/";
					}
			
					function UserWebStat_gC(name) {
						var nameEQ = name + "=";
						var ca = document.cookie.split(';');
						for(var i=0; i < ca.length;i++) {
							var c = ca[i];
							while (c.charAt(0)==' ') c = c.substring(1,c.length);
							if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
						}
						return null;
					}
					
					function whatChoiceForLocalCookies() {
						var choix = UserWebStat_gC("whatChoiceForLocalCookies") ; 
						if (choix==null) {
							return "NO_CHOICE" ; 
						}
						return choix ; 
					}
					
					function acceptLocalCookies() {
						UserWebStat_sC("whatChoiceForLocalCookies","ACCEPT_COOKIE",30) ; 
						jQuery('#infoLocalCookies').remove() ;
						
						jQuery(".traffic_cookies_allow").hide() ; 
						jQuery(".traffic_cookies_refuse").show() ; 
						
					}
					function refusLocalCookies() {
						UserWebStat_sC("whatChoiceForLocalCookies","REFUS_COOKIE",30) ; 
						jQuery('#infoLocalCookies').remove() ;
						UserWebStat_sC('sC', null) ; 
						UserWebStat_sC('rN', null) ; 
						
						jQuery(".traffic_cookies_allow").show() ; 
						jQuery(".traffic_cookies_refuse").hide() ; 
					}
					
					jQuery(function() {
						// On gere les boutons 
						if (whatChoiceForLocalCookies()=="REFUS_COOKIE") {
							jQuery(".traffic_cookies_allow").show() ; 
							jQuery(".traffic_cookies_refuse").hide() ; 
						} else if (whatChoiceForLocalCookies()=="ACCEPT_COOKIE") {
							jQuery(".traffic_cookies_allow").hide() ; 
							jQuery(".traffic_cookies_refuse").show() ; 
						} else {
							jQuery(".traffic_cookies_allow").show() ; 
							jQuery(".traffic_cookies_refuse").show() ; 						
						}
					}) ; 

					function UserWebStat() {
										
												if (whatChoiceForLocalCookies()!="REFUS_COOKIE") {
												
							if (UserWebStat_gC('sC')!=null) {
								var sC = UserWebStat_gC('sC') ; 
							} else {
								var sC = "" ; 
							}
							if (UserWebStat_gC('rN')!=null) {
								var rN = UserWebStat_gC('rN') ; 
							} else {
								var rN = 0 ; 
							}
						
							var arguments = {
								action: 'UserWebStat', 
								browserName : navigator.appName, 
								browserVersion : navigator.appVersion, 
								platform : navigator.platform, 
								browserUserAgent: navigator.userAgent,
								cookieEnabled: navigator.cookieEnabled,
								singleCookie: sC,
								refreshNumber: rN,
								referer : document.referrer,
								page: window.location.pathname
							} 
						
							var ajaxurl2 = "http://www.negengec.com/wp-admin/admin-ajax.php" ; 
							jQuery.post(ajaxurl2, arguments, function(response) {
								//We put the return values in cookie and we relaunch
								if (response+""=="0") {
									UserWebStat_sC('rN', 0) ; 
								} else {
									var val = (response+"").split(",") ; 
									if (val.length==2) {
										UserWebStat_sC('sC', val[0], 365) ; 
										UserWebStat_sC('rN', val[1]) ;
										// if the browser does not accept cookie, we do not iterate
										if (UserWebStat_gC('rN')+""==val[1]+"") {
											var t=setTimeout("UserWebStat()",10000);
										}
									}
								}
							});    
						
												}
											}
					
										if (whatChoiceForLocalCookies()!="REFUS_COOKIE") {
										
						// We launch the callback when jQuery is loaded or at least when the page is loaded
						if (typeof(jQuery) == 'function') {
							UserWebStat() ; 			
						} else { 
							if (window.attachEvent) {window.attachEvent('onload', UserWebStat);}
							else if (window.addEventListener) {window.addEventListener('load', UserWebStat, false);}
							else {document.addEventListener('load', UserWebStat, false);} 
						}
					
										}
				
					function show_optOut(){
						
						jQuery("<div id='infoLocalCookies' style='z-index:1000; border:1px solid black; opacity:0.9;background-color:#999999;width:100%;position:fixed;bottom:0px;color:#EEEEEE;'>   <p style='text-align:center'>This site uses cookies for anonymous statistics. These statistics are used for local use only. If you prefer, you may refuse these cookies. <input type='button' onclick='acceptLocalCookies()' value='Accept' /> or <input type='button' onclick='refusLocalCookies()' value='Refuse' /></p></div>").appendTo( "body" );						             
					}
					if (whatChoiceForLocalCookies()=="NO_CHOICE") {
						if (window.attachEvent) {window.attachEvent('onload', show_optOut);}
						else if (window.addEventListener) {window.addEventListener('load', show_optOut, false);}
						else {document.addEventListener('load', show_optOut, false);} 
					}					
																
					

/*====================================================*/
/* FILE /sedlex/inline_scripts/0fae5bddb340e9dd5ea833422a6da12413bd5b27.js*/
/*====================================================*/
					

						var _gaq = _gaq || [];
						_gaq.push(['_setAccount', 'UA-51153102-1']);
						_gaq.push(['_trackPageview']);
						_gaq.push(['_trackPageLoadTime']);
	
						(function() {
							var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
														ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
														var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
						})();
						
																			
					function acceptGoogleCookies() {
						UserWebStat_sC("whatChoiceForGoogleCookies","ACCEPT_COOKIE",30) ; 
						jQuery('#infoGoogleCookies').remove() ;
						
						jQuery(".google_traffic_cookies_allow").hide() ; 
						jQuery(".google_traffic_cookies_refuse").show() ; 
					}
					
					function refusGoogleCookies() {
						UserWebStat_sC("whatChoiceForGoogleCookies","REFUS_COOKIE",30) ; 
						jQuery('#infoGoogleCookies').remove() ;
						
						jQuery(".google_traffic_cookies_allow").show() ; 
						jQuery(".google_traffic_cookies_refuse").hide() ; 
					}
					
					function whatChoiceForGoogleCookies() {
						var choix = UserWebStat_gC("whatChoiceForGoogleCookies") ; 
						if (choix==null) {
							return "NO_CHOICE" ; 
						}
						return choix ; 
					}
					
					jQuery(function() {
						// On gere les boutons 
						if (whatChoiceForGoogleCookies()=="REFUS_COOKIE") {
							jQuery(".google_traffic_cookies_allow").show() ; 
							jQuery(".google_traffic_cookies_refuse").hide() ; 
						} else if (whatChoiceForGoogleCookies()=="ACCEPT_COOKIE") {
							jQuery(".google_traffic_cookies_allow").hide() ; 
							jQuery(".google_traffic_cookies_refuse").show() ; 
						} else {
							jQuery(".google_traffic_cookies_allow").show() ; 
							jQuery(".google_traffic_cookies_refuse").show() ; 						
						}
					}) ; 

					
					function show_optIn(){
						
						jQuery("*<div id='infoGoogleCookies' style='z-index:1000; border:1px solid black; opacity:0.9;background-color:#999999;width:100%;position:fixed;top:0px;color:#EEEEEE;'>   <p style='text-align:center'>This site may uses cookies for statistics with Google Analytics. Do you accept such cookies? <input type='button' onclick='acceptGoogleCookies()' value='Accept' /> or <input type='button' onclick='refusGoogleCookies()' value='Refuse' /></p></div>").appendTo( "body" );						             
					}
					
										
