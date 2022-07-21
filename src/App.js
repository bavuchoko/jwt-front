
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthRoute from './component/AuthRoute';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [isLogin , setIsLogin] = useState(false);

    useEffect(()=>{

    },[]);

    function loginCallBack(login){
        setIsLogin(login);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <AuthRoute exact isLogin={isLogin} path="/" component={HomePage} />
                <Route path="/login"  render={(props)=> <LoginPage {...props} loginCallBack={loginCallBack}/>} />
            </BrowserRouter>
        </div>
    );
}

export default App;