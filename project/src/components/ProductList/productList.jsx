
import React from "react";
// 여기를 사용하면 보여요 productBox는 비유하자면 하나의 html 겸 div
function productList() {
    return (
      <div className="App">
        <productBox
          imageUrl="https://health.chosun.com/site/data/img_dir/2019/12/20/2019122002250_0.jpg"
          productName="상품 이름"
          productDescription="설명"
        />
  
        <productBox
          imageUrl="https://health.chosun.com/site/data/img_dir/2019/12/20/2019122002250_0.jpg"
          productName="상품 이름"
          productDescription="설명"
        />
  
        <productBox
          imageUrl="d"
          productName="상품 이름"
          productDescription="어?"
        />
      </div>
    );
  }
  export default productList;