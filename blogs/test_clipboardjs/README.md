# 测试clipboardjs在移动端的兼容性

@(blog-简书)

***

`目录`

[TOC]

***

## 相关链接
[clipboard.js](https://clipboardjs.com/)

[github仓库地址](https://github.com/NicholasNC/nicholasnc.github.com/tree/master/blogs/test_clipboardjs3)

[Demo地址](http://nicholasnc.github.io/blogs/test_clipboardjs)

## 测试结果
`clipboard.js` 有8中使用方式，详细可见[clipboard.js Demo](https://github.com/zenorocha/clipboard.js/tree/master/demo)


移动端**可以**使用的浏览器有：（8中方式都可以）
- 安卓 微信 版本 `6.5.4`
- 安卓 Chrome、Opera
- IOS 微信 版本 `6.5.3`
- IOS Safari `iOS 10.2.1`
- IOS UC浏览器

**不可使用**的浏览器：（8中方式都不行）
- 安卓 UC浏览器 版本 `v11.4.1.939`
- 安卓 QQ浏览器 版本 `7.3.0.3026`

## 使用建议
在安卓的UC 和 QQ 浏览器上虽然不能使用 clipboardjs ，但是使用 `target-input` 和 `target-textarea` 时可以出现下图效果：

![](http://image.talkmoney.cn/2017-03-03/20170303084802.jpg)

在UC下可以直接出现复制的选项，而QQ浏览器则不行。

按照渐进增强的原则，使用`target-input` 和 `target-textarea`更加妥当。



