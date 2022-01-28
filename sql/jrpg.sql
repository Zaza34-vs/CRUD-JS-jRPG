-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 28 jan. 2022 à 09:12
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone
= "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jrpg`
--

-- --------------------------------------------------------

--
-- Structure de la table `jrpg`
--

DROP TABLE IF EXISTS `jrpg`;
CREATE TABLE
IF NOT EXISTS `jrpg`
(
  `id_jrpg` int
(11) NOT NULL AUTO_INCREMENT,
  `nom_jeu` char
(100) NOT NULL,
  `date_sortie` date NOT NULL,
  `editeur_jrpg` char
(100) NOT NULL,
  `console_jrpg` varchar
(100) NOT NULL,
  `adaptation_jrpg` char
(100) NOT NULL,
  `franchise_jrpg` char
(100) NOT NULL,
  PRIMARY KEY
(`id_jrpg`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `jrpg`
--

INSERT INTO `jrpg` (`
id_jrpg`,
`nom_jeu
`, `date_sortie`, `editeur_jrpg`, `console_jrpg`, `adaptation_jrpg`, `franchise_jrpg`) VALUES
(1, 'Fate Grand Order', '2015-07-30', 'Aniplex', 'Android and/or iOS', 'anime', 'Fate'),
(2, 'Fire Emblem: Awakening', '2013-04-19', 'Nintendo', '3DS', 'manga', 'Fire Emblem'),
(3, 'Persona 5', '2016-09-15', 'Atlus', 'PS3', 'anime', 'Shin Megami Tensei : Persona'),
(4, 'Dragon Quest XI : Les Combattants de la destinée', '2017-07-29', 'Square Enix', 'XBOX', 'anime', 'Dragon Quest'),
(5, 'Final Fantasy VII Remake', '2020-04-10', 'Square Enix', 'PS4', 'aucun', 'Final Fantasy'),
(6, 'Ni no Kuni : La Vengeance de la sorcière céleste', '2013-02-01', 'Bandai Namco', 'Switch', 'film-d-animation', 'Ni no Kuni'),
(7, 'Bravely Default', '2012-10-11', 'Square Enix', '3DS', 'aucun', 'Bravely'),
(8, 'Granblue Fantasy', '2014-03-10', 'Cygames', 'Android and/or iOS', 'film-d-animation', 'Granblue');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
