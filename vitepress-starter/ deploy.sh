#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd vitepress/.docs/dist

git init
git add -A
git commit -m 'deploy'

# zkk123179/study-notes.git 替换为自己的用户名和对应的仓库
# 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f git@github.com:zkk123179/study-notes.git master:gh-pages

cd -
