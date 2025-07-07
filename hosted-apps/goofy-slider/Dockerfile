FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm i

COPY *.js /app
COPY *.html /app
COPY *.ico /app
COPY *.css /app

EXPOSE 5001

CMD [ "node", "server.js" ]
