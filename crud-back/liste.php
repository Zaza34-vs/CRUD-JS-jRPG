<?php
	function getAllResultats($numero_connexion, $GLOBALS_INI, $VARS_HTML)	{
		$spathSQL= $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_SQL"] . "select_jrpg.sql";
		$resultat= getSelectDatas($numero_connexion, $spathSQL, array());
		return $resultat;
	}

?>