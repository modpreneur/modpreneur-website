FROM php:5.6-apache

MAINTAINER Luke Vlcek <luke@modpreneur.com>

# prepare php and apache
RUN rm -rf /etc/apache2/sites-available/* /etc/apache2/sites-enabled/*

ADD docker/000-default.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/app
EXPOSE 80 443

# Install app
RUN rm -rf /var/app/*
ADD . /var/app

# enable apache and mod rewrite
RUN a2ensite 000-default.conf \
    && a2enmod expires \
    && a2enmod rewrite \
    && service apache2 restart