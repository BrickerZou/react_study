import React, { Component } from 'react'
import hello from './index.module.css'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <form action="www.baidu.com/baidu.html">
                    <p>id</p>
                    <input className={hello.title} type="text" name="id   " />
                    <p>password</p>
                    <input type="password" name="password"  />
                    <input type="button" value="Submit" />
                </form>
            </div>
        )
    }
}
