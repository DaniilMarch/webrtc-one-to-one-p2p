FROM node:14.8.0-alpine3.10

RUN mkdir /app

COPY package.json /app
COPY . /app

WORKDIR /app
RUN npm install

EXPOSE 3001

ENTRYPOINT ["node", "src/index.js"]
