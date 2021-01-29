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
-- Table structure for table `pushpulllegs(legday)`
--

DROP TABLE IF EXISTS `pushpulllegs(legday)`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pushpulllegs(legday)` (
  `Number` int NOT NULL,
  `Exercise Name` varchar(45) DEFAULT NULL,
  `Repetitions` varchar(45) DEFAULT NULL,
  `Sets` varchar(45) DEFAULT NULL,
  `RestTimeBetweenSets(seconds)` varchar(45) DEFAULT NULL,
  `RestTimeAfterExercise(secods)` varchar(45) DEFAULT NULL,
  `Additional Info` longtext,
  PRIMARY KEY (`Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='This is the third day of the Push Pull Legs workout that will focus on training the lower part of the body.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pushpulllegs(legday)`
--

LOCK TABLES `pushpulllegs(legday)` WRITE;
/*!40000 ALTER TABLE `pushpulllegs(legday)` DISABLE KEYS */;
INSERT INTO `pushpulllegs(legday)` VALUES (17,'Squat','4-6','3','60','90','Leave 2 reps in the tank\nLarger range of motion\nActivates more lower body musculature\n'),(18,'Romanian Deadlift','8','3','60','90','Large degree of stretch to the hamstrings\nBetter activation of inner hamstrings\nKeep the weight the same and add one rep every week\n'),(19,'Walking Lunge','20 strides','3','60','90','Can add weight in each hand for better activation\nDrive your leading heel through the floor\nMinimize contribution from your back leg\n'),(20,'Single Leg Extensions','10','3','30','60','Best way to avoid asymmetry\nCan use various foot positions \n'),(21,'Single Leg Lying Curl','8','3','40','60','Good for avoiding imbalances'),(22,'Single Leg Press Calf Raise','10-12','3','30','60','This will target both the soleus and the gastrocnemius '),(23,'Seated Calf Raise','20','3','40','60','This exercise will target the deeper soleus muscle\nPause at the bottom of every rep\n');
/*!40000 ALTER TABLE `pushpulllegs(legday)` ENABLE KEYS */;
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
