import React, { Component } from 'react';

export default (OriginComponent)=> class WrappedComponent extends Component{
    
    state = {
        isOpen: false
    }

    render(){
        return <OriginComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}