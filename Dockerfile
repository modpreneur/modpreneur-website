FROM nimmis/alpine-apache

MAINTAINER Luke Vlcek <luke@modpreneur.com>

EXPOSE 80 443

# Install app
RUN rm -rf /web/html/*
ADD . /web/html