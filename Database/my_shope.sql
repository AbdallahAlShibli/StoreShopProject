-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2022 at 08:23 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_shope`
--

-- --------------------------------------------------------

--
-- Table structure for table `form_submissions`
--

CREATE TABLE `form_submissions` (
  `name` text NOT NULL,
  `email` text NOT NULL,
  `age` int(11) NOT NULL,
  `role` text NOT NULL,
  `recommed` text NOT NULL,
  `inp` text NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `name` text NOT NULL,
  `price` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`name`, `price`, `description`) VALUES
('Adenium Yellow', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Anthurium Pink Plant', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Streptophylla Hybrid', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Tillandsia Funckiana', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Ionantha Huamelula Maxima', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Tillandsia Cyanea', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Flamingo Flower', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.'),
('Anthurium Black', '5.00 OMR', 'Anthurium is a genus of about 1000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf. The genus is native to the Americas, where it is distributed from northern Mexico to northern Argentina and parts of the Caribbean.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
