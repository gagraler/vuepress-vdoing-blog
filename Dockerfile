FROM nginx
ENV RUN_USER nginx
ENV RUN_GROUP nginx
ENV DATA_DIR /data/www
ENV LOG_DIR /data/log/nginx
COPY /docs/.vuepress/dist  /data/www
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"
