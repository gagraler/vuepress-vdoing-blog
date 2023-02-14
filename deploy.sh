#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件

yarn build

# 进入生成的文件夹

cd docs/.vuepress/dist

git init
git add -A
git commit -m '构建并发布到prod分支'

git push -f git@github.com:keington/vuepress-vdoing-blog.git master:prod

cd -
