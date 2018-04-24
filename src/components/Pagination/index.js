import React, { Component } from 'react';
import PaginationButton from '../PaginationButton'

export default  class Pagination extends Component{
    state = {
        current: 1
    };

    render(){
        const { current } = this.state;
        const { pages } = this.props;
        const nextButton = current != pages ?
            <span className="pagination__button">
                    <PaginationButton value={"next»"} action={this.getNextPage}/>
                </span> : "";
        const prevButton= current > 1 ? <span className="pagination__button">
                    <PaginationButton value={"«prev"} action={this.getPrevPage}/>
                </span> : "";

        const pagination =  pages > 1 ? <div className="pagination">
                {prevButton}
                {this.getPagesNodes(current)}
                {nextButton}
            </div> : "";

        return(
            <div>
                {pagination}
            </div>
        );
    }

    getPagesNodes = (current) =>{
        const pagesNode = [];
        const { pages } = this.props;
        for(let y = 10; y <= pages; y=y+10) {
            for (let i = 1; i <= y; i++) {
                pagesNode.push(
                    <span className={`pagination__button`} key={i}>
                        <PaginationButton active={this.state.current == i} value={i} action={this.setCurrentPage}/>
                    </span>
                )
            }
        }
        return pagesNode
    };

    getNextPage = () => {
        const {current} = this.state;
        const {pages} = this.props;
        if(current !== pages) {
            this.setState({
                current: current+1
            });
        }
    };

    getPrevPage = () => {
        const {current} = this.state;
        if(current > 1){
            this.setState({
                current: current-1
            });
        }
    };

    setCurrentPage = (page) =>{
        this.setState({
            current: page
        })
    }
}