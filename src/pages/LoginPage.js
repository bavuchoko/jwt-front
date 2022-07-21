import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { refreshToken } from '../utils';

function LoginPage(props){

    function joinHandler(){
        try{
            let data = {
                username: "admin@email.com",
                password: "admin",
                grant_type: "password"
            };
            axios.post("/api/oauth/token" ,qs.stringify(data), {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    "Authorization": 'Basic bXlBcHA6cGFzcw==',
                }})
                .then(res =>{
                    console.log(res);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
                    props.loginCallBack(true);
                    props.history.push("/");
                    //이부분 추가함 60초 뒤에 refresh token이 실행되도록 수정.
                    //이후 refresh token에서 자동으로 setTimeout이 발생해 주기적으로 access Token이 갱신됨
                    setTimeout(function(){
                        refreshToken(null);
                    } , 60 * 1000);
                })
                .catch(ex=>{
                    console.log("login requset fail : " + ex);
                })
                .finally(()=>{console.log("login request end")});
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        console.log("LoginPage render ... ");
    })
    return(
        <div>
            <span>Login Page</span>

            <button type="button" onClick={joinHandler}>Join</button>
        </div>
    )
}

export default LoginPage;