FROM nginx

MAINTAINER shenyang

RUN rm /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/
ADD default.conf /etc/nginx/conf.d/

