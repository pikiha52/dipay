FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g npm \
    && npm i --global nodemon

COPY . .

CMD sleep 15 && npm run dev
EXPOSE 3031