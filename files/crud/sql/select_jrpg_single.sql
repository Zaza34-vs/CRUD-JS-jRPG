select nom_jeu, date_sortie, editeur_jrpg, console_jrpg, adaptation_jrpg, franchise_jrpg
from jrpg
where id_jrpg = @id_jrpg