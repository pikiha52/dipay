FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g npm \
    && npm i --global nodemon

COPY . .

CMD ["npm", "run", "dev"]
EXPOSE 3030