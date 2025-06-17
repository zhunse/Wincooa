---
title: 重装系统
---

# 重装系统

## 前言

::: danger 准备工具
- 可以正常运行的 Win10/11系统 电脑一台
- 一个大于8GB的U盘
- 一个PE系统U盘
:::

::: warning 需要注意！
下载系统镜像时需要注意辨别系统文件是否为原装文件 没有出现被篡改过的可能 下面我给大伙推荐一个纯净官方原版镜像下载网站 **《MSDN - 系统库》**（点击下方卡片跳转）↡
:::

<Linkcard url="https://www.xitongku.com/" title="MSDN - 系统库" description="致力于原版windows生态服务" logo="/image/pe/win11.png"/>

::: details Windows官网系统镜像下载教程（点击展开）

#### 第一步

现在浏览器里面搜索 **下载 Win10**（这里推荐使用Bing.com搜索引擎）

![](/image/pe/reload-01.png)

#### 第二步

找到域名为 **www.microsoft.com** 并标有 **下载 Windows 10  光盘映像（ISO 文件）** 的网址，点击打开

![](/image/pe/reload-02.png)

#### 第三步

找到 **创建 Windows 10 安装媒体** 点击下方的额 **立即下载**

![](/image/pe/reload-03.png)

#### 第四步

打开下载的 **安装程序** 等待加载并同意 **适用的声明和许可条款** 

![](/image/pe/reload-04.png)

![](/image/pe/reload-05.png)

#### 第五步

这里我们选择第二个选项 **为另一台电脑创建安装介质（U盘、DVD 或 ISO 文件）**，下一步

![](/image/pe/reload-06.png)

#### 第六步

取消勾选 **对这台电脑使用推荐的选项** 上面的 **版本** 就选择 **Windows 10** 不要选择 **家庭版** 的（家庭版的功能有些许限制，要用就用“专业版”）

![](/image/pe/reload-07.png)

#### 第七步

选择 **ISO 文件**，下一步

![](/image/pe/reload-08.png)

#### 第八步

在桌面上创建一个文件夹来存放下载的系统镜像文件，点击 **保存** 开始下载 系统镜像

![](/image/pe/reload-09.png)

这里就等他慢慢下载吧，可能会有点慢，或者选择其他方式下载 如 上面提到的 **MSDN - 系统库**
![](/image/pe/reload-10.png)

:::

## 请选择一种安装方式

::: danger 提示
重装系统是因为系统文件损坏导致的无法正常运行 所以重装系统一般无法保留数据 会清空所有的内容

当然 如果你的电脑遇到**开机蓝屏 反复重启** 等情况 可以尝试使用**PE**系统里面提供的工具尝试修复系统引导程序 有概率恢复电脑的系统保留数据
:::

:::tabs
== A.用PE优盘安装
**优点 可以对磁盘进行更多的设置 选择更多**

将下载好的系统镜像 **.ISO 文件** 放在PE优盘里面，将PE优盘插在需要重装系统的电脑上，开机使用**BIOS**快捷键进入**BIOS**选择优盘启动（详细可查看这篇文章[制作PE系统](/initall/pe/pe)）

PE系统启动中……

![](/image/pe/reset-pe-01.png)

![](/image/pe/reload-Ventoy-11.png)

进入到PE系统后找到刚刚下载的系统镜像双击打开 按照提示的步骤进行安装

![](/image/pe/reset-pe-02.png)

下面就按照提示一步步操作即可

![](/image/pe/reload-Ventoy-12.png)

![](/image/pe/reload-Ventoy-13.png)

没有 **秘钥** 就先不管，点击下面的 **我没有产品秘钥** 先安装系统

![](/image/pe/reload-Ventoy-14.png)

选择系统版本 **推荐选择：Windows 10 专业版 后期使用的功能更多**

![](/image/pe/reload-Ventoy-15.png)

点击 **我接受许可条款** 下一页

![](/image/pe/reload-Ventoy-16.png)

选择第二个 **自定义……**

![](/image/pe/reload-Ventoy-17.png)

找到自己需要安装系统的磁盘（也就是常说的C盘） 下一步

![](/image/pe/reload-Ventoy-18.png)

等待安装完成会自动重启 重新启动后 按照指引一步步设置即可

![](/image/pe/reload-Ventoy-19.png)


