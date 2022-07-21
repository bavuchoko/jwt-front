import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.interceptors.response.use(
    function (response) {
        /*
            http status가 200인 경우
            응답 성공 직전 호출됩니다.
            .then() 으로 이어집니다.
        */
        return response;
    },
    function (error) {
        /*
            http status가 200이 아닌 경우
            응답 에러 직전 호출됩니다.
            .catch() 으로 이어집니다.
        */
        //401은 Access Token or Refresh Token 이 invalid 될때
        //response data의 code값이
        // 4401 : access Token error , 4402: refresh Token error
        if(error.response.status === 401){
            if(error.response.data.code === '4401'){
                window.location.href= '/';
            }
        }
        return Promise.reject(error);
    }
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
