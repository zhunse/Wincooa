---
title: 制作PE系统
---

# 制作PE系统

::: tip PE系统是什么？
PE系统是一个装在U盘或者硬盘里面的一个小小的引导系统,当你的电脑出现问题无法正常进入系统，这时候就可以插入你的PEU盘通过BIOS设置启动PE系统，在PE系统里面尝试修复系统或者重装系统，内置了许多的工具，也可以帮你优化你的电脑
:::

## 准备工具

* Win10/11系统电脑一台（可以正常使用的电脑）

* 8GB以上的U盘或者硬盘一个（制作PE系统会格式化磁盘请提前备份好文件）

## 开始制作

### 第一步
前往 [微PE官网 https://www.wepe.com.cn/](https://www.wepe.com.cn/) 下载最新版制作工具
![](/Wincooa/image/more/pe01.png)
如果提示需要捐赠就点击旁边的**先不捐赠**
![](/Wincooa/image/more/pe02.png)
![](/Wincooa/image/more/pe03.png)

### 第二步
将U盘插入电脑，打开下载好的程序，点击右下角的USB图标
![](/Wincooa/image/more/pe04.png)
这里默认就行，**点击立即安装PE到U盘，提示请务必提前备份数据并关闭安全软件**没问题就点击**开始制作**
![](/Wincooa/image/more/pe05.png)
PE系统体积比较小巧，一般情况下一分钟左右就安装完成了
![](/Wincooa/image/more/pe06.png)
安装完成，退出U盘测试一下
![](/Wincooa/image/more/pe07.png)

## 安装完成

我们需要在电脑关机的时候插入PE系统U盘，接着开机一直点按快捷键进入电脑的BIOS（各品牌电脑常用的BIOS快捷键已列在下表了）选择使用PE系统引导运行电脑

| 品牌          | 笔记本电脑 BIOS 启动快捷键 | 台式机 BIOS 启动快捷键 |
|---------------|-----------------------------|------------------------|
| **联想 (Lenovo)** | F1 或 F2                    | F1 或 F2               |
| **惠普 (HP)**      | F10                         | F10                    |
| **戴尔 (Dell)**    | F2                          | F2                     |
| **华硕 (ASUS)**    | F2                          | DEL 或 F2              |
| **宏碁 (Acer)**    | F2                          | DEL 或 F2              |
| **东芝 (Toshiba)** | F2                          | F2                     |
| **索尼 (Sony)**    | F1 或 F2 或 F3              | F1 或 F2 或 F3         |
| **三星 (Samsung)** | F2                          | F2                     |
| **苹果 (Apple)**   | 按住 Option 键              | N/A                    |
| **微星 (MSI)**     | DEL                          | DEL                    |
| **技嘉 (GIGABYTE)**| DEL                          | DEL                    |
| **华擎 (ASRock)**  | DEL                          | DEL                    |
| **英特尔 (Intel)** | F2                          | F2                     |
| **神舟 (Hasee)**   | F2                          | F2                     |
| **方正 (Founder)** | DEL                          | DEL                    |
| **清华同方 (Tongfang)** | F2                   | F2                     |
| **海尔 (Haier)**   | F2                          | F2                     |
| **明基 (BenQ)**    | F2                          | F2                     |


这里就用华硕天选三做演示 按下电源键开机 一直按 F2 快捷键进入BIOS 按下 F8 选择使用 U盘启动 回车确认
![](/Wincooa/image/more/pe08.jpg)
![](/Wincooa/image/more/pe09.jpg)
进入系统后可以看见系统非常的简洁，内置了许多的系统调试工具
![](/Wincooa/image/more/pe10.jpg)
我这里使用的是一个64GB的优盘操作，PE安装完成后还剩下57GB可以当普通U盘使用，当正常插入电脑的时候是不会显示PE系统分区的。

此时我们也可以将我们常用的一些系统镜像（win10 Win11）放在这个U盘里面，当电脑出现无法进入系统的时候就可以直接使用PE系统来重装系统，关于PE系统的详细使用说明可以前往官网了解

[友情链接：微PE优盘使用说明书](https://www.wepe.com.cn/ubook/)