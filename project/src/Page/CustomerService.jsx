import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CustomerService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (event.target.checked) {
      setCategories([...categories, selectedCategory]);
    } else {
      setCategories(categories.filter((category) => category !== selectedCategory));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 추후 DB 구조가 완성되면 여기서 결정된 name, email, messsage, categories 를 따로 전송

    // 처음 화면 페이지 이동
    history.push('/');
  };

  return (
    <div className="page-overlay">
      <style>
        {`
          body {
            font-family: "GmarketSansMedium";
            background-image: url('https://img.freepik.com/premium-vector/grass-green-gradient-tones-background_23-2148381990.jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
          }

          .page-overlay {
            background-color: rgba(255, 255, 255, 0.9);
            position: relative;
            z-index: 1;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            animation: fade-in 1s ease-in-out;
            max-width: 600px;
            margin: 0 auto;
          }

          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            animation: fade-in 1s ease-in-out;
          }

          .contact-form {
            margin-top: 30px;
            animation: slide-up 1s ease-in-out;
          }

          .form-group {
            margin-bottom: 20px;
            animation: fade-in 1s ease-in-out;
          }

          label {
            display: block;
            font-weight: bold;
            color: #555;
            margin-bottom: 6px;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 4px;
            background-color: #F9F9F9;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            animation: fade-in 1s ease-in-out;
          }

          input[type="text"]:focus,
          input[type="email"]:focus,
          textarea:focus {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
          }

          textarea {
            height: 150px;
          }

          input[type="submit"] {
            padding: 12px 24px;
            background-color: #4CAF50;
            color: #FFFFFF;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            animation: fade-in 1s ease-in-out;
          }

          input[type="submit"]:hover {
            background-color: #45A049;
          }

          .category-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 10px;
            gap: 10px;
          }

          .category-item {
            flex-basis: calc(33.33% - 20px);
            margin-bottom: 10px;
            position: relative;
            cursor: pointer;
          }

          .category-checkbox {
            display: none;
          }

          .category-label {
            position: relative;
            padding: 15px 20px;
            border-radius: 50px;
            background-color: #F9F9F9;
            transition: background-color 0.3s ease;
            text-align: center;
            font-weight: bold;
          }

          .category-checkbox:checked + .category-label {
            background-color: #4CAF50;
            color: #FFFFFF;
            transform: scale(1.2);
            transition: transform 0.3s ease;
          }
        `}
      </style>
      <h1>영양제 고객센터</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">메시지</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>문의 카테고리</label>
          <div className="category-list">
            <div className="category-item">
              <input
                type="checkbox"
                id="category1"
                value="카테고리1"
                className="category-checkbox"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category1" className="category-label">
                카테고리1
              </label>
            </div>
            <div className="category-item">
              <input
                type="checkbox"
                id="category2"
                value="카테고리2"
                className="category-checkbox"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category2" className="category-label">
                카테고리2
              </label>
            </div>
            <div className="category-item">
              <input
                type="checkbox"
                id="category3"
                value="카테고리3"
                className="category-checkbox"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category3" className="category-label">
                카테고리3
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="문의하기" />
      </form>
    </div>
  );
};

export default CustomerService;
