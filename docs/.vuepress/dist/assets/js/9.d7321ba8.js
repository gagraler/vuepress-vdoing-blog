(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{470:function(a,t,e){"use strict";e.r(t);var r=e(27),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"windows下java开发环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows下java开发环境搭建"}},[a._v("#")]),a._v(" Windows下Java开发环境搭建")]),a._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),e("p",[e("em",[e("strong",[a._v("1. JDK+IntelliJ IDEA，")])]),a._v(" 其中JDK的意思是Java开发工具包，IntelliJ IDEA是进行用于做Java程序开发的工具（IntelliJ IDEA 个人常用工具）")]),a._v(" "),e("p",[a._v("其他开发工具：JCreator,JBuilder, Eclipse...")]),a._v(" "),e("p",[e("em",[e("strong",[e("strong",[a._v("2. Java的平台版本")])])])]),a._v(" "),e("p",[a._v("    Java分为J2SE、J2EE和J2ME三个不同的平台版本，即标准版（Java 2 Platform, Standard Edition）、企业版（Java 2 Platform, Enterprise Edition）和微型版（Java 2 Platform, Micro Edition）。从Java 1.5（或者Java 5.0）开始，它们被改称为Java SE、Java EE和Java ME。")]),a._v(" "),e("p",[e("strong",[a._v("各平台版本之间的差别在于适用范围不同：")])]),a._v(" "),e("p",[e("strong",[a._v("标准版平台(Java SE)")]),a._v("\n允许开发和部署在桌面、服务器、嵌入式和实时环境中使用的Java应用程序。另外，Java SE包含了支持实现Java Web服务的类库，因此标准版是企业版的基础。")]),a._v(" "),e("p",[e("strong",[a._v("企业版平台（Java EE）")]),a._v("\n帮助开发者开发和部署Java Web应用。企业版提供Web服务、组件模型、管理和通信API，可以用来实现企业级的面向服务的体系结构(Service-Oriented Architecture, SOA)和Web 2.0 应用程序。")]),a._v(" "),e("p",[e("strong",[a._v("而微型版平台（Java ME）")]),a._v("\n主要用于移动设备和嵌入式设备，如手机、PDA、电视机顶盒等等。微型版包括灵活的用户界面、健壮的安全模型、许多内置的网络协议、以及对可动态下 载的在线和离线应用的支持。基于Java ME规范的应用程序与普通Java程序一样，只需编译一次，即可在许多设备上运行。")]),a._v(" "),e("p",[e("em",[e("strong",[e("strong",[a._v("3. Maven构建工具")])])])]),a._v(" "),e("p",[a._v("    Apache Maven是一个（特别是Java编程）项目管理及自动构建工具，由Apache软件基金会所提供。基于项目对象模型（缩写：POM）概念，Maven利用一个中央信息片断能管理一个项目的构建、报告和文档等步骤。")]),a._v(" "),e("p",[a._v("    它包含了一个项目对象模型 (Project Object Model)，一组标准集合，一个项目生命周期(Project Lifecycle)，一个依赖管理系统(Dependency Management System)，和用来运行定义在生命周期阶段(phase)中插件(plugin)目标(goal)的逻辑。当你使用Maven的时候，你用一个明确定义的项目对象模型来描述你的项目，然后Maven可以应用横切的逻辑，这些逻辑来自一组共享的（或者自定义的）插件。")]),a._v(" "),e("p",[a._v("    Maven 有一个生命周期，当你运行 mvn install 的时候被调用。这条命令告诉 Maven 执行一系列的有序的步骤，直到到达你指定的生命周期。遍历生命周期旅途中的一个影响就是，Maven 运行了许多默认的插件目标，这些目标完成了像编译和创建一个 JAR 文件这样的工作。\n此外，Maven能够很方便的帮你管理项目报告，生成站点，管理JAR文件，等等。")]),a._v(" "),e("p",[e("em",[e("strong",[e("strong",[a._v("4. Mysql数据库")])])])]),a._v(" "),e("p",[a._v("    MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。")]),a._v(" "),e("p",[a._v("    MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。")]),a._v(" "),e("p",[a._v("    MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。")]),a._v(" "),e("h2",{attrs:{id:"java开发与运行环境的搭建-java-se"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java开发与运行环境的搭建-java-se"}},[a._v("#")]),a._v(" Java开发与运行环境的搭建（Java SE）")]),a._v(" "),e("p",[e("strong",[a._v("1. 下载JDK/JRE：")])]),a._v(" "),e("p",[a._v("    首先，访问Oracle公司的Java SE的"),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载主页"),e("OutboundLink")],1),a._v("，选择一个版本（我这里选择Java SE 8），选择Windows栏目，选择"),e("strong",[a._v("x64 Installer")]),a._v("的Download"),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#license-lightbox",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载链接"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("Oracle JDK下载之前得先"),e("a",{attrs:{href:"https://profile.oracle.com/myprofile/account/create-account.jspx",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册Oracle账户"),e("OutboundLink")],1),a._v("才能下载\n"),e("br"),a._v("Oracle JDK 1.8_202以上为收费版本，从官网也能下载，但是为了避免侵权问题，建议下载1.8_202以下的")])]),a._v(" "),e("p",[a._v("    下载完成后双击打开 "),e("strong",[a._v(".exe")]),a._v(" 的安装包，安装到自己想要的指定位置，然后打开 "),e("strong",[a._v("此电脑-属性-高级系统设置-环境变量-系统变量-新建")]),a._v(" ，添加两个变量名为 "),e("strong",[a._v("JAVA_HOME  CLASSPATH")]),a._v(" ，JAVA_HOME变量值为刚才安装了JDK的安装路径，CLASSPATH变量值为.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v(".;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar 前面有个 “.”")])]),a._v(" "),e("p",[a._v("    再双击打开 "),e("strong",[a._v("系统变量-Path-新建")]),a._v("，添加变量值%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("Win7系统可将两个变量添加为一行\n"),e("br"),a._v("Win10系统一个变量一个")])]),a._v(" "),e("p",[a._v("    至此，Windows下的JDK环境已经算是搭建完成，运行Windows PowerShell，输入")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("java -version \njavac -version\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("如果回显显示 "),e("strong",[a._v('java version "1.8.0_xxx" 跟 javac 1.8.0_xxx')]),a._v("，则表明JDK环境已安装配置完成")]),a._v(" "),e("h2",{attrs:{id:"intellij-idea工具的安装与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intellij-idea工具的安装与配置"}},[a._v("#")]),a._v(" IntelliJ IDEA工具的安装与配置")]),a._v(" "),e("p",[a._v("    IntelliJ IDEA在业界被公认为最好的java开发工具，尤其在智能代码助手、代码自动提示、重构、JavaEE支持、各类版本工具(git、svn等)、JUnit、CVS整合、代码分析、 创新的GUI设计等方面的功能可以说是超常的。IDEA是"),e("a",{attrs:{href:"https://www.jetbrains.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("JetBrains"),e("OutboundLink")],1),a._v("公司的产品，这家公司总部位于捷克共和国的首都布拉格，开发人员以严谨著称的东欧程序员为主。它的旗舰版本还支持HTML，CSS，PHP，MySQL，Python等。免费版只支持Java,Kotlin等少数语言。")]),a._v(" "),e("p",[a._v("    访问"),e("a",{attrs:{href:"https://www.jetbrains.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("JetBrains"),e("OutboundLink")],1),a._v("的"),e("a",{attrs:{href:"https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows",target:"_blank",rel:"noopener noreferrer"}},[a._v("IntelliJ IDEA下载页面"),e("OutboundLink")],1),a._v("下载安装包，下载下来后根据说明安装 "),e("strong",[a._v(".exe")]),a._v(" 的安装程序，待安装完成访问IntelliJ IDEA的"),e("a",{attrs:{href:"https://account.jetbrains.com/login",target:"_blank",rel:"noopener noreferrer"}},[a._v("账户注册"),e("OutboundLink")],1),a._v("页面创建账户，然后访问IntelliJ IDEA的"),e("a",{attrs:{href:"https://www.jetbrains.com/idea/buy/#commercial",target:"_blank",rel:"noopener noreferrer"}},[a._v("授权购买"),e("OutboundLink")],1),a._v("页面后买授权，最后打开桌面上的IntelliJ IDEA，点击 "),e("strong",[a._v("帮助-注册")]),a._v("，选择账户登录，待登陆完成就已完成IntelliJ IDEA的授权激活，至此也已完成IntelliJ IDEA的安装配置。")]),a._v(" "),e("blockquote",[e("p",[a._v("本文作者："),e("a",{attrs:{href:"http://linux-ln.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("许怀安"),e("OutboundLink")],1),a._v(" "),e("br"),a._v("创作时间：2021.12.05\n"),e("br"),a._v("版权声明：本博客所有文章除特别声明外，均采用"),e("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[a._v("BY-NC-SA"),e("OutboundLink")],1),a._v("许可协议。转载请禀明出处！")])])])}),[],!1,null,null,null);t.default=n.exports}}]);