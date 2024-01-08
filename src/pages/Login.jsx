import React, { useContext, useEffect, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import GradientButton from "../components/GradientButton";

import blob from "/src/assets/fingerprint.svg";
import wave from "/src/assets/wave2.svg";
import { login, register } from "../api/auth/auth";
import { Data } from "../context/DataContext";
import ErrorText from "../components/utils/ErrorText";
import { userAction } from "../action/action.js";

const Login = () => {

    const { pathname } = useLocation();
    const context = useContext(Data);
    const navigate = useNavigate();
    
    const initialError = {
        status:false,
        message:""
    }
    const initialLoginInCredentials = {
        name: "",
        phone: "",
        email: "",
        password: "",
    }

    const [error,setError] = useState(initialError);

    const [logInCredentials, setLogInCredentials] = useState(initialLoginInCredentials);

    useEffect(()=>{
        setError(initialError)
        setLogInCredentials(initialLoginInCredentials)
    },[pathname])
    const handleLogin = async (e) => {
        e.preventDefault();

        const loginResponse = await login(logInCredentials);

        if(loginResponse.success == false){
            return setError({status:true,message:loginResponse.message});
        }

        localStorage.setItem("accessToken", loginResponse.userData["accessToken"]);

        context.USER_DATA_DISPATCH({
            type: userAction.LOGGED_IN,
            payload: loginResponse.userData["user"],
        });

        return navigate("/stations", { replace: true });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const registerResponse = await register(logInCredentials);

        if(registerResponse.success == false){
            return setError({status:true,message:registerResponse.message})
        }

        context.USER_DATA_DISPATCH({
            type: userAction.LOGGED_IN,
            payload: registerResponse.userData["data"],
        });

        return navigate("/stations", { replace: true });
    };

    return (
        <section className=" w-full h-[100vh] flex-box flex-col justify-start  bg-[#f8f1ff]  ">
            <div className=" w-full flex-box flex-col h-full justify-start gap-3 mt-[4rem] z-20">
                <div className=" col-span-1 w-full  flex-box flex-col p-5 gap-5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 shadow-inner drop-shadow-lg">
                    <h1 className=" text-[4rem] font-bold bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-100 via-violet-200 to-sky-300 bg-clip-text text-transparent ">
                        {" "}
                        SparkCharge⚡
                    </h1>
                    <h1 className=" text-lg font-light text-fuchsia-100">
                        {" "}
                        Please enter your credentials to access our EV charging
                        services.
                    </h1>
                </div>

                <Form className=" col-span-1 w-1/4   border-green-400 flex-box flex-col gap-4 mt-6">
                    <h1 className=" small-title  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 shadow-inner  text-transparent bg-clip-text">
                        {pathname === "/register" ? "SignUp" : "Login"}
                    </h1>

                    {pathname === "/register" ? (
                        <>
                            <div className="w-full flex-box flex-col gap-1">
                                <h1 className=" text-xl font-semibold self-start">
                                    Name
                                </h1>
                                <input
                                    value={logInCredentials.name}
                                    onChange={(e) =>{
                                        setError(initialError)
                                        setLogInCredentials({
                                            ...logInCredentials,
                                            name: e.target.value,
                                        })
                                    }
                                    }
                                    type="text"
                                    className=" w-full px-3 py-2 focus:outline-none bg-violet-200 duration-300 focus:shadow-xl focus:shadow-violet-200 text-lg outline-violet-400 rounded-lg "
                                />
                            </div>

                            <div className="w-full flex-box flex-col gap-1">
                                <h1 className=" text-xl font-semibold self-start">
                                    Phone
                                </h1>
                                <input
                                    value={logInCredentials.phone}
                                    onChange={(e) =>
                                        setLogInCredentials({
                                            ...logInCredentials,
                                            phone: e.target.value,
                                        })
                                    }
                                    type="tel"
                                    className=" w-full px-3 py-2 focus:outline-none bg-violet-200 duration-300 focus:shadow-xl focus:shadow-violet-200 text-lg outline-violet-400 rounded-lg "
                                />
                            </div>
                        </>
                    ) : null}

                    <div className="w-full flex-box flex-col gap-1">
                        <h1 className=" text-xl font-semibold self-start">
                            Email
                        </h1>
                        <input
                            value={logInCredentials.email}
                            onChange={(e) =>{
                                setError(initialError)
                                setLogInCredentials({
                                    ...logInCredentials,
                                    email: e.target.value,
                                })
                            }
                            }
                            type="email"
                            className=" w-full px-3 py-2 focus:outline-none bg-violet-200 duration-300 focus:shadow-xl focus:shadow-violet-200 text-lg outline-violet-400 rounded-lg "
                        />
                    </div>

                    <div className="w-full flex-box flex-col gap-1">
                        <h1 className=" text-xl font-semibold self-start">
                            Password
                        </h1>
                        <input
                            value={logInCredentials.password}
                            onChange={(e) =>{
                                setError(initialError)
                                setLogInCredentials({
                                    ...logInCredentials,
                                    password: e.target.value,
                                })
                            }}
                            type="password"
                            className=" w-full px-3 py-2 focus:outline-none bg-violet-200 duration-300 focus:shadow-xl focus:shadow-violet-200 text-lg outline-violet-400 rounded-lg "
                        />
                    </div>

                    {
                        error.status == true? 
                        <ErrorText text={error.message}/>
                        :
                        null
                    }

                    <div className="w-full flex-box flex-col gap-3">
                        {pathname == "/register" ? (
                            <>
                                <GradientButton
                                    text={"SignUp"}
                                    onClickHandler={handleRegister}
                                />
                                <h1 className=" text-lg ">
                                    Already a User?{" "}
                                    <Link
                                        to={"/login"}
                                        className=" font-bold text-violet-600 underline"
                                    >
                                        Login!
                                    </Link>
                                </h1>
                            </>
                        ) : (
                            <>
                                <GradientButton
                                    text={"Login"}
                                    onClickHandler={handleLogin}
                                />
                                <h1 className=" text-lg ">
                                    New here?{" "}
                                    <Link
                                        to={"/register"}
                                        className=" font-bold text-violet-600 underline"
                                    >
                                        Sign Up
                                    </Link>{" "}
                                    for an account!
                                </h1>
                            </>
                        )}
                    </div>
                </Form>
            </div>
            <img
                src={blob}
                alt="background"
                className=" w-[25%] absolute bottom-10 right-10"
                draggable={false}
            />
        </section>
    );
};

export default Login;
