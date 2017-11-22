-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost:localhost
-- Generation Time: Nov 22, 2017 at 09:16 PM
-- Server version: 10.0.31-MariaDB-0ubuntu0.16.04.2
-- PHP Version: 7.0.25-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lnf`
--

-- --------------------------------------------------------

--
-- Table structure for table `founds`
--

CREATE TABLE `founds` (
  `id` int(10) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `reward` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lng` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `identity` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `founds`
--

INSERT INTO `founds` (`id`, `description`, `image`, `reward`, `location`, `lat`, `lng`, `identity`, `id_user`, `created_at`, `updated_at`) VALUES
(3, 'qwdassada', '', '12312', '', '', '', '', 5, NULL, NULL),
(4, '12312312', '', '12312312', '', '', '', '', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `losts`
--

CREATE TABLE `losts` (
  `id` int(10) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `reward` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lng` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `identity` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `losts`
--

INSERT INTO `losts` (`id`, `description`, `image`, `reward`, `location`, `lat`, `lng`, `identity`, `id_user`, `created_at`, `updated_at`) VALUES
(16, 'sddadasd', '', '11111', '', '', '', '', 4, NULL, NULL),
(17, 'dsadsadas', '', '2222', '', '', '', '', 4, NULL, NULL),
(18, 'asdsadsad', '', '3333', '', '', '', '', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(2, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(3, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(4, '2016_06_01_000004_create_oauth_clients_table', 1),
(5, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(6, '2017_11_22_064224_create_users_table', 1),
(7, '2017_11_22_064235_create_losts_table', 1),
(8, '2017_11_22_064243_create_founds_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('022f50d18b4c871ad28f1e4188f719a683e2892e1a83657e8e07e3dac62f08d74d336170e3bc2cbf', 12, 3, 'access_token', '[]', 0, '2017-11-22 11:12:14', '2017-11-22 11:12:14', '2018-11-22 11:12:14'),
('07237dc21cb4387b7abd0c0e4c04a71fbe203262cd3e132944f687dfde640f48780d2663b7ac43b5', 5, 3, 'access_token', '[]', 0, '2017-11-22 12:16:44', '2017-11-22 12:16:44', '2018-11-22 12:16:44'),
('45f92d9f1aa7d4b20f7fc4e35e1b4e47c1e18e650c54e37cb2abbf640e2f296c9007110849804558', 9, 3, 'access_token', '[]', 0, '2017-11-22 07:48:16', '2017-11-22 07:48:16', '2018-11-22 07:48:16'),
('479a38fde565140c120b3487eeb2c571f70734c203b9ef45fc774ea2a6500c8742a9789a1f847280', 4, 3, 'access_token', '[]', 0, '2017-11-22 12:16:32', '2017-11-22 12:16:32', '2018-11-22 12:16:32'),
('91a865e80a01d475465eceb16eee5b8ecfcc3a5d26147c3b91fbc9d21786c4acb6a24bd833ad43df', 9, 3, 'access_token', '[]', 0, '2017-11-22 07:50:40', '2017-11-22 07:50:40', '2018-11-22 07:50:40'),
('bec96c2be9189ededd5da50209f42cd7e83b444eb3390b9809f37835015809c3c1e48a14420e68d3', 11, 3, 'access_token', '[]', 0, '2017-11-22 09:09:09', '2017-11-22 09:09:09', '2018-11-22 09:09:09'),
('ea6f782879f8e3cf6a96d1302176c786da973b1bbc5318c1264db0685e3de91554421ea6e544d254', 10, 3, 'access_token', '[]', 0, '2017-11-22 09:06:06', '2017-11-22 09:06:06', '2018-11-22 09:06:06');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, ' Personal Access Client', 'tF8CjV1xcuXtNfBExTF2CikghwaLbGCr2QVlld0b', 'http://localhost', 1, 0, 0, '2017-11-22 06:49:14', '2017-11-22 06:49:14'),
(2, NULL, ' Password Grant Client', 'ObQSvl0dbIrPKycptjDK93I2EBJuaaLhHSg4rkHh', 'http://localhost', 0, 1, 0, '2017-11-22 06:49:15', '2017-11-22 06:49:15'),
(3, NULL, ' Personal Access Client', 'jNyDVDs1KT35LzM7A5ftKQ6OWxSFiOHtHO0iqGnj', 'http://localhost', 1, 0, 0, '2017-11-22 07:02:36', '2017-11-22 07:02:36'),
(4, NULL, ' Password Grant Client', '27cUt2gAZAjyX8gQCQFEyYWN2KC4Bs8QCbkePbmS', 'http://localhost', 0, 1, 0, '2017-11-22 07:02:36', '2017-11-22 07:02:36'),
(5, NULL, '1234', 'hSbdaeQSEgpEfVJDXBYASM0XnhiiLnYKULtNJoUt', 'http://localhost', 0, 1, 0, '2017-11-22 07:33:43', '2017-11-22 07:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2017-11-22 06:49:15', '2017-11-22 06:49:15'),
(2, 3, '2017-11-22 07:02:36', '2017-11-22 07:02:36');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `fullname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `password`, `email`, `no_telp`, `address`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(4, 'Alif', 'alif', '$2y$10$Eqc7TOK7pTZGEcIYcMsWX.zBVDweFN4Dy511GvFtnF5hDfu9DXT8m', 'alif@gmail.com', '085782188', 'jl.projakal', '/tmp/phpgA6Qst', '', '2017-11-22 12:16:32', '2017-11-22 12:16:32'),
(5, 'Alif1', 'alif1', '$2y$10$z4BEbcX90Y.LJMIa8Sr3hOGH7hs3sy3HJN5XjMtqIHm1G0khmK8zu', 'alif1@gmail.com', '085782188', 'jl.projakal', '/tmp/phpw9zkK8', '', '2017-11-22 12:16:44', '2017-11-22 12:16:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `founds`
--
ALTER TABLE `founds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `losts`
--
ALTER TABLE `losts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `founds`
--
ALTER TABLE `founds`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `losts`
--
ALTER TABLE `losts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `founds`
--
ALTER TABLE `founds`
  ADD CONSTRAINT `founds_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `losts`
--
ALTER TABLE `losts`
  ADD CONSTRAINT `losts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
