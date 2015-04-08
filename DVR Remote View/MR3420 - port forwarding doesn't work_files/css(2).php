@charset "UTF-8";
/* CSS Document */

/**
* Custom CSS by Forumthemes.com
*/
#sidebar_container .block h3, #sidebar_container .block h3 a:link, #sidebar_container .block h3 a:visited, #sidebar_container .block .blocktitle {
color:#fff;
}
#sidebar_container .block h3 a:hover {
color:#fff;
text-decoration:underline;
}
.cms_widget h3 {
color:#fff;
}

/************************************************************************/
*{ -moz-box-shadow: none !important; -webkit-box-shadow: none !important; }

#forums *, #wgo *, #forumbits * {
	-moz-border-radius: 0 !important;
	-webkit-border-radius: 0 !important;
}
#fb_headerbox {
	padding-right:5px;
}
.wgo_block {
	margin:0;
}
.navbar {
	-moz-border-radius-bottomleft: 0 !important;
	-moz-border-radius-bottomright: 0 !important;
	-webkit-border-bottom-left-radius: 0 !important;
	-webkit-border-bottom-right-radius: 0 !important;
}

.announcements {
	margin-top:1px;
}
.highlight {
	background-image:none;
}
.forumbit_nopost.row1 .forumrow, .forumbit_post.row1 .forumrow {
	background: #ffffff none repeat-x left bottom;
	border:1px solid #e1e1e1;
	border-top:1px solid #fff;
}
.forumbit_nopost.row2 .forumbit_nopost .forumrow, .forumbit_post.row2 .forumrow {
	background: #f1ece1;
	border:1px solid #e1e1e1;
	border-top:1px solid #fff;
}

.threadbit.row1 .nonsticky{
	background: #fefefe url(images/styles/influx/style/altBG.gif) repeat-x left bottom;
}
.threadbit.row2 .nonsticky{
	background: #f1ece1;
}
.threadbit .sticky .alt {
	background:#f6f2a9;
}
.threadbit.row1 .nonsticky .alt {
	background:#f4eee0;
}
.threadbit.row2 .nonsticky .alt {
	background:#ede7da;
}
.navlinksBox {
	background: #f6f6f6;
	border:1px solid #e1e1e1;
	text-align: center;
	color: #64666a;
	font-size: ;
        font-weight:700;
        margin-top: 20px;
        margin-bottom: 20px;
width:100%;
clear:both;
}
.navlinksBoxWrap {
	padding: 10px 0;
	border:1px solid #fff;
}

.forumrow .forumtitle a:link, .forumrow .forumtitle a:visited {
	color:#35393f;
	/* font:13px Georgia, "Times New Roman", Times, serif; */
        font:13px Arial,Helvetica,sans-serif;
}
.forumrow .forumtitle a:hover{
	color:#fe0030;
}
.forumrow .lastposttitle a:link, .forumrow .lastposttitle a:visited {
	color:#fe0030;
	font-weight:700;
}
.forumrow .lastposttitle a:hover{
	color:#35393f;
}

.bodyWrap {
	background:#fff;
	margin:0 2px;	
}
.body_wrapper {
	padding:0;
	margin:0;
	clear:both;
}
.above_body, #posts {
	padding:0;
	margin:0;
}
.threadbit .sticky, .threadbit .nonthread, .threadbit .nonsticky, .threadbit .deleted, .threadbit .discussionrow, .threadbit .ignored {
	border-top:0;
}
.loginLeft {
float:left;
}
#regNow {
float:right;
padding-top:4px;
}
#regNow img {
vertical-align:middle;
}

