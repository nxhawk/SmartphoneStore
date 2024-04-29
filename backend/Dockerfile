FROM node:18.1.0-alpine3.14

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "run", "start:dev" ]
