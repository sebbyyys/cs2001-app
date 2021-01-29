-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: exercise
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pushpulllegs(pullday)`
--

DROP TABLE IF EXISTS `pushpulllegs(pullday)`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pushpulllegs(pullday)` (
  `Number` int NOT NULL,
  `Exercise Name` varchar(45) DEFAULT NULL,
  `Repetitions` varchar(45) DEFAULT NULL,
  `Sets` varchar(45) DEFAULT NULL,
  `RestTimeBetweenSets(Seconds)` varchar(45) DEFAULT NULL,
  `RestTimeAfterExercise(Seconds)` varchar(45) DEFAULT NULL,
  `Additional Info` longtext,
  PRIMARY KEY (`Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='This is the next day from the Push Pull Legs workout which trains the Back, the Biceps and the Rear Deltoids.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pushpulllegs(pullday)`
--

LOCK TABLES `pushpulllegs(pullday)` WRITE;
/*!40000 ALTER TABLE `pushpulllegs(pullday)` DISABLE KEYS */;
INSERT INTO `pushpulllegs(pullday)` VALUES (8,'One-Arm Lat Pull-in','15-20','2','40','60','Pre-activation of the lats (latissimus dorsi)\nUseful for establishing a mind-muscle connection\nGood for additional warm-up\n'),(9,'Wide Grip Pull-up','6-8','3','60','90','Better activation for the pulling muscles\nUse loading belt to add resistances if needed\nYou can use the pull-up assisted machine if you are a beginner\nDo not go all the way down and keep pressure\n'),(10,'Meadows Row','10-12','3','60','90','Good for activating neglected back muscles\nRoll out to the side with a flat back while being bend over\n'),(11,'Rope Face Pull','15-20','2','30','60','Maintain a short rest period to activate the muscles properly\nFocus on your deltoids and lats\nThe goal is to burn the rear deltoids\n'),(12,'Reverse Pec Deck','15-20','2','30','60','Maintain a short rest period to activate the muscles properly\nFocus on your deltoids and lats\nThe goal is to burn the rear deltoids\n'),(13,'Band Pull Aparts','15-20','2','30','60','Maintain a short rest period to activate the muscles properly\nFocus on your deltoids and lats\nThe goal is to burn the rear deltoids\n'),(14,'EZ-Bar Bicep Curl','6-8','3','40','60','Use heavy weight \nMedium grip recommended\nWide grip involves the outer head more\n'),(15,'Incline Dumbbell Curl','15-20','2','60','60','Maximum stretch is recommended\nUse both arms\nExhaust the Bicep \n'),(16,'Rack Pull','6-8','3','60','90','Good stimulator for the spinal muscles\nLoading stimulus on the upper traps\nOverall good exercise to improve deadlift performance and force\n');
/*!40000 ALTER TABLE `pushpulllegs(pullday)` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-07 22:15:23
