FROM node:8-alpine

WORKDIR /usr/src/nodeapp

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
EXPOSE 8081

CMD sh ./script.sh
