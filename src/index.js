import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( // react 렌더 (책 표현 : 그린다고 생각하면 돼)
  <App />, // APP 컴포넌트를 (JSX요소는 반드시 하나의 태그로 감싸야한다)
  document.getElementById('root') // index.html의 아이디가 'root'인 엘리먼트에
);