FROM nginx:latest

ENV RUN_USER nginx

ENV RUN_GROUP nginx

ENV DATA_DIR /data/www

ENV LOG_DIR /data/log/nginx

# 删除容器内默认的配置文件
RUN rm -rf /etc/nginx/conf.d/default.conf
# 指定工作目录
WORKDIR /data/www

# 复制配置文件到容器
COPY blog.conf /etc/nginx/conf.d

# 复制构建后的文件到工作目录
COPY /docs/.vuepress/dist  /data/www

# 指定运行端口
EXPOSE 443

ENTRYPOINT nginx -g "daemon off;"
