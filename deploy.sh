#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

dist_path=src/.vuepress
repo_name=vuepress_theme_hope
# 生成静态文件
npm run docs:build

# 进入生成的文件夹打包
cd $dist_path
echo $dist_path
tar --exclude=dist/.git -zcvf dist.tar.gz dist/

#上传至个人服务器
scp -P 22 -r dist.tar.gz root@www.zhangtq.com:/var/www/$repo_name/
ssh root@www.zhangtq.com -p 22 "cd /var/www/$repo_name/ && tar -xvf dist.tar.gz && rm -f dist.tar.gz"
# rm -f dist.tar.gz && rm -rf dist/

# 将代码同步更新到gitee, github
git add .
commit_info=`git describe --all --always --long`
git commit -m "deploy, $commit_info"
git push origin master
ssh zhangtianqing@www.zhangtq.com -p 22 "
cd /home/zhangtianqing/$repo_name
git checkout master
git pull gitee master
git checkout main
git merge master
git push github main
git checkout master
"