import React, { Component } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import  Home from './components/Home'
import  About from './components/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
            {/* Router有两种
                1.BrowserRouter 以 / 分隔
                2.HashRouter    以 #
            
            */}
                <BrowserRouter>
                <div>
                    {/* 编写路由链接，跳转到的网页url
                    初始写法
                     <NavLink  className="list-group-item" to="/about">About</NavLink>
                     <br/>
                    <NavLink  className="list-group-item" to="/home">Home</NavLink> */}

                    {/* 标签中间的内容也是props的一个特殊属性children.标签所有属性全部通过props传递*/}
                    
                    <MyNavLink to="/home" >Home</MyNavLink>  {/* 等同于  <MyNavLink to="/home" children="Home"></MyNavLink>*/}
                    <MyNavLink to="/about">About</MyNavLink>
               
                </div>
                
                <div className='panel-body'>
               
                    {/* 注册路由，网页跳转到的页面内容*/}
                    
                        <Routes>
                            {/* 匹配成功就break 提高效率 */}
                            
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            
                        </Routes>
                </div>
                </BrowserRouter>

                

                
            
            </div>
        )
    }
}
