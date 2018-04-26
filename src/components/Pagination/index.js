import React, { Component } from 'react';
import PaginationButton from '../PaginationButton'

export default  class Pagination extends Component{

    render(){
        const { pages, current } = this.props;
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
                    <PaginationButton active={current == i} value={i} action={this.setCurrentPage}/>
                </span>
            )
        }
        return pagesNode
    };

    getNextPage = () => {
        const {pages, changePage, current} = this.props;
        if(current !== pages) {
            changePage(current+1)
        }

    };

    getPrevPage = () => {
        const {changePage,current} = this.props;
        if(current > 1){
            changePage(current-1)
        }

    };

    setCurrentPage = (page) =>{
        const {changePage} = this.props;
        changePage(page);
    }
}