/* Header
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
.doc_header {
	height:120px;
	position:relative;
}
#header {
	position:relative;
}
#logo {
	float:left;
}
#searchBox {
	position:absolute;
	right:0;
	top:57px;
}
#searchBox form {
	padding:0;
	margin:0;
}
#searchBox input {
	float:left;
}
.searchWrap {
	background: url(images/styles/influx/style/searchinput.gif) no-repeat top left;
	width:179px;
	height:33px;
	float:left;
}
.searchinput {
	background:transparent;
	border:0;
	color: #333;
	padding:6px 0 5px 0;
	font-size:8pt;
	width:166px; 
	margin:5px 5px 0 8px;
	
}
.searchButton {
	float:left;
}

/* Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
#contentMain {
	background:#fff url(images/styles/influx/style/contentBG.gif) no-repeat top left;
	padding: 16px 16px 0 16px;
}

/* Footer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
#footerMain {
	padding:8px 0;
	color:#fff;
	line-height:16px;
	font-size:8pt;
}
#footerMain a:link, #footerMain a:visited {
	color:#fe0030;
	font-weight:700;
}
#footerMain a:hover {
	color:#fff;
}
.copyright {
	color:#a8a8a8;
}
.copyWrap {
	float:left;
}
.footerNav {
	float:right;
	padding:0 0 8px 0;
	text-align:right;
}
.footerNav ul {
	list-style:none;
	padding:0 0 4px 0;
	margin:0;
}
.footerNav li {
	display:inline;
	padding:0 5px;
}
.footerMain td {
	padding:6px 0;
}
#footerMain .footerNav a:link, #footerMain .footerNav a:visited {
	color:#fff;
}
#footerMain .footerNav a:hover {
	color:#fe0030;
}



/* Navbar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
.navbar {
	background:url(images/styles/influx/style/navBG.gif) repeat-x top left;
	position:relative;
	/* height:42px; */
	height:40px;
	font:   11px Arial,Helvetica,sans-serif;
	color:#fff;
	width:100%;
	padding:0;
	margin:0;
}
.navLeft {
	background:url(images/styles/influx/style/navLeft.gif) no-repeat top left;
	/* height:42px; */
	height:40px;
}
.navRight {
	background:url(images/styles/influx/style/navRight.gif) no-repeat top right;
	/* height:42px; */
	height:40px;
	padding:0 2px;
}
#navtabs li.selected ul.floatcontainer {
	margin-top:2px;
}
#navtabs li.selected ul.floatcontainer a:link, #navtabs li.selected ul.floatcontainer a:visited {
	line-height:27px;
	height:27px;
}
.navbar a { color:#fff; }
.navbar a:hover { color:#fff; }

.navtabs ul li:first-child {
	text-indent: 11px;
}
.navtabs {
	padding-left:0;
}
.navtabs ul {
	position:absolute;
	top:40px;
	left:0px;
	width:100%;
/* This is to fix RTL menu issue under Opera */
        direction:ltr;
}
.navtabs li {
	float:left;
	padding-right:2px;
	background:url(images/styles/influx/style/navSplit.gif) no-repeat top right;
}
.navtabs li li {
	background:none;
}

.navtabs ul li {
	border-right: 0;
	position: relative;
}
.navtabs li a {
	height:40px;
	line-height:40px;
}
.navtabs li a.navtab {
	display:block;
	min-width:60px;
	width:auto !important;
	width:60px;
	_min-width:75px;
	_width:auto !important;
	_width:75px;
	text-align:center;
	color:#fff;
	font-size:14px;
	text-decoration:none;
	line-height:40px;
	height:40px;
	padding:0 10px;
	font-weight:700;
}
.navtabs li a.navtab:hover {
	background:url(images/styles/influx/style/navHover.gif) no-repeat top center;
	color:#fff;
}
.navtabs li.selected {
	color:#fff;
	height:42px;
}
.navtabs li.selected li {
	padding:0 6px;
}
.navtabs li.selected li li {
	padding:0 2px;
}
.navtabs li.selected {
	color:#fff;
	height:40px;
}
.navtabs li.selected a.navtab {
	/*background:url(images/styles/influx/style/navHover.gif) no-repeat top center;*/
	color:#fff;
	position:relative;
	top:-px;
	padding-top:px;
	z-index:10;
}
.navtabs li.selected li a,
.navbar_advanced_search li a {
	text-decoration:none;
	font:   11px Arial,Helvetica,sans-serif;
	line-height:27px;
}
.navtabs li.selected li a {
	color:#3f3f3f;
	font-weight:400;
	padding:2px 5px;
}

.navbar_advanced_search li {
	height: 27px;
	display:block;
	clear:both;
}

.navbar_advanced_search li a {
	color:#fff;
}

.navbar_advanced_search li a:hover {
	color:#fff;
	text-decoration:none;
}

.navtabs li.selected li a:hover {
	color:#fe0030;
	text-decoration:none;
}

.navtabs li.selected .popupbody li > a {
	padding:0px 10px;
	text-indent: 0;
	color: rgb(0, 0, 0);
}

.navtabs li.selected li a.popupctrl {
	-moz-border-radius:3px;
	-webkit-border-radius:3px;	
	border:solid 1px transparent;
	_border: none;
	background:transparent url(images/styles/influx/misc/arrow.png) no-repeat right center;
	padding-right:15px;
        _background-image:url('images/styles/influx/misc/arrow.gif');
	color:#3f3f3f;
}

.navtabs li.selected li:hover a.popupctrl.active,
.navtabs li.selected li a.popupctrl.active,
.navtabs li.selected li a:hover.popupctrl {
	color:#3f3f3f;
}

/* Breadcrumb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
.breadcrumb {
	background:#fff url(images/styles/influx/style/bcBG.gif) repeat-x bottom left;
	color:#64666a;
	border: 1px solid #e2e2e2;
}
.breadcrumbWrap {
	padding:3px 5px;
	border:1px solid #fff;
}
.breadcrumb .navbit > a, .breadcrumb .lastnavbit span {
	border:1px solid transparent;
}
.breadcrumb .navbit a:link, .breadcrumb .navbit a:visited {
	color:#737373;
	font-weight:400;
}
.breadcrumb .navbit a:hover {
	color:#fe0030;
}

/*************************************************/
/* SIDEBAR*/

#sidebar_button {
	display:block;
	margin-top: 40px;
	float:right;
	margin-right:-21px;
	_margin: 40px 0 0 0;
	_display: inline-block;
}

#sidebar_container.sidebarleft #sidebar_button {
	float:left;
	margin-left:-21px;
}

