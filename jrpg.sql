#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: date_jrpg
#------------------------------------------------------------

CREATE TABLE date_jrpg(
        id_date_jrpg Int  Auto_increment  NOT NULL ,
        date_sortie  Date NOT NULL
	,CONSTRAINT date_jrpg_PK PRIMARY KEY (id_date_jrpg)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: editeur_jrpg
#------------------------------------------------------------

CREATE TABLE editeur_jrpg(
        id_editeur_jrpg Int  Auto_increment  NOT NULL ,
        studio_editeur  Char (100) NOT NULL
	,CONSTRAINT editeur_jrpg_PK PRIMARY KEY (id_editeur_jrpg)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: console_jrpg
#------------------------------------------------------------

CREATE TABLE console_jrpg(
        id_console_jrpg Int  Auto_increment  NOT NULL ,
        console_jeu     Char (100) NOT NULL
	,CONSTRAINT console_jrpg_PK PRIMARY KEY (id_console_jrpg)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: serie_jrpg
#------------------------------------------------------------

CREATE TABLE serie_jrpg(
        id_serie_jrpg Int  Auto_increment  NOT NULL ,
        franchise_jeu Char (100) NOT NULL
	,CONSTRAINT serie_jrpg_PK PRIMARY KEY (id_serie_jrpg)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: nom_jrpg
#------------------------------------------------------------

CREATE TABLE nom_jrpg(
        id_nom_jrpg     Int  Auto_increment  NOT NULL ,
        id_date_jrpg    Int NOT NULL ,
        id_serie_jrpg   Int NOT NULL ,
        id_console_jrpg Int NOT NULL ,
        id_editeur_jrpg Int NOT NULL ,
        nom_jeu         Char (5) NOT NULL
	,CONSTRAINT nom_jrpg_PK PRIMARY KEY (id_nom_jrpg)

	,CONSTRAINT nom_jrpg_date_jrpg_FK FOREIGN KEY (id_date_jrpg) REFERENCES date_jrpg(id_date_jrpg)
	,CONSTRAINT nom_jrpg_serie_jrpg0_FK FOREIGN KEY (id_serie_jrpg) REFERENCES serie_jrpg(id_serie_jrpg)
	,CONSTRAINT nom_jrpg_console_jrpg1_FK FOREIGN KEY (id_console_jrpg) REFERENCES console_jrpg(id_console_jrpg)
	,CONSTRAINT nom_jrpg_editeur_jrpg2_FK FOREIGN KEY (id_editeur_jrpg) REFERENCES editeur_jrpg(id_editeur_jrpg)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: adaptation_jrpg
#------------------------------------------------------------

CREATE TABLE adaptation_jrpg(
        id_adaptation_jrpg Int  Auto_increment  NOT NULL ,
        id_nom_jrpg        Int NOT NULL ,
        adaptation_jeu     Char (100) NOT NULL
	,CONSTRAINT adaptation_jrpg_PK PRIMARY KEY (id_adaptation_jrpg)

	,CONSTRAINT adaptation_jrpg_nom_jrpg_FK FOREIGN KEY (id_nom_jrpg) REFERENCES nom_jrpg(id_nom_jrpg)
)ENGINE=InnoDB;
