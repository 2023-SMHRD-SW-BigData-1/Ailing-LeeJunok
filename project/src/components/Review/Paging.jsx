

import Pagination from "react-js-pagination";
import React from 'react'
import { useNavigate } from "react-router";

const Paging = ({count,setpage,page}) => {
    const navi = useNavigate();
    
    const handlePageChange = (page) => {
        setpage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="reviewBottom">
        <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        limit={5}
        onChange={handlePageChange}
        />
        </div>
    )
}

export default Paging