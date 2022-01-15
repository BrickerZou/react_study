import React, { Component } from 'react'
import hello from './index.module.css'

export default class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // add handleChange() and submitMessage() methods here
    handleChange=(event)=>{
      this.setState({
        input: event.target.value,
        messages: this.state.messages
      })
    }
  
    submitMessage=()=>{
      this.setState({
        input: '',
        messages: [...this.state.messages, this.state.input]
      })
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}
          </ul>
          { /* change code above this line */ }
        </div>
      );
    }
  };
/*
  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // 在这里添加 handleChange() 和 submitMessage() 方法
    handleChange=(event)=>{
      this.setState={
        input:event.target.value,
      }
  
    }
    submitMessage=()=>{
        this.setState={
          input:'',
          messages:[...this.state.messages,this.state.input]
        }
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>

          <input onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.submitMessage} >add</button>
          <ul>
            {this.state.messages.map((message,index)=>{return <li key={index}>{message}</li>})}
          </ul>
        </div>
      );
    }
  };
  */