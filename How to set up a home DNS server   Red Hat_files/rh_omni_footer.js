// Duplicate pageName value to custom prop+eVar using dynamic variable
s.prop7 = s.eVar7 = "D=pageName";

/* s.prop1="";
 s.prop2="";
 s.prop3="";
 s.prop4="";
 s.prop5=""*/
function setOmnitureVariables(omnitureArray){
	
	
	s.prop6=omnitureArray[20];		
	
	s.pageName = omnitureArray[0];
	s.server = omnitureArray[1];
	s.channel = omnitureArray[2];
	s.hier1 =  omnitureArray[3];
	s.hier2 =  omnitureArray[21];
	

if (!s.eVar3 || s.eVar3 == "") {
	  s.prop1 = getLoginStatus();
	}	
s.prop2 = omnitureArray[10];
s.prop3 = omnitureArray[12];
s.prop4 = omnitureArray[18];
s.prop5 = omnitureArray[16];
s.prop13=omnitureArray[14];
s.prop14=omnitureArray[4];
s.prop15=omnitureArray[6];
s.prop16 = omnitureArray[8];


if (!s.eVar3 || s.eVar3 == "") {
s.eVar3 = getLoginStatus();
}
s.eVar19 = omnitureArray[13];
s.eVar22 = omnitureArray[11];
if (typeof pageLocale != "undefined"){
	s.eVar22 = pageLocale;
	s.eVar22 = s.eVar22.toLowerCase();
	s.prop2 = s.eVar22.toLowerCase();
}
s.eVar23 = omnitureArray[19];
s.eVar25 = omnitureArray[17];
s.eVar26 = omnitureArray[15];
s.eVar27 = omnitureArray[5];
s.eVar28 = omnitureArray[7];
s.eVar29 = omnitureArray[9];


if (document.question_form) {
  s.eVar4 = document.question_form.question_box.value;
  s.eVar4 = s.eVar4.toLowerCase();
}

if (document.getElementById("search_keyword") != null) {
    s.eVar4 = document.getElementById("search_keyword").value;
    s.eVar4 = s.eVar4.toLowerCase();
}


if (checkRegEvent() == 1) {
    s.events = "event1";
} else if (checkLoginEvent() == 1) {
    s.events = "event2";
}

/* */


/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code=s.t();if(s_code)document.write(s_code)
}

function checkLoginEvent()
{
  var omni_login_value = getCookie("omni_login");
  if (omni_login_value) {
    deleteCookie( "omni_login", "/", "redhat.com" ) ;
    return(1);
  }

  return(0);
}

function checkRegEvent()
{
  var omni_reg_value;


  omni_reg_value = getCookie("omni_reg");
  if (omni_reg_value == 1) {
      deleteCookie( "omni_reg", "/", "redhat.com" ) ;
      deleteCookie( "omni_login", "/", "redhat.com" ) ;
      return(1);
  }
  return(0);
}

function getLoginStatus()
{
  var free_status;
  var paid_status;
  var rh_auth_value;
  var omni_login_value;
  var return_status;

  return_status = "Browser"
  rh_auth_value = getCookie("rh_auth_token");

  rh_sso_value = getCookie("rh_sso");
  rh_user_value = getCookie("rh_user");

  if (rh_sso_value == "") {
    return("Browser")
  }

  if (rh_user_value) {
    var rh_user_array = rh_user_value.split("|");
    var login_status = rh_user_array[2];
  }

  if (login_status == "member") {
    return("Logged in");
  }
  if (login_status == "customer") {
    return("Customer");
  }

  return (return_status);
}


function getCookie(name)
{
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);

  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    
  }
  var end = document.cookie.indexOf(";", begin);
  if (end == -1) {
    end = dc.length;
  }
  return unescape(dc.substring(begin + prefix.length, end));
}

function setCookie( name, value, expires, path, domain, secure ) 
{
// set time, it's in milliseconds
var today = new Date();
today.setTime( today.getTime() );

/*
if the expires variable is set, make the correct 
expires time, the current script below will set 
it for x number of days, to make it for hours, 
delete * 24, for minutes, delete * 60 * 24
*/
if ( expires )
{
  expires = expires * 1000 * 60 * 60;
}

var expires_date = new Date( today.getTime() + (expires) );

document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
( ( path ) ? ";path=" + path : "" ) + 
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );
}
			
// this deletes the cookie when called
function deleteCookie( name, path, domain ) {
if ( getCookie( name ) ) document.cookie = name + "=" +
  ( ( path ) ? ";path=" + path : "") +
  ( ( domain ) ? ";domain=" + domain : "" ) +
";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}








