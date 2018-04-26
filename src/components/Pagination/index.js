import React, { Component } from 'react';
import PaginationButton from '../PaginationButton'

export default  class Pagination extends Component{
    state = {
        current: 1
    };

    render(){
        const { current } = this.state;
        const { pages } = this.props;
        const pagination =  pages > 1 ? <div className="pagination">
                <span className="pagination__button">
                    <PaginationButton value={"«prev"} action={this.getPrevPage}/>
                </span>
                {this.getPagesNodes(current)}
                <span className="pagination__button">
                    <PaginationButton value={"next»"} action={this.getNextPage}/>
                </span>
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
        for (let i = 1; i <= pages; i++) {
            pagesNode.push(
                <span className={`pagination__button`} key={i}>
                    <PaginationButton active={this.state.current == i} value={i} action={this.setCurrentPage}/>
                </span>
            )
        }
        return pagesNode
    };

    getNextPage = () => {
        const {current} = this.state;
        const {pages, changePage} = this.props;
        if(current !== pages) {
            this.setState({
                current: current+1
            });
            changePage(this.state.current)
        }

    };

    getPrevPage = () => {
        const {current} = this.state;
        const {changePage} = this.props;
        if(current > 1){
            this.setState({
                current: current-1
            });
            changePage(this.state.current)
        }

    };

    setCurrentPage = (page) =>{
        const {changePage} = this.props;
        this.setState({
            current: page
        })
        changePage(this.state.current);
    }
}