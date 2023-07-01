FROM node:18

WORKDIR /app

COPY package.json /app

RUN npm i

COPY dist /app/dist
COPY *.js /app
COPY *.html /app
COPY *.svg /app
COPY *.css /app
COPY *.json /app
COPY .env /app

CMD [ "node", "server.js" ]
