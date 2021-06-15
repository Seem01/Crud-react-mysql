-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 15, 2021 at 07:39 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `customerSystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `telephone` int(13) NOT NULL,
  `statuscus` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstname`, `lastname`, `address`, `telephone`, `statuscus`) VALUES
(12, 'Yo', 'What\'s up', 'Hello Street', 123123, 'Perfect'),
(13, 'asdasd', 'asda', 'asdad', 123123, 'asdasd'),
(14, 'asdasd', 'asdad', 'asdasd', 123123, 'PERFECT'),
(15, 'Test', 'test1', 'test1', 123123213, 'test1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(30) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(2, 'admin', '$2b$10$K2.pY2.wXzN8r6zfjNWdzuNFC6Al1vGu8hNMooz3/O2GU1FZ.nYVG', 'admin'),
(7, 'user', '$2b$10$.FhPk5yWXcl.X7norRXH4.bB0dsdmzc1loDR1iUY15iEf14HsWqZS', 'user'),
(8, 'seem1', '$2b$10$GOmFEyTedj2flLHsA6oHT.TChbv7B5lPtV6far57QBl9vOFKQtA92', 'user'),
(9, 'seem2', '$2b$10$bL9YvL9QOWY4EvQ8cO599.RnWXsQ66eVz2Y1jbUTnZWuheasR/7ay', 'user'),
(10, 'seem3', '$2b$10$bjfQqXWGd52NifLY0l45Celw08M1sNk2s5WObebTs39YV9hYVFT3e', 'user'),
(11, 'seem5', '$2b$10$nbEOep2yGml2QwWbjH.e9e.XndMUPN/wUOD0keEvPLdEp08uvPYnG', 'user'),
(17, 'seem10', '$2b$10$77CuMdL05lZzEyeTidLIOO2rtgvDaIpkkedzgzS0xnRItCaiYw74.', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