== B.使用Ventoy优盘安装
**优点 可以放入更多不同版本的系统镜像**

> 提示：安装**Ventoy**会清空U盘所有内容 请提前进行备份或使用全新的U盘 建议容量 **32GB-64GB+**

需要先制作一个**Ventoy**优盘，点击进入[Ventoy官网](https://www.ventoy.net/cn/index.html) 在顶上找到**下载**

![](/image/pe/reload-Ventoy-01.png)

在页面里找到Windows版本，会跳转到**Github**页面下载

![](/image/pe/reload-Ventoy-02.png)

![](/image/pe/reload-Ventoy-03.png)

下载完成后解压工具 双击打开 **Ventoy2Disk.exe** 程序

![](/image/pe/reload-Ventoy-04.png)

在**设备**的位置选择自己的U盘 没问题就点击 安装 自动进行安装

![](/image/pe/reload-Ventoy-05.png)

安装完成后会得到两个磁盘空间 一个和原U盘大小差不多 一个只有几十MB 这个几十MB的就是 Ventoy的BIOS的引导系统 不要管他

![](/image/pe/reload-Ventoy-06.png)

我们可以把我们需要用到的系统放到 这个和原U盘大小差不多的空间里面 也可创建文件夹 进行系统分类 像我这里就创建了两个文件夹 **Linux** 和 **Windows** 把自己常用的系统镜像都放在了这些文件夹里面

![](/image/pe/reload-Ventoy-07.png)

![](/image/pe/reload-Ventoy-08.png)

下面将做好的U盘插在需要重装系统的电脑上面 通过快捷键进入BIOS使用U盘启动 进入到Ventoy界面 我们可以使用键盘的 **方向键** 进行选择 按下 **回车** 确定

> 提示：如果如要无法正常进入**Ventoy**界面可参考这个 [当“ventoy启动盘”遇到“主板安全启动”](https://blog.csdn.net/u013422664/article/details/134953107) 教程进行调整

![](/image/pe/reload-Ventoy-09.png)

选择 **以正常模式启动** 回车

![](/image/pe/reload-Ventoy-10.png)

系统安装引导加载中……

![](/image/pe/reload-Ventoy-11.png)

下面就按照提示一步步操作即可

![](/image/pe/reload-Ventoy-12.png)

![](/image/pe/reload-Ventoy-13.png)

没有 **秘钥** 就先不管，点击下面的 **我没有产品秘钥** 先安装系统

![](/image/pe/reload-Ventoy-14.png)

选择系统版本 **推荐选择：Windows 10 专业版 后期使用的功能更多**

![](/image/pe/reload-Ventoy-15.png)

点击 **我接受许可条款** 下一页

![](/image/pe/reload-Ventoy-16.png)

选择第二个 **自定义……**

![](/image/pe/reload-Ventoy-17.png)

找到自己需要安装系统的磁盘（也就是常说的C盘） 下一步

![](/image/pe/reload-Ventoy-18.png)

等待安装完成会自动重启 重新启动后 按照指引一步步设置即可

![](/image/pe/reload-Ventoy-19.png)


== C.直接使用优盘安装系统
**优点 方便快速 不需要太多准备**

这个方法其实比较简单可参考上面的 **Windows官网系统镜像下载教程** 第七步 选择 **U盘** 会直接将系统安装文件写入U盘中，然后在**BIOS**里面用U盘启动按照提示一步步安装即可

系统安装引导加载中……

![](/image/pe/reload-Ventoy-11.png)

下面就按照提示一步步操作即可

![](/image/pe/reload-Ventoy-12.png)

![](/image/pe/reload-Ventoy-13.png)

没有 **秘钥** 就先不管，点击下面的 **我没有产品秘钥** 先安装系统

![](/image/pe/reload-Ventoy-14.png)

选择系统版本 **推荐选择：Windows 10 专业版 后期使用的功能更多**

![](/image/pe/reload-Ventoy-15.png)

点击 **我接受许可条款** 下一页

![](/image/pe/reload-Ventoy-16.png)

选择第二个 **自定义……**

![](/image/pe/reload-Ventoy-17.png)

找到自己需要安装系统的磁盘（也就是常说的C盘） 下一步

![](/image/pe/reload-Ventoy-18.png)

等待安装完成会自动重启 重新启动后 按照指引一步步设置即可

![](/image/pe/reload-Ventoy-19.png)

:::


