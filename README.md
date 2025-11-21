# Tourvana

**Tourvana** is a trip generator application designed to help users discover and plan personalised excursions.  
It uses a full-stack architecture based on **Angular** and **NestJS**.

## Technologies

- **Angular**
- **NestJS** 
- **Node.js**   
- **MySQL**
- **OpenAI API**

---

## Getting Started

Follow the steps below to run the project locally.

### 1. Create the database  
Create a new database in MySQL named: tourvana

### 2. Open TourvanaAPI
 - Find `.env` file and set it up 

    ```bash
    DB_HOST=
    DB_PORT=
    DB_USERNAME=
    DB_PASSWORD=
    DB_NAME=tourvana

    JWT_ACCESS_SECRET=
    OPENAI_API_KEY=
    ```
- Run to seed database 
```bash 
npm run seed
``` 
- Run project
```bash
nest start
```
### 3. Start Angular Page
- Open angular project
- Install node_modules
```bash
npm install
```
- Start Project
```bash
ng serve
```
---
### URL's
- Api is listening on [localhost:3000](http://localhost:3000)
- Swagger is on [localhost:3000/api](http://localhost:3000/api)
- Angular is listening on [localhost:4200](http://localhost:4200)
