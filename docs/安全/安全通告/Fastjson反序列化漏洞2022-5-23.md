---
title: Fastjson反序列化漏洞2022-5-23
date: 2022-05-23 21:01:45
permalink: /pages/42dce9/
categories:
  - 安全
  - 安全漏洞
tags:
  - 
---

## 0x01 漏洞状态

**漏洞名称：<font color='red'>Fastjson≤1.2.80反序列化任意代码执行漏洞</font>**

**漏洞影响版本：<font color='red'>Fastjson <=1.2.80</font>**

**漏洞等级：<font color='red'>高危</font>**

**漏洞编号：<font color='red'>暂无</font>**

**漏洞POC：<font color='red'>暂无</font>**

**漏洞EXP：<font color='red'>未知</font>**

**在野利用：<font color='red'>未知</font>**

**漏洞描述：Fastjson1.2.80及以下版本存在反序列化漏洞，Fastjson已使用黑白名单用于防御反序列化漏洞，但在特定条件下可绕过默认autoType关闭限制，攻击远程服务器。**

## 0x02 漏洞产品描述
Fastjson是阿里巴巴的开源JSON解析库，它可以解析JSON格式的字符串，支持将Java Bean序列化为JSON字符串，也可以从JSON字符串反序列化到JavaBean，由于具有执行效率高的特点，应用范围广泛。

近日，Fastjson Develop Team发布安全公告，修复了一个存在于Fastjson1.2.80 及之前版本中的反序列化漏洞。

该漏洞风险影响较大，建议Fastjson 用户尽快采取安全措施保障系统安全。

## 0x03 修复建议

### 临时防护方案

开启safeMode加固：

fastjson在1.2.68及之后的版本中引入了safeMode，配置safeMode后，无论白名单和黑名单，都不支持autoType，可杜绝反序列化Gadgets类变种攻击（关闭autoType注意评估对业务的影响）

1.2.83修复了此次发现的漏洞，开启safeMode是完全关闭autoType功能，避免类似问题再次发生，这可能会有兼容问题，请充分评估对业务影响后开启。

### 正式防护方案

厂商已在1.2.83版本修复上述漏洞，用户请尽快更新至安全版本。[下载链接：](https://github.com/alibaba/fastjson/releases/tag/1.2.83)

另，Fastjson已经开源2.0版本，在2.0版本中，不再为了兼容提供白名单，提升了安全性。fastjson v2代码已经重写，性能有了很大提升，不完全兼容1.x，升级需要做认真的兼容测试。[下载链接：](https://github.com/alibaba/fastjson2/releases)

## 0x04 漏洞复现

**<font color='red'>暂无</font>**

::: tip 声明
本文为漏洞分析解析，请勿直接下载，请仔细阅读，谢谢。

本篇文章采用[MIT](https://opensource.org/licenses/MIT)协议发布，只为公开漏洞信息，如遇攻击，不负责任何后果。
:::
>本文作者：[许怀安](https://dbsecurity.com.cn/)
><br/>创作时间：2022.5.23