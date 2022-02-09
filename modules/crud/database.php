<?php
    function connectBDD($host, $name, $login, $psw) {
        $numero_connexion = new PDO ('mysql:host='.$host.';dbname='.$name.';charset=utf8', $login, $psw);
        return $numero_connexion;
    }

    function disconnectBDD($numero_connexion){
		$numero_connexion= null;
	}

    function getLastInsertId($numero_connexion){
        return $numero_connexion->lastInsertId();
    }

    function getSelectDatas($numero_connexion, $spathSQL, $data=array()){
        $sql = file_get_contents($spathSQL);

        foreach ($data as $key => $value) {
            $sql = str_replace('@'.$key, $value, $sql);
            error_log("key= " .$key." | " . "value= " . $value . " | ". "sql = " . $sql);
        }

        error_log("getSelectDatas = " . $sql);

        $results_db= $numero_connexion->prepare($sql);

		$results_db->execute();

        if (!$results_db) {
            error_log("error = " . $numero_connexion->error);
        }

        $resultat = [];
        while ($ligne = $results_db->fetch()) {
            $new_ligne= [];

            foreach ($ligne as $key => $value) {
                if (!(is_numeric($key)))	{
					error_log("getSelectDatas DETAILS = " . $key . " => " . $value);
					$new_ligne[$key]= $value;
				}
            }

            $resultat[] = $new_ligne;
        }

        return $resultat;
    }

    function treatDatas($numero_connexion, $spathSQL, $data=array()){
        $sql=file_get_contents($spathSQL);

        foreach ($data as $key => $value) {
            $sql= str_replace('@'.$key, $value, $sql);
        }

        error_log("treatDatas = " . $sql);

        $results_db = $numero_connexion->query($sql);

        if (!$results_db) {
            error_log("error = " . $numero_connexion->error);
        }

        return $results_db;
    }

?>