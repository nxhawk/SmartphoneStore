FROM node:18.1.0-alpine3.14

WORKDIR /svr/app

COPY . .

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "start:dev" ]
