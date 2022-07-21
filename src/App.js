import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthRoute from './component/AuthRoute';
import { useEffect, useState } from 'react';
import { refreshToken } from './utils';

function App() {
    const [isLogin , setIsLogin] = useState(false);
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        try{
            refreshToken(loginCallBack);
        }catch(e){
            console.log(e);
        }
    },[]);

    function loginCallBack(login){
        setIsLogin(login);
        setLoading(true);
    }

    if(loading){
        return (
            <div className="App">
                <BrowserRouter>
                    <AuthRoute exact isLogin={isLogin} path="/" component={HomePage} />
                    <Route path="/login"  render={(props)=> <LoginPage {...props} loginCallBack={loginCallBack}/>} />

                </BrowserRouter>

            </div>
        );
    }else{
        return (
            <div>
                Loading ....
            </div>
        )
    }
}

export default App;