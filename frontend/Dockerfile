FROM node:20-alpine3.18

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]