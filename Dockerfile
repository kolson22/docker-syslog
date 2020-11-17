FROM node:12-alpine

WORKDIR /app

COPY package*.json .
COPY . .

RUN npm install

EXPOSE 514/udp

CMD [ "node", "index.js" ]