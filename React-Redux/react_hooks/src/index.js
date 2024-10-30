import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./modules/root";
import { Provider } from "react-redux";
// import "./redux_basic/exercise";

// 스토어 등록
// 스토어에 모든 리듀서 모듈의 state 값을 한곳에서 관리
const store = configureStore({
    reducer: rootReducer,
})
console.log("state = ", store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
// 모든 컴포넌트가 스토어의 state 를 조회할 수 있도록 설정
root.render(
   <Provider store={store}>
     <App />
  </Provider>
);

reportWebVitals();
