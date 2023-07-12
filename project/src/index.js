import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import App from './components/Cart/MyPage';



import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

);

reportWebVitals();
