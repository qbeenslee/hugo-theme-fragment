# 警告 (admonition)

## 示例

本主题现支持5种警告模式, 分别为: `tip / note / info / error / warning`

### tip

<img width="452px" height="54px" src="https://raw.githubusercontent.com/qbeenslee/CDN/master/img/2022/09/upload_169d884ef9a71f9775c9194804289a38_57dc.jpg">

**代码**
<pre><code class="language-text">``` tip
重启电脑: 转到"开始" 菜单，选择"电源" 按钮，然后选择"重新启动"。
```</code></pre>

---

### note
<img width="273px" height="173px" src="https://raw.githubusercontent.com/qbeenslee/CDN/master/img/2022/09/upload_3547bd2425602014f0498fd8bc2e58d9_7b3c.jpg">

**代码**
<pre><code class="language-text">``` note
3种方法来重启电脑:
1. 在键盘上同时按下Ctrl+Atl+Del组合键
2. 点击电源图标
3. 点击重新启动按钮
```</code></pre>

---
### info

<img width="206px" height="27px" src="https://raw.githubusercontent.com/qbeenslee/CDN/master/img/2022/09/upload_abeb4996d931358a90563eaa7b958a74_1947.jpg">

**代码**
<pre><code class="language-text">``` info
重启电脑是很必要的操作手段
```</code></pre>

---
### error

<img width="228px" height="54px" src="https://raw.githubusercontent.com/qbeenslee/CDN/master/img/2022/09/upload_7cc2abadaddd9e47c23f72c1023b32ae_7062.jpg">

**代码**
<pre><code class="language-text">``` error
更新过程中, 请千万不要重启电脑
```</code></pre>

---

### warning
<img width="327px" height="54px" src="https://raw.githubusercontent.com/qbeenslee/CDN/master/img/2022/09/upload_95f023219c7a26f974490e784a6d5615_d890.jpg">

**代码**
<pre><code class="language-text">``` warning
异常处理, 工作时如果出现什么异常，请重启电脑 
```</code></pre>

---

## 配置和功能说明

<img width="704px" height="599px" src="https://raw.githubusercontent.com/qbeenslee/CDN/master/img/2022/09/upload_dead96c7a9825df5ce1b98bfdaf94363_b9bd.jpg">

本主题没有像一般的主题那样使用shortcode来实现admonition, 而是在md文件中采用codeblock并使用[Render Hooks for Code Blocks ](https://gohugo.io/templates/render-hooks/#render-hooks-for-code-blocks)技术(Hugo 0.93.0 +)实现.

优点:

* **markdown编写简单**
    只需要把codeblock的语言设置为`tip/note/info/error/warning` 之一

* **能力强大**
    普通codeblock只是将文字渲染成文本文字, 而它可以将内部的文字按markdown进行渲染, 甚至可以自己嵌套自己进行渲染(Hugo 0.93.0+).
    在Hugo 0.93.0以下版本, 本主题不具备以markdown进行渲染, 但是具有同样的样式.
    
    > 由于API `RenderString` 在shortcode中不支持嵌套渲染 而在[Render Hooks for Code Blocks ](https://gohugo.io/templates/render-hooks/#render-hooks-for-code-blocks)中可以现实无限嵌套渲染, 所以赋予了codeblock更强大的能力

    


