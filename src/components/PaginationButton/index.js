import React, { Component } from 'react';

export default  class PaginationButton extends Component{

    render(){
        const {value} = this.props;
        return(
            <button className={`pagination-button ${this.props.active ? "pagination-button--active" : "" }`} onClick={this.setPage}>{value}</button>
        )
    }

    setPage = () => {
        const {action} = this.props;
        action(this.props.value);
    }

}