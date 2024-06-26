-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: stock_deatails
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_master`
--

DROP TABLE IF EXISTS `order_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_master` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `price_per_unit` int DEFAULT NULL,
  `type` varchar(4) DEFAULT NULL,
  `stock` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_master`
--

LOCK TABLES `order_master` WRITE;
/*!40000 ALTER TABLE `order_master` DISABLE KEYS */;
INSERT INTO `order_master` VALUES (1,4,5,'buy','w'),(2,42,5,'buy','we'),(3,4,5,'sell','w'),(4,42,5,'buy','we'),(5,5,4,'sell','dfd'),(6,5,4,'sell','dfddfg'),(7,8,0,'buy','e'),(8,8,0,'buy','e'),(9,7,56,'buy','dfddsjjsl47'),(10,729,560,'sell','dfddsjjsl472774'),(11,8,0,'buy','e'),(12,7,56,'buy','dfddsjjsl47'),(13,729,560,'sell','dfddsjjsl472774'),(14,3,6,'buy','e'),(15,3,6,'buy','e656'),(16,3,6,'buy','e'),(17,3,6,'buy','e656'),(18,6,5,'buy','dfd'),(19,6,5,'buy','dfddfg'),(20,8,5,'buy','dfd987'),(21,8,5,'buy','dfd987djka'),(22,98,0,'buy','dfddsjjsl'),(23,98,0,'buy','d'),(24,98,0,'buy','dfddsjjsl'),(25,98,0,'buy','d'),(26,8,0,'sell','fa'),(27,8,0,'sell','fafa');
/*!40000 ALTER TABLE `order_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trade_details`
--

DROP TABLE IF EXISTS `trade_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trade_details` (
  `trade_id` int NOT NULL AUTO_INCREMENT,
  `trade_data_time` datetime DEFAULT NULL,
  `stock_name` varchar(50) DEFAULT NULL,
  `listing_price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `type` varchar(4) DEFAULT NULL,
  `price_per_unit` int DEFAULT NULL,
  PRIMARY KEY (`trade_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trade_details`
--

LOCK TABLES `trade_details` WRITE;
/*!40000 ALTER TABLE `trade_details` DISABLE KEYS */;
INSERT INTO `trade_details` VALUES (1,'2024-03-28 18:35:28','w',2,4,'buy',5),(2,'2024-03-28 18:35:28','we',2,42,'buy',5),(3,'2024-03-28 18:35:57','w',2,4,'sell',5),(4,'2024-03-28 18:35:57','we',2,42,'buy',5),(5,'2024-03-28 18:39:22','dfd',1,5,'sell',4),(6,'2024-03-28 18:41:21','dfddfg',1,5,'sell',4),(7,'2024-03-28 18:43:09','e',6,8,'buy',0),(8,'2024-03-28 18:43:57','e',6,8,'buy',0),(9,'2024-03-28 18:43:57','dfddsjjsl47',9,7,'buy',56),(10,'2024-03-28 18:43:57','dfddsjjsl472774',94,729,'sell',560),(11,'2024-03-28 18:48:36','e',6,8,'buy',0),(12,'2024-03-28 18:48:36','dfddsjjsl47',9,7,'buy',56),(13,'2024-03-28 18:48:36','dfddsjjsl472774',94,729,'sell',560),(14,'2024-03-28 18:49:37','e',2,3,'buy',6),(15,'2024-03-28 18:49:37','e656',2,3,'buy',6),(16,'2024-03-28 18:53:26','e',2,3,'buy',6),(17,'2024-03-28 18:53:26','e656',2,3,'buy',6),(18,'2024-03-28 18:56:06','dfd',7,6,'buy',5),(19,'2024-03-28 18:56:06','dfddfg',7,6,'buy',5),(20,'2024-03-28 18:58:25','dfd987',7,8,'buy',5),(21,'2024-03-28 18:58:25','dfd987djka',7,8,'buy',5),(22,'2024-03-28 19:02:30','dfddsjjsl',7676,98,'buy',0),(23,'2024-03-28 19:02:30','d',7676,98,'buy',0),(24,'2024-03-28 19:03:13','dfddsjjsl',7676,98,'buy',0),(25,'2024-03-28 19:03:13','d',7676,98,'buy',0),(26,'2024-03-28 19:03:13','fa',47,8,'sell',0),(27,'2024-03-28 19:03:13','fafa',47,8,'sell',0);
/*!40000 ALTER TABLE `trade_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 19:28:00
