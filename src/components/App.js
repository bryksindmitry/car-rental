import React, { Component } from 'react'
import Main from './Main'
import Content from './Content'

export default class App extends Component{
    render(){
        return(
            <div>
            <Main/>
            <Content/>
            </div>
        )
    }
}