/*************************************************/
/* TCAT BAR */
.tcat {
	background:#0d0e10 url(images/styles/influx/style/tcatBG.gif) repeat-x top left;

	float: left;
	width: 100%;
	color: #fff;
	height:35px;
	clear:both;
/*	margin-top: 8px; */
	border:0;
	font:   normal 11px Arial,Helvetica,sans-serif;
	z-index:3000;
}
.tcatLeft {
	background:url(images/styles/influx/style/tcatLeft.gif) no-repeat top left;
	height:35px;
}
.tcatRight {
	background:url(images/styles/influx/style/tcatRight.gif) no-repeat top right;
	height:35px;
}
.tcat .forumtitle {
	font-weight:700;

}
.tcat .tcatDesc {
	font-size:11px;
	font-weight:400;
}
.tcat h2 {
	padding: 0 0 0 16px;
/*	font: bold 9pt Georgia, "Times New Roman", Times, serif; */
	font: bold 9pt Arial, Helvetica, sans-serif;
	line-height: 35px;
	float:left;
	font-weight:700;
}
.tcat a:link, .tcat a:visited {
	color:#fff;
}
.tcat a:hover {

}
.tcat .tcatCollapse {
	float:right;
	position:absolute;
	top:11px;
}
/* tcat Thread List Controls - Forumdisplay */
.tcat_threadlist_controls {
	float:right;
	padding-right:8px;
}
.forumdisplaypopups, #forumdisplaypopups {
	clear:both;
}
.tcat_threadlist_controls h6 {
	height:35px;
	line-height:35px;
	padding:0;
	display:block;
	font-size:10pt;
}
.forumdisplaypopups a.popupctrl, .forumdisplaypopups.popupgroup .popupmenu a.popupctrl,
.postlist_popups h6 a.popupctrl, .postlist_popups.popupgroup .popupmenu h6 a.popupctrl {
	background:none;
	display:block;
	_display:35px;
	height:35px;
	line-height:35px;
/*	font-family:Georgia, "Times New Roman", Times, serif; */
	font-family:Arial, Helvetica, sans-serif;
	font-weight:700;
	font-size:11px;
	color:#fff;
	padding:0 10px;
	border: 0;
	float: left;
	clear: right;
	z-index:3000;

}
.forumdisplaypopups a:hover.popupctrl, .forumdisplaypopups.popupgroup .popupmenu a:hover.popupctrl,
.postlist_popups h6 a:hover.popupctrl, .postlist_popups.popupgroup .popupmenu h6 a:hover.popupctrl {
	border: 0;
	color:#fff;
	text-decoration:underline;
}
#postlist_popups a, .postlist_popups a {
	color: #fff;
	_border: none;
}

