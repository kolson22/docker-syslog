FROM node:12-alpine

WORKDIR /app

COPY package*.json .
COPY . .

RUN npm install

CMD [ "node", "index.js" ]