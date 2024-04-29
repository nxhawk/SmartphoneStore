FROM node:18.1.0-alpine3.14

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]