<?php

    $version = "crudAJAX";

    require "config.php";
    $GLOBALS_INI = getGlobalsINI();

    require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"] .  $version . "/" . "database.php";
    
    require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"] .  $version . "/" . "securite.php";
    $VARS_HTML = getFormsAndSessionsVariables();

    $numero_connexion = connectBDD($GLOBALS_INI["DB_HOST"], $GLOBALS_INI["DB_NAME"], $GLOBALS_INI["DB_LOGIN"], $GLOBALS_INI["DB_PSW"]);

    $monPHP= $VARS_HTML["page"];
	require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"] . $version . "/" . $monPHP . ".php";
	$resultat= getAllResultats($numero_connexion, $GLOBALS_INI, $VARS_HTML);
	
	disconnectBDD($numero_connexion);
	
	if ((isset($VARS_HTML["bJSON"])) && ($VARS_HTML["bJSON"] == "1"))	{
		require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_FILES"] . $version . "/" . $monPHP . ".html";
	}  else  {
		require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_FILES"] . $version . "/route.html";
	}

?>