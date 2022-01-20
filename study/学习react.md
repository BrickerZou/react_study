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

    类里的函数       
    1. componentWillMount  将要装载，在render之前自动调用；
    2. componentDidMount，（装载完成），在render之后自动调用

5.
        /*
            组件的三大特性
            1.state  --内部修改动态属性
            2.props  --(父子)组件传递信息/属性    ...this.props用法
            3.refs   --相当于id属性 绑定到 render() 输出的任何组件上
        */
        state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。




# week2

## 创建项目
npx create-react-app  hello_react //创建
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

## 编程式导航
1. this.props.history.push('/home') // 跳转到某一网页
1. this.props.history.go(n) //     前进或后退


    编写子路由时候遇到的bug：
         <Route path="/home/*" element={<Home/>}/>
         才能渲染之后的子路由，否则父路由不会导航更深

   










## ~~mobx~~
yarn add -D react-app-rewired customize-car @babel/plugin-proposal-decocrators

在根目录创建config-override.js写入...
``` 
   const {override,addDecoratorsLegacy} = require("customize-cra")

    module.exports = override(
    addDecoratorsLegacy()
    )
````

修改package.json [srcipts]



## redux
```javascript
const ADD_NOTE = 'ADD_NOTE';

//返回state
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // 
    case ADD_NOTE:
      return action.text;
    // 
    default:
      return state;
  }
};

//返回action
const addNoteText = (note) => {
  // 
  return {type:ADD_NOTE,text:note}
  // 
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```



```
const INCREMENT = "INCREMENT"; // define a constant for increment action types
const DECREMENT = "DECREMENT"; // define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

// define an action creator for incrementing
const incAction = () => {
  return {
    type: INCREMENT
  };
};

// define an action creator for decrementing
const decAction = () => {
  return {
    type: DECREMENT
  };
};

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);
console.log(store.getState())
store.dispatch(incAction())
console.log(store.getState())

```



```
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // 得到删除后的数组
      return  [...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
console.log(store.getState())
store.dispatch(removeItem(3))
console.log(store.getState())

```



![image-20220119235953025](C:%5CUsers%5Clenovo%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220119235953025.png)





## 配合react-redux使用

react-redux提供了两个API (provider和connect)

provider使用

```javascript
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // 在这一行下面渲染 Provider
  render(){
    return(
        <Provider store={store}>
          <DisplayMessages/>
        </Provider>
    )
  }

  // 修改这行上面的代码
};
```

dispatch和action

```javascript
const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};
```



```javascript

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// 修改这行下面的代码
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
   this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
         {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// 修改这行上面的代码

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

[        ...state.slice(0, action.index),        ...state.slice(action.index + 1, state.length)      ];

