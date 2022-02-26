# cloud-music

## 接口文档
```
网易音乐参考地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/
```

## git
```
1. git remote add origin 第一次连接远程仓库
    remote ：远程，与远程操作有关的命令

    origin git@github.com:zzwuweijun/myGit.git：把远程仓库和origin关联起来，origin以后就代表 git@github.com:zzwuweijun/myGit.git 所指的仓库的名字，名字可以自己定，一般都是叫origin

    git remote add origin：将本地仓库与远端仓库建立一个链接

2. git push -u origin master
    origin：指向远程仓库

    origin master：表示origin仓库的master分支，也就是主分支，所以要上传给其他分支，只要master改成对应的分支即可

    git push：将当前分支推送到origin仓库的对应分支。 如果当前分支只有一个追踪分支，那么origin仓库名都可以省略

    -u：如果当前分支与origin仓库的多个分支存在追踪关系，那么这个时候-u选项会指定一个默认的origin仓库分支，这样后面就可以不加任何参数直接使用 git push 上传
```