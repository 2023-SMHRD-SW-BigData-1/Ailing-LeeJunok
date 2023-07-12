

import Pagination from "react-js-pagination";
import React, { useState } from 'react'

const Paging = ({count}) => {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };
    return (
        <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        />
    )
}

export default Paging