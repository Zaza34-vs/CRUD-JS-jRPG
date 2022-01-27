#------------------------------------------------------------
#        Script
MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
#
Table:
nom_jrpg
#------------------------------------------------------------

CREATE TABLE jrpg
(
        id_jrpg Int
        Auto_increment  NOT NULL ,
        nom_jeu         Char
        (100) NOT NULL ,
        date_sortie     Date NOT NULL ,
        editeur_jrpg    Char
        (100) NOT NULL ,
        console_jrpg    Varchar
        (100) NOT NULL ,
        adaptation_jrpg Char
        (100) NOT NULL ,
        franchise_jrpg  Char
        (100) NOT NULL
	,CONSTRAINT jrpg_PK PRIMARY KEY
        (id_jrpg)
)ENGINE=InnoDB;
