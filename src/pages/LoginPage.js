import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
function LoginPage(props){

    function joinHandler(){
        try{
            let data = {
                username: "admin@email.com",
                password: "admin",
                grant_type: "password",
            };
            console.log(data)
            axios.post("/api/oauth/token" ,qs.stringify(data), {

                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic bXlBcHA6cGFzcw=='
                }})
                .then(res =>{
                    console.log("res.data.accessToken : " + res.data['access_token']);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
                    props.loginCallBack(true);
                    props.history.push("/");
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