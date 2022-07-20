-- MySQL dump 10.13  Distrib 5.7.38, for Linux (x86_64)
--
-- Host: localhost    Database: place_arts
-- ------------------------------------------------------
-- Server version	5.7.38-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artisan`
--

CREATE TABLE `artisan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `artisan_id` int(4) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `category_id` int(4) DEFAULT NULL,
  `description` text,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `products` (`id`, `name`, `artisand_id`, `picture`, `category_id`, `description`, `price` ) VALUES
(1, `Assiette bleue`, 2, https://www.sobeautiful.fr/wp-content/uploads/2021/08/29682.jpg, 1, Plat moyen, style Shabby, 14,90),
(2, `Gobelets en couleur`, 1, https://fairemescourses.fr/data/shop/seclin_delphine-mantilla-poterie-madre-tierra-poterie-utilitaire-ceramique.jpg, 1, Gobelets en grès émaillé, 18,00),
(3, `Vases`, 3, https://i0.wp.com/carnetsdunebretonne.fr/wp-content/uploads/2020/08/vases-alb-ceramique.jpg?resize=1170%2C550, 1, Vases en email de couleur, 25,00),
(4, `Lampe céramique`, 4, https://charlottec-creations.fr/wp-content/uploads/2022/02/IMG_2288-600x800.jpeg, 1, Lampe en grès, forme champignon, 200,00),
(5, `Ceinture cuir`, 5, https://www.cuir-et-terre.fr/image/cache/catalog/BANNIERE/ACCUEIL%2022/ceinture-cuir-artisan-vintage-made-in-france-cuir-et-terre%20-%20reduit-509x341.jpg, 2, Ceintures doublées. Cuir brut, fantaisie, 45,00),
(6, `Sac à dos`, 6, https://www.cuir-et-terre.fr/image/cache/catalog/7190/sac-a-dos-cuir-made-in-france-cuir-et-terre-tan-7190-2-500x500.jpg, 2, Sac à dos Mont-blanc. Cuir brut, fantaisie, 315,00),
(7, `Trousse`, 7, https://www.cuir-et-terre.fr/image/cache/catalog/trousses/trousse-cuir-made-in-france-cuir-et-terre-7556%20(9)-500x500.JPG, 2, Trousse. Cuir vert, 30,00),
(8, `Noeud papillon`, 8,https://www.cuir-et-terre.fr/image/cache/catalog/n%C5%93ud%20papillon/noeud-papillon-cuir-et-terre-made-in-france-19-1500x1250.JPG, 2, Noeud blanc et orange, 45,00),
(9, `Bracelet jonc calcédoine bleue`, 9,https://alexbok.fr/wp-content/uploads/2018/12/JC01_jonc_larimar_lapis_lazuli_calcedoine_bleue_pierre_de_lune_argent_925_plaque_or_jaune_bracelet_alexbok_designer_bijoux_paris_boutique_online-e1545313224854-300x300.jpg, 3,Bracelet jonc argent doré, 61,00),
(10, `Boucles d'oreilles feuilles bleu roi`, 10,https://i.etsystatic.com/9031291/r/il/d83f60/3844491781/il_794xN.3844491781_4gpc.jpg, 3, Boucles e laiton et verre, 12,00),
(11, `Pendentif belle d'orient`,11,https://i0.wp.com/www.belledorient.com/wp-content/uploads/2021/07/IMG_20210730_162650-scaled.jpg?fit=2560%2C1920&ssl=1, 3, Sautoir, 40,00),
(12, `Collier bohème`, 12,https://www.miaprovence.com/wp-content/uploads/2021/08/collier-boheme-chic-noir-150x150.jpg, 3, Pendentif en cordon torsadé, 49,00),
(13, `Bague`, 13,https://aufildemaux.com/wp-content/uploads/2021/01/aufildemaux-cr%C3%A9ation-bague-offrir-bijou-occitanie-fait-main-975x650.jpg, 3, Bague fine ovale bleu roi, 42,00),



/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-20 16:23:06
