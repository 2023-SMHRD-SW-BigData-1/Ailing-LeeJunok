
import '../../css/Pagination/Pagination.css'
import Pagination from "react-js-pagination";
import React from 'react'
import { useNavigate } from "react-router";
import { BiChevronLeft, BiChevronRight, IconName } from "react-icons/bi";
import { Link } from "react-router-dom";

const Paging = ({count,setpage,page}) => {
    const navi = useNavigate();
    
    const handlePageChange = (page) => {
        setpage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="pagination">
        <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={<BiChevronLeft/>}
        nextPageText={<BiChevronRight/>}
        limit={5}
        onChange={handlePageChange}
        />
        <Link to='/review/edit'><p>리뷰작성</p></Link>
        </div>
    )
}

export default Paging