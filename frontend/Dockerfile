FROM nginx:1.19.2-alpine

RUN apk add nodejs npm

RUN mkdir /app

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

RUN rm -rf ./node_modules
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /var/cache/apk/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

