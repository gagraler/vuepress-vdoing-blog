(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{505:function(e,s,a){"use strict";a.r(s);var t=a(19),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"离线升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线升级"}},[e._v("#")]),e._v(" 离线升级")]),e._v(" "),a("h2",{attrs:{id:"一、获取离线升级包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、获取离线升级包"}},[e._v("#")]),e._v(" 一、获取离线升级包")]),e._v(" "),a("p",[e._v("到"),a("a",{attrs:{href:"https://elrepo.org/linux/kernel/el7/x86_64/RPMS/",target:"_blank",rel:"noopener noreferrer"}},[e._v("elrepo"),a("OutboundLink")],1),e._v("的网站下载想要的版本")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://elrepo.org/linux/kernel/el7/x86_64/RPMS/kernel-ml-5.16.10-1.el7.elrepo.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://elrepo.org/linux/kernel/el7/x86_64/RPMS/kernel-ml-devel-5.16.10-1.el7.elrepo.x86_64.rpm\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("如果在目标服务器无法上网情况下也可在自己电脑下载rpm包，然后上传到服务器")])]),e._v(" "),a("h2",{attrs:{id:"二、升级内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、升级内核"}},[e._v("#")]),e._v(" 二、升级内核")]),e._v(" "),a("h3",{attrs:{id:"_2-1-安装rpm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装rpm包"}},[e._v("#")]),e._v(" 2.1 安装rpm包")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("yum localinstall -y kernel-lt-4.4.206-1.el7.elrepo.x86_64.rpm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\nkernel-lt-devel-4.4.206-1.el7.elrepo.x86_64.rpm\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-2-查看系统上的所有可用内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看系统上的所有可用内核"}},[e._v("#")]),e._v(" 2.2 查看系统上的所有可用内核")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("awk")]),e._v(" -F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("' "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'$1=="menuentry " {print i++ " : " $2}\'')]),e._v(" /etc/grub2.cfg\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("0 : CentOS Linux (5.16.10-1.el7.elrepo.x86_64) 7 (Core)\n1 : CentOS Linux (3.10.0-862.11.6.el7.x86_64) 7 (Core)\n2 : CentOS Linux (3.10.0-514.el7.x86_64) 7 (Core)\n3 : CentOS Linux (0-rescue-063ec330caa04d4baae54c6902c62e54) 7 (Core)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("设置新的内核为grub2的默认版本\n服务器上存在4 个内核，我们要使用 5.16 这个版本，可以通过 grub2-set-default 0 命令或编辑 /etc/default/grub 文件来设置")]),e._v(" "),a("h4",{attrs:{id:"_2-2-1-通过-grub2-set-default-0-命令设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-通过-grub2-set-default-0-命令设置"}},[e._v("#")]),e._v(" 2.2.1 通过 "),a("font",{attrs:{color:"red"}},[a("strong",[e._v("grub2-set-default 0")])]),e._v(" 命令设置")],1),e._v(" "),a("p",[e._v("其中 0 是上面查询出来的可用内核")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("grub2-set-default "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-2-2-方法2、编辑-etc-default-grub-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-方法2、编辑-etc-default-grub-文件"}},[e._v("#")]),e._v(" 2.2.2 方法2、编辑 "),a("font",{attrs:{color:"red"}},[a("strong",[e._v("/etc/default/grub")])]),e._v(" 文件")],1),e._v(" "),a("p",[e._v("设置 GRUB_DEFAULT=0，通过上面查询显示的编号为 0 的内核作为默认内核：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/default/grub\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('GRUB_TIMEOUT=5\nGRUB_DISTRIBUTOR="$(sed \'s, release .*$,,g\' /etc/system-release)"\nGRUB_DEFAULT=0\nGRUB_DISABLE_SUBMENU=true\nGRUB_TERMINAL_OUTPUT="console"\nGRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=cl/root rhgb quiet"\nGRUB_DISABLE_RECOVERY="true"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-3-生成-grub-配置文件并重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-生成-grub-配置文件并重启"}},[e._v("#")]),e._v(" 2.3 生成 grub 配置文件并重启")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("grub2-mkconfig -o /boot/grub2/grub.cfg\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Generating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.16.10-1.el7.elrepo.x86_64\nFound initrd image: /boot/initramfs-5.16.10-1.el7.elrepo.x86_64.img\nFound linux image: /boot/vmlinuz-3.10.0-862.11.6.el7.x86_64\nFound initrd image: /boot/initramfs-3.10.0-862.11.6.el7.x86_64.img\nFound linux image: /boot/vmlinuz-3.10.0-514.el7.x86_64\nFound initrd image: /boot/initramfs-3.10.0-514.el7.x86_64.img\nFound linux image: /boot/vmlinuz-0-rescue-063ec330caa04d4baae54c6902c62e54\nFound initrd image: /boot/initramfs-0-rescue-063ec330caa04d4baae54c6902c62e54.img\ndone\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-4-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-验证"}},[e._v("#")]),e._v(" 2.4 验证")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -r\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("5.16.10-1.el7.elrepo.x86_64\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-5-删除旧的内核-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-删除旧的内核-可选"}},[e._v("#")]),e._v(" 2.5 删除旧的内核（可选）")]),e._v(" "),a("h3",{attrs:{id:"_2-5-1-查看系统中全部的内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-查看系统中全部的内核"}},[e._v("#")]),e._v(" 2.5.1 查看系统中全部的内核：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" -qa "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" kernel\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kernel-3.10.0-514.el7.x86_64\nkernel-ml-5.16.10-1.el7.elrepo.x86_64\nkernel-tools-libs-3.10.0-862.11.6.el7.x86_64\nkernel-tools-3.10.0-862.11.6.el7.x86_64\nkernel-3.10.0-862.11.6.el7.x86_64\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"方法一-通过-yum-remove删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-通过-yum-remove删除"}},[e._v("#")]),e._v(" 方法一：通过 "),a("font",{attrs:{color:"red"}},[a("strong",[e._v("yum remove")])]),e._v("删除")],1),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("yum remove kernel-3.10.0-514.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\nkernel-tools-libs-3.10.0-862.11.6.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\nkernel-tools-3.10.0-862.11.6.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\nkernel-3.10.0-862.11.6.el7.x86_64\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h4",{attrs:{id:"方法二-使用-yum-utils工具删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-使用-yum-utils工具删除"}},[e._v("#")]),e._v(" 方法二：使用 "),a("font",{attrs:{color:"red"}},[a("strong",[e._v("yum-utils")])]),e._v("工具删除")],1),e._v(" "),a("p",[e._v("如果安装的内核不多于 3 个，"),a("font",{attrs:{color:"red"}},[a("strong",[e._v("yum-utils")])]),e._v(" 工具不会删除任何一个。只有在安装的内核大于 3 个时，才会自动删除旧内核。")],1),e._v(" "),a("p",[e._v("安装"),a("font",{attrs:{color:"red"}},[a("strong",[e._v("yum-utils")])])],1),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" yum-utils\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("删除旧版本")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("package-cleanup --oldkernels\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("本文作者："),a("a",{attrs:{href:"https://dbsecurity.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("许怀安"),a("OutboundLink")],1),e._v(" "),a("br"),e._v("创作时间：2022.03.01\n"),a("br"),e._v("版权声明：本博客所有文章除特别声明外，均采用"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("BY-NC-SA"),a("OutboundLink")],1),e._v("许可协议。转载请禀明出处！")])])])}),[],!1,null,null,null);s.default=n.exports}}]);