#postlist_popups a:hover, .postlist_popups a:hover {
	color: #fff;
	text-decoration:underline;
}
#postlist_popups .popupmenu:hover a.popupctrl, #postlist_popups .popupmenu:hover .popupctrl a.popupctrl.active, .postlist_popups .popupmenu:hover a.popupctrl, .postlist_popups .popupmenu:hover .popupctrl a.popupctrl.active {
	border: 0;
}

#postlist_popups ul li {
	color: #4e4e4e;
}
#postlist_popups ul li a, .postlist_popups ul li a {
	color: #4e4e4e;
	_border: none;
}

#postlist_popups ul li a:hover, .postlist_popups ul li a:hover {
	color: #4e4e4e;
	text-decoration:underline;
}

#forumdisplaypopups ul a, .forumdisplaypopups ul a {
	color: #3e3e3e;
}

/*************************************************/
/* THEAD BAR*/

.thead_bar .theadrow {
	background:#fff url(images/styles/influx/style/theadBG.gif) repeat-x bottom left;
	display:block;
	width: 100%;
	float: left;
	position:relative;
	line-height:22px;
	font-size:11px;
	border-left:1px solid #e2e2e2;
	border-right:1px solid #e2e2e2;
	color:#3f3f3f;
}
.thead_bar .padding {
	padding-left:12px;
}
.thead_bar .forumhead span.forumlastpost {
	width: 23%;
}
.thead_bar .theadrow .forumdata  {
	float: left;
}
.thead_bar {
	float: left;
	position:relative;
	width: 100%;
	display:block;
}
.thead_bar .forumhead .forumtitle {
	width: 76%;
}
.thead_bar .foruminfo {
	width: 53%;
	min-width: 30%;
	float: left;
	clear: right;
}
.thead_bar .foruminfo .forumdata {
	padding: 0;
	width: 100%;
	_width: 99%;
}
.thead_bar .forumstats, .thead_bar .forumstats_2 {
	display: block;
	float: left;
	clear: right;
	width: 16%;
	margin-right: 2%;
}
.thead_bar .foruminfo .forumdata .datacontainer {
	float: left;
	width: 46%;
	padding:0;
	padding-left: 68px;
}
.thead_bar .forumactionlinks {
	width: 5%;
	display:block;
	float:left;
	clear:right;
}

.thead_bar .forumactionlink {
/* values based on icon size */
	display:block;
	width:18px;

	overflow:hidden;
	float: right;
	clear: left;
	background:transparent none no-repeat;
	position: relative;

}
.thead_bar .forumstats li, .thead_bar .forumstats_2 li{
	font-size: 11pxpx;
	text-align: right;
	padding-right: 20px;
	display:block;
}
.thead_bar .forumlastpost {
	display:block;
	float: left;
	clear: right;
}
.thead_bar .theadrow .forumlastpost {
	width: 22%;
}
.forumbitBody {
	padding-right:2px;
	z-index:1;
	clear:both;
}
#post {
	z-index:1;
}

/*threadlisthead and posthead*/
.threadlist {
margin-top:0;
}
#threadlist .threadlisthead {
	background:#fff url(images/styles/influx/style/theadBG.gif) repeat-x bottom left;
	display:block;
	width: 100%;
	float: left;
	position:relative;
	font-size:11px;
	border:0;
	border-left:1px solid #e2e2e2;
	border-right:1px solid #e2e2e2;
	color:#3f3f3f;
	font-weight:400;
	margin: 0;
}

