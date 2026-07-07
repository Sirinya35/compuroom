\# 🖥️ Computer Room Management System



ระบบจัดการห้องคอมพิวเตอร์ (Computer Room Management System)  

พัฒนาด้วย React, Node.js, Express, PostgreSQL และ Docker Compose



\---



\## 📌 Project Overview



ระบบนี้ใช้สำหรับจัดการข้อมูลเครื่องคอมพิวเตอร์ภายในห้องปฏิบัติการ เช่น



\- รหัสทรัพย์สิน (Asset Code)

\- ยี่ห้อและรุ่น

\- CPU

\- RAM

\- ห้องที่ติดตั้ง

\- สถานะการใช้งาน



รองรับการทำงานแบบ CRUD:



\- Create เพิ่มข้อมูล

\- Read แสดงข้อมูล

\- Update แก้ไขข้อมูล

\- Delete ลบข้อมูล



\---



\# 🏗️ System Architecture

Frontend

(React + Vite)

|

|

Backend API

(Node.js + Express)

|

|

Database

(PostgreSQL)













ทั้งหมดสามารถทำงานผ่าน Docker Compose



\---



\# 🛠️ Technologies



\## Frontend



\- React

\- Vite

\- JavaScript

\- CSS



\## Backend



\- Node.js

\- Express.js

\- REST API



\## Database



\- PostgreSQL 17



\## Container



\- Docker

\- Docker Compose



\## Version Control



\- Git

\- GitHub



\---



\# 📂 Project Structure

compuroom



├── backend

│ ├── config

│ ├── controllers

│ ├── models

│ ├── routes

│ ├── Dockerfile

│ └── server.js

│

├── frontend

│ ├── src

│ ├── Dockerfile

│ └── package.json

│

├── docker-compose.yml

│

└── README.md



\---



\# 🚀 Installation



\## 1. Clone Project



```bash

git clone <repository-url>



cd compuroom



