<?php

    function getAllResultats($numero_connexion, $GLOBALS_INI, $VARS_HTML){
        $spathSQL = $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_SQL"] . "delete_jrpg.sql";
        $resultat= treatDatas($numero_connexion, $spathSQL, array(
                                                                "id_jrpg" => $VARS_HTML["id_jrpg"]
            ));
    }
?>