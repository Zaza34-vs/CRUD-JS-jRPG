delete from nom_jrpg
where nom_jeu = @nom;

delete from date_jrpg
where date_sortie = @date;

delete from console_jrpg
where console_jeu = @console;

delete from serie_jrpg
where franchise_jeu = @serie;

delete from editeur_jrpg 
where studio_editeur = @editeur;

delete from adaptation_jrpg
where adaptation_jeu = @adaptation