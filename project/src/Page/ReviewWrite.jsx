import React, { useState } from 'react';
import axios from 'axios';
import '../css/Review/ReviewWrite.css';
import { useCookies } from 'react-cookie';
import { FiLink, IconName } from "react-icons/fi";


const ReviewForm = () => {
    // 기본적인 초기값(form에서 전송될 값)
  const [rating, setRating] = useState(0);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);
  const [cookies] = useCookies(['user_id']);
  let text = '*작성하신 후기는 Pill.Yo 이용자에게 공개됩니다.\n*상품과 관련된 실제 촬영한 사진 혹은 동영상을 첨부할 때 해당 상품과 관련 없 \u00A0거나, 이미 등록된 사진, 화면 캡처 등의 무성의한 리뷰는 등록이 제한될 수 있습 \u00A0니다.\n*후기를 작성하고 올리실 때 의학적인 단어나 효능, 효과의 구체적인 표현들은 자 \u00A0제 부탁드립니다.\n*의도치핞게 식품관련 법규에 위반사항에 해당될 수 있으므로, 임의수정처리 될 수  \u00A0있습니다.'

// handle~ 은 useState로 변화하는 값을 잡아냄, 변화한 값으로 세팅하고 보낼 준비함
const handleRatingChange = (value) => {
  setRating(value);
};

const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handleCommentChange = (event) => {
  setComment(event.target.value);
};

const handleImageChange = (event) => {
  try {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  } catch (error) {
    alert('다시 시도해주세요');
  }
};
console.log('안녕'+image);



const handleSubmit = async (event) => {
  event.preventDefault();

  let formData = new FormData();
  formData.append('userid', cookies.user_id);
  formData.append('title', username);
  formData.append('review_comment', comment);
  formData.append('review_image', image);
  formData.append('review_rating', rating);

  axios
    .post('http://localhost:8888/review/edit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });



    setRating(0);
    setUsername('');
    setComment('');
    setImage(null);
  };

  return (
    <div id="form-div">
      <div className='mainSec prl'><img src="https://ifh.cc/g/qmkJwR.jpg" alt="" /><h2 style={{marginLeft:'5px'}}>Review</h2></div>
      <div className='contentBox'>
      <form className="form" id="form1" onSubmit={handleSubmit}>
          <div className="feedback">
            <div className="rating">
              <input
                type="radio"
                name="rating"
                id="rating-5"
                onChange={() => handleRatingChange(5)}
              />
              <label htmlFor="rating-5"></label>
              <input
                type="radio"
                name="rating"
                id="rating-4"
                onChange={() => handleRatingChange(4)}
              />
              <label htmlFor="rating-4"></label>
              <input
                type="radio"
                name="rating"
                id="rating-3"
                onChange={() => handleRatingChange(3)}
              />
              <label htmlFor="rating-3"></label>
              <input
                type="radio"
                name="rating"
                id="rating-2"
                onChange={() => handleRatingChange(2)}
              />
              <label htmlFor="rating-2"></label>
              <input
                type="radio"
                name="rating"
                id="rating-1"
                onChange={() => handleRatingChange(1)}
              />
              <label htmlFor="rating-1"></label>

            </div>

            <div className="name-div">
              <p>제목<span>*</span></p>
              <input
                type="text"
                id="name"
                placeholder=" 리뷰 제목을 정해주세요"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="comment-div">
              <p>리뷰 내용<span>*</span></p>
              <textarea
                id="comment"
                placeholder=" 리뷰 내용을 작성해주세요"
                value={comment}
                onChange={handleCommentChange}
                required

              ></textarea>
            </div>

            {/* <div className="image-div">
              <p>이미지</p>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && <img src={image} alt="Uploaded Preview"  style={{width:'200px',height:'200px'}}/>}
              </div> */}
              <div className='rvImgSec'>
              <div class="input-file-container">
                <p style={{float:'left'}}>이미지</p>
                <div class="input-file">
                  <p class="input-file__name">{image}</p>
                  <button type="button" class="input-file__button">
                    <i class="fas fa-upload"><FiLink/></i>
                  </button>
                  <input type="file" name="avatar" id="avatarInput" accept="image/*" onChange={handleImageChange}/>
                </div>
                <div className='rvImgarea'>
                {image && <img src={image} class="image-preview" alt="preview image"/>}
                </div>
              </div>
              <p>{text}</p>
              </div>
            

            <div className="submit-div">
              <button type="submit" className="submit-btn">
                제출하기
              </button>
            </div>
          </div>
      </form>
      </div>
    </div>
  );
};

export default ReviewForm;