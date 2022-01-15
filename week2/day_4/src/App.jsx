import React, { Component } from 'react'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import  Home from './components/Home'
import  About from './components/About'

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
                    {/* 编写路由链接，跳转到的网页url */}
                
                    <Link to="/about">About</Link>
                    <br />
                    <Link to="/home">Home</Link>
               
                </div>
                
                <div>
                    {/* 注册路由，网页跳转到的页面内容*/}
                    
                        <Routes>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                </div>
                </BrowserRouter>

                

                
            
            </div>
        )
    }
}
