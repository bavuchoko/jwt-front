import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({isLogin , component : Component , render, ...rest }){


    useEffect(()=>{
        console.log("AuthRoute render path : " + rest.path + " isLogin : " + isLogin);
    })


    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )

            }
        />
    )
}
export default AuthRoute;