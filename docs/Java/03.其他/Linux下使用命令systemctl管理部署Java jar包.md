---
title: Linux下使用命令systemctl管理部署Java jar包
date: 2022-02-18 18:05:16
permalink: /pages/82aec0/
categories:
  - Java
  - 其他
tags:
  - scripts
---
  
# Linux下使用命令systemctl管理部署Java jar包
# 说明
Java项目编译完后通常都是 **jar** 包跟 **war** 包，war包都是在tomcat里面通过tomcat的管理方式来管理，而jar包一般都是通过 **java -jar** 或者 **nohub java -jar**
的方式来启动，而停止的话得先找出服务的进程ID，然后再kill掉，比较麻烦，使用systemctl来管理会更方便一点。

systemd是Linux系统最新的初始化系统，作用是方便管理系统服务，尽可能启动较少的进程，尽可能更多进程并发启动。
systemd对应的进程管理命令是systemctl

# 一、在linux下部署服务步骤：
## 1.1 在目录/etc/systemd/system下建立hellword.service文件
```shell
mkdir /etc/systemd/system/helloword.service
```
:::tip 提示
后缀不变，名称随意，例如：helloword.service
:::

## 1.2 在刚新建的.service中写入以下内容
```shell
[Unit]
Description=Spring Boot Application # 描述
After=syslog.target network.target # 依赖

[Service]
ExecStart=/usr/bin/java -jar /opt/javaapps/hellword.jar
# 前面是java命令的绝对路径 后面是jar包的绝对路径
ExecStop=/bin/kill -15 $MAINPID

User=root 
Group=root
 
[Install]
WantedBy=multi-user.target
```
.service文件定义了一个服务，分为 **[Unit]，[Service]，[Install]** 三个小节

**[Unit]**</br>
Description：描述</br>
After：在network.target,auditd.service启动后才启动</br>
ConditionPathExists：执行条件</br>

**[Service]**</br>
EnvironmentFile：变量所在文件</br>
ExecStart：执行启动脚本</br>
Restart：fail时重启</br>

**[Install]**</br>
Alias：服务别名</br>
WangtedBy：多用户模式下需要的</br>

# 二、使用命令 systemctl start xxx，如 systemctl start helloword
# 2.1 常用命令 
二、常用命令

systemctl 提供了一组子命令来管理单个的 unit，其命令格式为：

systemctl [command] [unit]

command 主要有：</br>
start：立刻启动后面接的 unit。</br>
stop：立刻关闭后面接的 unit。</br>
restart：立刻关闭后启动后面接的 unit，亦即执行 stop 再 start 的意思。</br>
reload：不关闭 unit 的情况下，重新载入配置文件，让设置生效。</br>
enable：设置下次开机时，后面接的 unit 会被启动。</br>
disable：设置下次开机时，后面接的 unit 不会被启动。</br>
status：目前后面接的这个 unit 的状态，会列出有没有正在执行、开机时是否启动等信息。</br>
is-active：目前有没有正在运行中。</br>
is-enable：开机时有没有默认要启用这个 unit。</br>
kill ：不要被 kill 这个名字吓着了，它其实是向运行 unit 的进程发送信号。</br>
show：列出 unit 的配置。</br>
mask：注销 unit，注销后你就无法启动这个 unit 了。</br>
unmask：取消对 unit 的注销。</br>

# 三、踩坑记录
## 3.1 执行start语句时，不成功，服务无法启动
通过执行 **status** 命令发现报错203，原因是因为文件权限不足需要提升文件权限

解决办法
```shell
chmod 755 helloword.jar
```

## 3.2 main process exited, code=exited, status=203/EXEC
问题原因是jar包不是可执行的

解决办法
修改pom文件，加入以下内容
```shell
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <finalName>${project.artifactId}</finalName>
                <executable>true</executable>
            </configuration>
        </plugin>
    </plugins>
</build>
```

>本文作者：[许怀安](https://www.dbsecurity.com.cn/)
><br/>创作时间：2022.02.18
><br/>版权声明：本博客所有文章除特别声明外，均采用[BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/zh-CN/)许可协议。转载请禀明出处！
