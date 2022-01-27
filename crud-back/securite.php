<?php

function getFormsAndSessionsVariables()	{
	// put all variables $_POST et $_GET into the array $VARS_HTML
	$VARS_HTML= [];

	foreach($_POST as $key => $val)	{
		$VARS_HTML[$key]= htmlspecialchars($val, ENT_QUOTES);
	}

	foreach($_GET as $key => $val)	{
		$VARS_HTML[$key]= htmlspecialchars($val, ENT_QUOTES);
	}

	if ( (!(isset($VARS_HTML["page"]))) || ($VARS_HTML["page"] == "") )	{
		$VARS_HTML["page"]= "gestion";
	}

	return $VARS_HTML;
}

?>