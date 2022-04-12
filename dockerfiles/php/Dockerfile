FROM php:7-fpm-alpine

RUN addgroup -g 1000 user_draw && adduser -G user_draw -g user_draw -s /bin/sh -D user_draw

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN docker-php-ext-enable mysqli pdo_mysql
