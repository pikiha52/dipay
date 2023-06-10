FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i \
    && npm i --global nodemon

COPY . .

CMD sleep 20 && npm run dev
EXPOSE 3031