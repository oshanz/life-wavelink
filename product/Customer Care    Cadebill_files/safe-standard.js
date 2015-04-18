var psSdLdsid = "ZXYfR1BJuH9P";
// safe-standard@gecko.js

var psSdLdiso;
try {
	psSdLdiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psSdLdwid != null);
} catch(e) {
	psSdLdiso = false;
}
if (psSdLdiso) {
	window.psSdLdwid = opener.psSdLdwid + 1;
	psSdLdsid = psSdLdsid + "_" + window.psSdLdwid;
} else {
	window.psSdLdwid = 1;
}
function psSdLdn() {
	return (new Date()).getTime();
}
var psSdLds = psSdLdn();
function psSdLdst(f, t) {
	if ((psSdLdn() - psSdLds) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psSdLdol = false;
function psSdLdow() {
	if (psSdLdol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psSdLdn();
		var url = "http://messenger.providesupport.com/messenger/mcl.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var psSdLdil;
var psSdLdit;
function psSdLdpi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != psSdLdil) || (it != psSdLdit)) {
		psSdLdil = il;
		psSdLdit = it;
		var d = document.getElementById('ciSdLd');
		if (d != null) {
			d.style.left  = Math.round(psSdLdil) + "px";
			d.style.top  = Math.round(psSdLdit) + "px";
		}
	}
	setTimeout("psSdLdpi()", 100);
}
var psSdLdlc = 0;
function psSdLdsi(t) {
	window.onscroll = psSdLdpi;
	window.onresize = psSdLdpi;
	psSdLdpi();
	psSdLdlc = 0;
	var url = "https://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/mcl.html?ps_t=" + psSdLdn() + "";
	var d = document.getElementById('ciSdLd');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="psSdLdld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function psSdLdld() {
	if (psSdLdlc == 1) {
		var d = document.getElementById('ciSdLd');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psSdLdlc++;
}
if (false) {
	psSdLdsi(1);
}
var psSdLdd = document.getElementById('scSdLd');
if (psSdLdd != null) {
	if (psSdLdol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = 'alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="psSdLdow(); return false;"><img name="psSdLdimage" src="https://image.providesupport.com/image/mcl/offline-38475643.gif" width="185" height="58" style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="http://www.providesupport.com/pb/mcl" target="_blank"><img src="https://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((185 >= 140) || (185 >= 58)) {
				psSdLdd.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				psSdLdd.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			psSdLdd.innerHTML = '<a href="#" onclick="psSdLdow(); return false;"><img name="psSdLdimage" src="https://image.providesupport.com/image/mcl/offline-38475643.gif" width="185" height="58" border="0"'+tt+'></a>';
		}
	} else {
		psSdLdd.innerHTML = '';
	}
}
var psSdLdop = false;
function psSdLdco() {
	var w1 = psSdLdci.width - 1;
	psSdLdol = (w1 & 1) != 0;
	psSdLdsb(psSdLdol ? "https://image.providesupport.com/image/mcl/online-539667612.gif" : "https://image.providesupport.com/image/mcl/offline-38475643.gif");
	psSdLdscf((w1 & 2) != 0);
	var h = psSdLdci.height;

	if (h == 1) {
		psSdLdop = false;

	// manual invitation
	} else if ((h == 2) && (!psSdLdop)) {
		psSdLdop = true;
		psSdLdsi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psSdLdop)) {
		psSdLdop = true;
		psSdLdsi(2);
		//alert("Auto invitation in standard code");
	}
}
var psSdLdci = new Image();
psSdLdci.onload = psSdLdco;
var psSdLdpm = false;
var psSdLdcp = psSdLdpm ? 30 : 60;
var psSdLdct = null;
function psSdLdscf(p) {
	if (psSdLdpm != p) {
		psSdLdpm = p;
		psSdLdcp = psSdLdpm ? 30 : 60;
		if (psSdLdct != null) {
			clearTimeout(psSdLdct);
			psSdLdct = null;
		}
		psSdLdct = psSdLdst("psSdLdrc()", psSdLdcp);
	}
}
function psSdLdrc() {
	psSdLdct = psSdLdst("psSdLdrc()", psSdLdcp);
	try {
		psSdLdci.src = "https://image.providesupport.com/cmd/mcl?" + "ps_t=" + psSdLdn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psSdLdsid + "" + "";
	} catch(e) {
	}
}
psSdLdrc();
var psSdLdcb = "https://image.providesupport.com/image/mcl/offline-38475643.gif";
function psSdLdsb(b) {
	if (psSdLdcb != b) {
		var i = document.images['psSdLdimage'];
		if (i != null) {
			i.src = b;
		}
		psSdLdcb = b;
	}
}

