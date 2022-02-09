<?php

    require "config.php";
    $GLOBALS_INI = getGlobalsINI();

    require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"]  . "/" . "database.php";
    
    require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"]  . "/" . "securite.php";
    $VARS_HTML = getFormsAndSessionsVariables();

    $numero_connexion = connectBDD($GLOBALS_INI["DB_HOST"], $GLOBALS_INI["DB_NAME"], $GLOBALS_INI["DB_LOGIN"], $GLOBALS_INI["DB_PSW"]);

    $monPHP= $VARS_HTML["page"];
	require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"] . $monPHP . ".php";
	$resultat= getAllResultats($numero_connexion, $GLOBALS_INI, $VARS_HTML);
	
	disconnectBDD($numero_connexion);
	
	if ((isset($VARS_HTML["bJSON"])) && ($VARS_HTML["bJSON"] == 1))	{
		require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_FILES"] . "/" . $monPHP . ".html";
	}  else  {
		require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_FILES"] . "/route.html";
	}
	

?>