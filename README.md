# Task 4 - 3-Tier Application Deployment

This project demonstrates a simple 3-tier application deployed on AWS EC2 using Amazon Linux 2023.

Architecture:

Frontend Layer:
Nginx and HTML

Backend Layer:
Node.js, Express.js, PM2

Database Layer:
MySQL

Application Flow:

Browser -> Frontend EC2 -> Backend EC2 -> Database EC2

The backend retrieves user records from the MySQL database and returns them to the frontend.
