FROM node:14.1-alpine

WORKDIR /usr/src/fullcycle-2_desafio-1

COPY . .
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]