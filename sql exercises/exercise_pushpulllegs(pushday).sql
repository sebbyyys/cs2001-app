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
-- Table structure for table `pushpulllegs(pushday)`
--

DROP TABLE IF EXISTS `pushpulllegs(pushday)`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pushpulllegs(pushday)` (
  `Number` int NOT NULL,
  `ExerciseName` varchar(45) DEFAULT NULL,
  `Repetitions` varchar(45) DEFAULT NULL,
  `Sets` varchar(45) DEFAULT NULL,
  `RestTimeBetweenSets(seconds)` varchar(45) DEFAULT NULL,
  `RestTimeAfterExercise(seconds)` varchar(45) DEFAULT NULL,
  `AdditionalInfo` longtext,
  PRIMARY KEY (`Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='This is a typical working day where you train all the push muscles (Chest, Shoulders, Triceps).';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pushpulllegs(pushday)`
--

LOCK TABLES `pushpulllegs(pushday)` WRITE;
/*!40000 ALTER TABLE `pushpulllegs(pushday)` DISABLE KEYS */;
INSERT INTO `pushpulllegs(pushday)` VALUES (1,'Bench Press (wide grip with heavy load)','4-6','4','60','90','Very conductive to progressive overload \nThe higher the weight, the higher the chest size\nBest carryover to other exercises\nIt activates a very large muscle mass'),(2,'Incline Cable Fly','12-15','3','40','60','Bench at around 45 degrees angle\nGo past the normal stop, cross your hands\nCable will add a consistent tension \n'),(3,'Standing (vertical) Dumbbell Press\n','10-12','4','40','60','Standing is more effective than seating for this exercise\nMore overall deltoid activation\n'),(4,'Egyptian Lateral Rise','12-15','4','40','60','Lean in the way of the raise\nDo it between your legs to generate maximum tension\n'),(5,'Triceps Press Down','12-15','4','40','60','Isolation is optional, you can move your elbow \nEither under or over your head\n'),(6,'Static Dumbbell Holds','60 sec','2','60','90','Use your typical working weight\nStretch the muscle '),(7,'Rope Face Pull','20','3','40','60','Prevent over development of the anterior deltoids\nGreat for a more balanced-symmetrical look\n');
/*!40000 ALTER TABLE `pushpulllegs(pushday)` ENABLE KEYS */;
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
