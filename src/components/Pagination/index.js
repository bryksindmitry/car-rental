import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaginationButton from '../PaginationButton';

export default  class Pagination extends Component{
    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        countPages: PropTypes.number.isRequired,
        returnPageNumber: PropTypes.func
    }
    render(){
        const { countPages, currentPage } = this.props;
        const pagination =  countPages > 1 ? <div className="pagination">
                <span className="pagination__button">
                    <PaginationButton value={"«prev"} action={this.getPrevPage}/>
                </span>
                {this.getPagesNodes(currentPage)}
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

    getPagesNodes = (pageNum) =>{
        const pagesNode = [];
        const { countPages } = this.props;
        for (let i = 1; i <= countPages; i++) {
            pagesNode.push(
                <span className={`pagination__button`} key={i}>
                    <PaginationButton active={pageNum == i} value={i} action={this.setCurrentPage}/>
                </span>
            )
        }
        return pagesNode
    };

    getNextPage = () => {
        const {countPages, returnPageNumber, currentPage} = this.props;
        if(currentPage !== countPages) {
            returnPageNumber(currentPage+1)
        }

    };

    getPrevPage = () => {
        const {returnPageNumber,currentPage} = this.props;
        if(currentPage > 1){
            returnPageNumber(currentPage-1)
        }

    };

    setCurrentPage = (page) =>{
        const {returnPageNumber} = this.props;
        returnPageNumber(page);
    }
}