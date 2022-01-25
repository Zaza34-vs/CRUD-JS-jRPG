<?php
	function getAllResultats($numero_de_connexion, $GLOBALS_INI, $VARS_HTML)	{
		$spathSQL= $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_SQL"] . "update_jrpg.sql";
		$resultat= treatDatas($numero_de_connexion, $spathSQL, array(
																	"nom_jeu" => $VARS_HTML["nom"], 
																	"date_sortie" => $VARS_HTML["date"], 
																	"editeur_jrpg" => $VARS_HTML["editeur"],
                                                                    "console_jrpg" => $VARS_HTML["console"],
                                                                    "adaptation_jrpg" => $VARS_HTML["adaptation"],
                                                                    "franchise_jrpg" => $VARS_HTML["serie"]
																	));
		$resultat= getLastInsertId($numero_de_connexion);
		return $resultat;
	}

?>