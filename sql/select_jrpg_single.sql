select nom_jeu
from nom_jrpg
where nom_jeu = @nom;

select date_sortie
from date_jrpg
where date_sortie = @date;

select console_jeu
from console_jrpg
where console_jeu = @console;

select franchise_jeu
from serie_jrpg
where franchise_jeu = @editeur;

select studio_editeur
from editeur_jrpg
where studio_editeur = @editeur;

select adaptation_jeu
from adaptation_jrpg
where adaptation_jeu = @adaptation