#threadlist .threadlisthead a, #threadlist .threadlisthead a:hover {
	color: #41505c;
}
.posthead {
	background:#fff url(images/styles/influx/style/theadBG.gif) repeat-x bottom left;
	clear:both;
	display:block;
	float: left;
	width: 100%;
	color:#3f3f3f;
	margin: -1px -1px 0;
	font:   normal 12px Arial,Helvetica,sans-serif;
	padding: 4px 0;
	border:0;
	border-left:1px solid #e2e2e2;
	border-right:1px solid #e2e2e2;
	font-size:11px;
	font-weight:400;
}
#posts .posthead a:link, #posts .posthead a:visited {
	color:#3f3f3f;
}
#posts .posthead a:hover {
	color:#3f3f3f;
}
#posts .posthead .time, #posts .nodecontrols {
	color:#3f3f3f;
}
.wgo_subblock{
	position:relative;
}
.wgo_subblock .whatspace {
	padding-left:55px;
}
.wgo_subblock .whaticon {
	position:absolute;
	top:25%;
	left:10px;
}
#postlist .userinfo {
	padding-top:10px;
}
.username_container {
	padding:2px 0;
	text-align:center;
}
.username_container .username strong {
	font-size: 16pt;
	font-weight:400;
}
.usertitle, .rank {
	text-align:center;
}
.usercenter {
	padding-top:5px;
	text-align:center;
}
.post_field {
	background: #fff url(images/styles/influx/style/postfieldBG.gif) repeat-x bottom left;
	color: #2a2a2a;
	border: 1px solid #dfdfdf;
	padding: 3px 3px 3px 10px;
	margin-top: 2px;
	text-align:left;
}
.post_field strong {
	color: #ab1000;
}
.post_field dt {
	color: #ab1000;
	font-weight:700;
}
.postbit, .postbitlegacy, .eventbit {
	margin-bottom: 0;
}
.bbcode_container .bbcode_quote_container {
	background:none;
}

.forum_info_block, .forum_info_form {
	background:none;
}
.postfoot {
	border: 1px solid #e2e2e2;
	border-bottom:0;
	border-right:0;
}
.postfootWrap {
	border-right: 1px solid #e2e2e2;
}

#thread_info a.collapse {
	position: absolute;
	top: 9px;
}

/* Bottom Bar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
.bottomBar {
	padding:0;
	margin:0;
	font-size:0;
}

/* #notices .restore {
	border:1px solid #e6b868;
	padding:8px;
}*/

h1.header, h2.header { 
	text-transform:capitalize; 
}


/* Advanced Search
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
#searchtypeswitcher {
	border-bottom:4px solid #262626;
}
#searchtypeswitcher li a {
	background-color:#474747;
	color:#FFF;
}

#searchtypeswitcher li.selected a {
	background-color:#262626;
}

#searchtypeswitcher li a:hover {
	background-color:#262626;
}
.searchlisthead span, .searchlisthead span a, .mainsearchstats {
	color:#FFF;
}

#sidebar_container .blogusermenu h5,#sidebar_container .blogusermenu h4, #sidebar_container h5.blocksubhead {
	color:#fff;
}
#sidebar_container .advanced {
	border:none;
}
#sidebar_container .advanced a:link, #sidebar_container .advanced a:visited {
	color:#fff;
}
#blog_user_sidebar .blocksubhead, #blog_user_sidebar .blocksubhead a:link, #blog_user_sidebar .blocksubhead a:visited {
	color:#fff;
}
.postbitlegacy dl.userinfo_extra dd, .postbitlegacy dl.user_rep dd{
	background:url(images/styles/influx/style/bulletPostbit.gif) no-repeat top left;
	border-bottom:1px solid #e9e9e9;
	padding: 3px 0;
	margin-bottom:3px;
	color:#5f5a46;
}
.postbitlegacy dl.userinfo_extra dt, .postbitlegacy dl.user_rep dt {
	padding: 3px 0 3px 12px;
	color:#a2a091;
}

.postbitlegacy dl.userinfo_extra dd, .postbitlegacy dl.userinfo_extra dd a, .postbitlegacy dl.user_rep dd {

}
#post .userinfo_extra dt, #post .userinfo_extra dd {
background:#000;
border-bottom:1px solid #e9e9e9;
}
/* .restore, li.restore, ol li.restore {
	font-size:11px;
	line-height:16px;
	color:#69675d;
} */

