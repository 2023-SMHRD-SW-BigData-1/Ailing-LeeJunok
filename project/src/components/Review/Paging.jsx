
import '../../css/Pagination/Pagination.css'
import Pagination from "react-js-pagination";
import React from 'react'
import { useNavigate } from "react-router";
<<<<<<< HEAD
import { BiChevronLeft, BiChevronRight, IconName } from "react-icons/bi";
import { Link } from "react-router-dom";
=======
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
>>>>>>> 369c80a7be449a3dfc0af952cc62ca8856a1c990

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
<<<<<<< HEAD
        <Link to='/review/edit'><p>리뷰작성</p></Link>
=======
>>>>>>> 369c80a7be449a3dfc0af952cc62ca8856a1c990
        </div>
    )
}

export default Paging