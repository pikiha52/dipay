
## 🚀 First Clone (Recomendation use Docker)

## With docker
  - Run command on terminal dipay-backend-test

    ```bash
    npm i 
    ```
  - Run command on terminal email_service

    ```bash
    npm i
    ```
  - Run comand on terminal directory 

    ```bash
    docker-compose -f docker-composer.yml up -d
    ```

## Without docker
- **Project** dipay-backend-test
  - **Update .env.local:** example 
    ```bash
    APP_PORT=3030
    MONGO_URL=mongodb://localhost:27017/dipayDB
    RABBIT_HOST=amqp://userexample:passexample@hostexample:portexample
    ```
  - **Run command** on terminal dipay-backend-test for install package
    ```bash
    npm i
    ```
  - **Run command** for running project dipay-backend-test
    ```bash
    npm run dev:local
    ```
- **Project** email_service
  - **Create your account for email testing** (https://mailtrap.io/)
    - select option node mailer and copy host, port and auth 

  - **Update .env.local:** example 
    ```bash
    APP_PORT=3031
    RABBIT_HOST=amqp://userexample:passexample@hostexample:portexample

    EMAIL_HOST=sandbox.smtp.mailtrap.io
    EMAIL_PORT=2525
    EMAIL_USER=b19c929abe0e43
    EMAIL_PASS=674f29c2676df2
    EMAIL_FORM=pikiha52@gmail.com
    ```
  - **Run command** on terminal email_service for install package
    ```bash
    npm i
    ```
  - **Run command** for running project email_service
    ```bash
    npm run dev:local
    ```

## Package 

**- Dipay Test Backend:** @types/amqplib, @types/cors, @types/express, @types/http-errors, @types/mongoose, @types/node, amqplib, nodemon, ts-node, typescript, env-cmd, axios, express-validator

**- Service Email:** amqplib, cors, express, nodemailer, nodemon, dotenv, env-cmd


## Tech Stack

**Server:** Node, Express, Typescript

**Database:** MongoDB

**Message Queue:** RabbitMq



