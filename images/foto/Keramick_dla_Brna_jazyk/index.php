<?php
error_reporting(E_ALL ^ E_NOTICE);

#############################################################################################################
// manage language
#############################################################################################################

function getLang() {
	$lang = explode(",",$_SERVER['HTTP_ACCEPT_LANGUAGE']);
 	$lang = strtolower(substr(chop($lang[0]),0,2));
  
  	return($lang);
}

$lang = getLang();

if($lang == 'fr')
{
	$MetaKeywords 	= "album photo, album photo en ligne, galerie photos, online photo album, online photo gallery, image hosting,  " ;
	
	$L_PROTECTED_GALLERY = 'GALERIE PROTEGEE';
	$L_MSG_ERROR_LOGIN 	= 'Erreur, authentification incorrecte!';
	$L_NAME_LOGIN 		= 'Nom';
	$L_PWD_LOGIN 		= 'Mot de passe';
	$B_SEND_LOGIN 		= 'Envoyer';
	$B_CANCEL_LOGIN 	= 'Annuler';
}
else
{
	$MetaKeywords 	= "Photo sharing, online photo album, online photo gallery, image hosting" ;
	
	$L_PROTECTED_GALLERY = 'PROTECTED GALLERY';
	$L_MSG_ERROR_LOGIN 	= 'Error, bad authentification!';
	$L_NAME_LOGIN 		= 'Name';
	$L_PWD_LOGIN 		= 'Password';
	$B_SEND_LOGIN 		= 'Send';
	$B_CANCEL_LOGIN 	= 'Cancel';
}


#############################################################################################################
// check the security
#############################################################################################################

$file_pwd = '.htpasswd';

if( file_exists($file_pwd) ) $security = TRUE;


if( $security == TRUE )
{
	//read login/password file
	$lines = file($file_pwd);
	
	//add users in an array
	$tab_users = array();
	
	for($i = 0; $i < count($lines); $i++)
	{		
		$tab_users[$i] = explode('|', $lines[$i]);
	}

	//get user infos
	$user_name = @trim(htmlspecialchars($_POST['name']));
	$user_pwd  = @trim(htmlspecialchars($_POST['pwd']));
	
	//check if user exist
	if( isset($user_name) && isset($user_pwd) )
	{
		for($i = 0; $i < count($lines); $i++)
		{			
			//test name
			if( $user_name == trim(htmlspecialchars($tab_users[$i][0])) ) 
			{				
				//test password
				if( $user_pwd == trim(htmlspecialchars($tab_users[$i][1])) )
				{
					$security = FALSE;
					break;
				}
			}
		}
	}
	
	if( $user_name!='' || $user_pwd!='' && $security == TRUE)
	{
		$msg_error = $L_MSG_ERROR_LOGIN;
	}
}
?>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<meta http-equiv="Pragma" content="no-cache">
<!-- No cache for Navigator -->

<meta http-equiv="expires" content="0">
<!-- No cache for IE -->


<title>Práce dìtí - PhotoOnWeb by VSO</title>
<meta name="description" content=" photo gallery with photoonweb">
<meta name="Keywords" content="<?php echo $MetaKeywords;?>" />

<!-- Download PhotoOnWeb by VSO at www.airtightinteractive.com/PhotoOnWeb by VSO -->
<script type="text/javascript" src="flashobject.js"></script>

<SCRIPT LANGUAGE="JavaScript">
//Maximize the browser
window.moveTo(0,0);
if (document.getElementById || document.all) 
{
  window.resizeTo(screen.availWidth, screen.availHeight);
}
else if (document.layers) 
{
  if (window.outerHeight<screen.availHeight || window.outerWidth<screen.availWidth)
  {
    window.outerHeight = screen.availHeight;
    window.outerWidth = screen.availWidth;
  }
}
</SCRIPT>

<style type="text/css">	
/* Code original de SV */
	/* hide from ie on mac \*/				
	H1 {	padding:0; margin:0}
	html {	height: 100%; overflow: hidden;	}
	html, body, table {height: 100%}
	/* end hide */
/* styles généraux */
	body {
		height: 100%; margin: 0; padding: 0;/* Dimensions et marges de la page */
		background-color: #000;				/* Fond de la page */
		color:#FFFFFF;					/* Couleur des textes */
		font-family:Arial, Helvetica, sans-serif;/* Famille de polices des textes */
		font-size:10px; 					/* Taille des textes */
	}	
	H1 {font-size:18px}						/* Aspect du titre de la page */
	p{font-size:12px}						/* Aspect de la balise <P> */
	a {color: #FFFFFF}					/* Aspect des liens */
/* Zones de la page */
	#content {height:100%; width:99%} 		/* Dimensions de la table principale */
	#header{border-bottom: 1px dotted #333} /* Aspect de la cellule d'entête */
	#flashcontent {height: 100%;} 			/* Dimensions de la cellule contenant le flash */
	#footer{border-top: 1px dotted #333}	/* Aspect de la cellule de pied */	
</style>
</head>
<body>

<?php
if( $security == TRUE )	include("graphics/login/login.form.inc.php");
else {
?>

<table border="0" align="center" cellpadding="5" cellspacing="0" id="content">
  <tr>
    <td width="50%" height="20" id="header">
		<h1>Práce dìtí</h1>
   		<p></p>	
	</td>
    <td width="50%" id="header" align="right">
	<script type="text/javascript"><!--
google_ad_client = "pub-3900646595892164";
google_alternate_ad_url = "http://from.photoonweb.com/nongoogleads.php";
google_ad_width = 468;
google_ad_height = 60;
google_ad_format = "468x60_as";
google_ad_type = "text_image";
//2007-03-21: PhotoOnWeb albums
google_ad_channel = "7942566245";
google_color_border = "000000";
google_color_bg = "000000";
google_color_link = "FFFFFF";
google_color_text = "CCCCCC";
google_color_url = "999999";
//-->
</script>
<script type="text/javascript"
  src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>&nbsp;</td>
  </tr>
  <tr>
    <td height="100%" colspan="2" id="flashcontent">
	SimpleViewer requires Macromedia Flash. <a href="http://www.macromedia.com/go/getflashplayer/" class="style1">Get Macromedia Flash</span></a> 
	If you have Flash installed,<a href="index.php?detectflash=false">Click to view gallery</a>
	
	<script type="text/javascript">
	var fo = new FlashObject("viewer.swf", "viewer", "100%", "100%", "6", "");// "fichier", "nom", "hauteur", "largeur", "version", "couleur fond"
	fo.addVariable("preloaderColor", "0xFFFFFF");	/* couleur du texte du préchargement */	
	fo.addParam("quality", "best");
	fo.addParam("wmode", "transparent");/* affiche un fond transparent au flash */
	fo.write("flashcontent");	
	</script>
		
	<noscript>
	<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="100%" height="100%" wmode="transparent">
	<param name="movie" value="viewer.swf">
	<param name="quality" value="best">
	<param name="wmode" value="transparent">
	<embed src="viewer.swf" quality="best" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>
	</object>
	</noscript>
	
	</td>
  </tr>
  <tr>
    <td height="20" colspan="2" valign="bottom" id="footer">
	<a href="http://www.photoonweb.com" target="_blank"><img src="http://from.photoonweb.com/tick.php" align="right" border="0"><img src="graphics/powered_by.gif" alt="Powered by PhotoOnWeb" width="186" height="24" border="0" align="right" /></a>
	<p></p></td>
  </tr>
</table>

<?php
} //end: else
?>

</body>
</html>