.restore, li.restore, ol li.restore {
	font-size:12px;
	line-height:16px;
	color:#009CE0;
}

.navlinks {
	background:  none   ;
	border: 1px solid #e2e2e2;
	border-top:0;
	padding: 10px 0;
	text-align: center;
	color: #64666a;
	font-size: ;
        font-weight:700;
        margin-top: 0;
        margin-bottom: 20px;
width:100%;
clear:both;
}


.loginBox {

}
.loginBox ul {
	list-style:none;
	padding:0;
	margin:0;
}
.loginBox li {
	float:left;
	margin:0;
	padding:0 3px;
}
.loginTab a {
	float:left;
	margin:0 0 0 3px;
	padding:0 0 0 9px;
	text-decoration:none;
}
.loginTab a span {
	float:left;
	display:block;
	padding:0 9px 0 0px;
	line-height:31px;
	color:#fff;
	font-weight:700;
}
.loginTab a:hover {
	text-decoration:underline;
	color:#fff;
}
.loginInput {
	background:#f8f8f8 url(images/styles/influx/style/loginBG.gif) repeat-x bottom left;
	border:1px solid #282828;
	width:107px;
	height:18px;
	line-height:18px;
	color:#333;
	font-size:11px;
	padding:0 3px;
	margin:0;
	float:left;
}
.rememberMe {
	
}
.memberBox .rememberMe {
	font-size: 11px;
}
.memberBox .rememberMe input {
	vertical-align: baseline;
}
.cb_cookieuser_navbar{
	position: relative;
	top: 3px;
}

/*************************************************/
/* TOP MEMBER BAR*/
#toplinks, .toplinks {
	text-align:left;
	line-height:20px;
	padding-top:8px;
	right:0;
}
.memberBox.toplinks ul.nouser li a{
	background:#242424;
}
.memberBox.toplinks ul.nouser li a:hover {
	background:#242424;
}
#toplinks .isuser {
	float:left;
}
#toplinks .welcomelink {
	font-weight:700;
}
.toplinks ul.isuser .notifications .popupbody {
	background: #FFFFFF;
	border: 1px solid #242424; /* makes it look consistent with the popup background */
}
.toplinks .notifications a.popupctrl {	
	-moz-border-radius: 5px !important;
	-webkit-border-radius: 5px !important;
/*	background-color: #565656;  adjusted*/
	background-color: rgba(86, 86, 86, 0.1);
}

.toplinks .notifications a.popupctrl:hover, .toplinks .nonotifications a.popupctrl:hover, .toplinks .nonotifications a.popupctrl.active, .toplinks ul.isuser li a:hover {
	-moz-border-radius: 5px !important;
	-webkit-border-radius: 5px !important;
/*	background-color: #242424;     adjusted*/
	background-color: rgba(86, 86, 86, 0.1);
}

.memberBox .welcomeUser {
	font-weight:700;
	font-size:11px;
	float:left;
}
.memberBox .toplinks {
	padding:2px 0 0 3px;
}
.memberBox .toplinks {
	padding:2px 0 0 3px;
}

.forumbit_post .forumstats li {
font-size:11px;
}

.forumbit_nopost .forumhead span.forumlastpost, .forumbit_post .forumhead span.forumlastpost {
	width: 23%;
}
.forumbit_post .foruminfo {
	width: 53%;
}
.forumbit_post .forumstats, .forumbit_post .forumstats_2 {
	width: 14%;
} 