import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from '../components/Customer/Category';
import '../css/CustomerService.css'

const CustomerService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const nav = useNavigate();

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
    nav('/');
  };

  return (
    <div id="mainContentWrapper">
      <div className='contentBox'>
        <div className='mainSec'>
          <h2>영양제 고객센터</h2>
        </div>
        <div className="category-list">
            <Category/>
        </div>
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
        
        </div>
        <input type="submit" value="문의하기" />
      </form>
      </div>
      
    </div>
  );
};

export default CustomerService;
