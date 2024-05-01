FROM node:20-alpine3.18

WORKDIR /svr/app

COPY . .

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "start:dev" ]
