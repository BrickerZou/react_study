# 块内元素
div p h1~h6
# 行内元素
span img a


<br>空行

<hr>————分割线


# 自闭合标签
  meta：定义页面说明，方便网络引擎搜索
  link:连接外部CSS文件或者脚本
  base：页面所有连接的基础定位
  br：换行 (
  元素是一个空的 HTML 元素。由于关闭标签没有任何意义，因此它没有结束标签。)
  hr:水平线
  input:定义表单元素
  img:图像标签


# 属性
## 链接
<a href="/i/w3school_logo_white.gif" download="w3logo"--下载文件名 target="_blank "--打开方式>

## 框 
<input type="text" value="文本框内的值"></input>

## 文本
<p><strong></strong>--加粗<em></em>--斜体</p>
<p><abbr title="c是一个字母">c</abbr>xxxx</p>  当鼠标指向c时，会出现title里的提示
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote> //cite是引用的url,来源

## 图片
<img src=" " alt="this is a img"//当图片不存在或者加载不出来时候显示alt的内容></img>

# 列表
无序
<ul>
    <li></li>
</ul>

有序
<ol>
    <li></li>
</ol>

# 表格
<table border="1">
  <tr>
    //表头
    <th>Month</th> 
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>

/*
Month	Savings
January	$100
February	$80
*/


# form表单
<form action="/demo/demo_form.asp"> //跳转到的链接
<label for="id的name">firstname</label> //不换行 
<input type="text" name="firstname" value="Mickey">
<label>
<input type="password" name="lastname" placeholder="LastName">
<br><br>
<input type="submit" value="Submit">
</form> 

<p>如果您点击提交，表单数据会被发送到名为 demo_form.asp 的页面。</p>
