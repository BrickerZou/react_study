# week1
1.JS语法规则
        1.定义虚拟DOM时，不要写引号。
        2.标签中用到js表达式:变量时要用{}!
        3.样式类名制定class变className
        4.内联样式 style={{key:value}}
        5.只有一个根标签 可以把多个标签放在根便签内部
        6.自定义组件 首字母大写

2.html渲染组件
```ReactDOM.render(<组件/>,document.hgetElementById("root"))```


3.react 的列表中每个要有单独的key
```data.map((item,index)=>{return <li key={index}>{item}</li>})```


4.
创建类式组件
创建react中的类  extends React.Component 构造器可以省略
    1.必须继承React.Component父类
    2.必须加render
    3.必须有返回值


# week2

## 创建项目
npm create-react-app  hello_react //创建
npm start // 启动服务器,默认3000端口
-node_modules 用到的库
-public  index.html
-src   需要写的 .css .jsx





## route路由
    1.npm add react-route-dom
    2.import {Link,BrowserRouter,Route,Routes} from 'react-router-dom' //{}引入需要的API
    3.编写路由链接
    ```javascript
    <Browser>
        <Link to="/about">About</Link>
        <br />    
        <Link to="/home">Home</Link>
        4.注册路由
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

    </Browser>

    ```

