FROM node:18.20.7-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4500

EXPOSE 5432

ENV NAME E_Commerce_demo

CMD ["npm", "run", "dev"]