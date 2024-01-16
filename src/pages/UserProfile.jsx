import React, { useContext, useEffect, useRef } from 'react'

import { Data } from '../context/DataContext';
import ProtectedRoute from '../components/utils/ProtectedRoute';

const UserProfile = () => {

    const user = useContext(Data).USER_DATA;

    const ChallengeRef = useRef();


    return (
        <ProtectedRoute>
            <section className=" w-full h-[100vh] relative flex-box flex-col justify-evenly  bg-[#f8f1ff]">
                <div className=" w-3/4 h-[85%] grid grid-cols-5 mt-[2em]  bg-[#f3e9ffc5] dark:bg-[#eaddffdf] backdrop-blur-md rounded-2xl">
                    <div className=" col-span-1 w-full h-full flex-container justify-start p-5 border-r-1 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 rounded-2xl border-stone-600 dark:border-stone-800  text-violet-200 ">
                        <button className=" w-full p-3  text-center rounded-xl hover:bg-violet-900 duration-200 text-lg  text-violet-200 border-2 border-violet-900 hover:text-violet-200 ">
                            Profile
                        </button>
                        <button
                            onClick={() =>
                                ChallengeRef.current.scrollIntoView()
                            }
                            className=" w-full p-3  text-center rounded-xl hover:bg-violet-900 hover:text-violet-300 duration-200 text-lg"
                        >
                            Vehicles
                        </button>
                        <button className=" w-full p-3  text-center rounded-xl hover:bg-violet-900 hover:text-violet-300 duration-200 text-lg">
                            Security
                        </button>
                        <button className=" w-full p-3  text-center rounded-xl text-red-300  hover:bg-red-700 dark:hover:text-red-200 hover:text-red-200 duration-200 text-lg">
                            Danger Zone
                        </button>
                    </div>
                    <div className="col-span-4 w-full h-full flex-container overflow-y-auto no-scrollbar gap-10 justify-start p-10">
                        <div className=" w-full flex-container relative items-start gap-10">
                            <div className="  flex-box flex-col gap-1  items-start  ">
                                <h1 className=" text-5xl text-violet-600 font-semibold ">
                                    Profile
                                </h1>
                                <p className=" text-zinc-800 ">
                                    Manage Your Profile
                                </p>
                            </div>

                            <hr className=" w-full border-stone-600" />
                            <SmallTitle text={"Username"} />
                            <UserProfileInfo className="flex-container gap-3 items-start ml-[3rem]">
                                <div className=" flex-box flex-col gap-4 items-start group ">
                                    <h1 className=" text-3xl font-semibold text-violet-400 ">
                                        {user.name}
                                    </h1>
                                    <button className=" p-2 flex-box gap-1 bg-violet-900  group-hover:visible  text-violet-200 text-[0.7rem]  rounded-lg">
                                        Change Username
                                    </button>
                                </div>
                            </UserProfileInfo>

                            <hr className=" w-full border-stone-600" />
                            <SmallTitle text={"Email"} />
                            <UserProfileInfo>
                                <h1 className=" text-3xl font-semibold text-violet-400 ">
                                    {user.email}
                                </h1>
                            </UserProfileInfo>
                        </div>
                        <hr className=" w-full border-stone-600" />
                        <div
                            ref={ChallengeRef}
                            className=" w-full flex-container items-start gap-10"
                        >
                            <div className=" flex-box flex-col gap-1 items-start">
                                <h1 className=" text-5xl text-violet-600 font-semibold ">
                                    Vehicles
                                </h1>
                                <p className=" text-zinc-800 ">
                                    Manage Your Vehicles
                                </p>
                            </div>
                            <hr className=" w-full border-stone-600" />
                            <SmallTitle text={"Current Day"} />
                            <UserProfileInfo>
                                <h1 className=" text-3xl font-semibold text-violet-400 ">
                                    {user.current_day}
                                </h1>
                            </UserProfileInfo>

                            <hr className=" w-full border-stone-600" />
                            <SmallTitle text={"Completed Days"} />
                            <UserProfileInfo>
                                <h1 className=" text-3xl font-semibold text-violet-400 ">
                                    {user.completed_days}
                                </h1>
                            </UserProfileInfo>

                            <hr className=" w-full border-stone-600" />
                            <SmallTitle text={"Next Day In"} />
                            <UserProfileInfo>
                                <h1 className=" text-3xl font-semibold text-violet-400 ">
                                    Test
                                </h1>
                            </UserProfileInfo>
                        </div>

                        <hr className=" w-full border-stone-600" />
                        <div className=" w-full flex-container items-start gap-10">
                            <div className=" flex-box flex-col gap-1 items-start">
                                <h1 className=" text-5xl text-violet-600 font-semibold ">
                                    Security
                                </h1>
                                <p className=" text-zinc-800 ">
                                    Manage your security preferences
                                </p>
                            </div>

                            <hr className=" w-full border-stone-600" />
                            <SmallTitle text={"Password"} />
                            <UserProfileInfo>
                                <h1 className=" text-3xl font-semibold text-violet-400 ">
                                    {""}
                                </h1>
                                <button className=" p-2 flex-box gap-1 bg-violet-900  group-hover:visible  text-violet-200 text-[0.7rem]  rounded-lg">
                                    Reset Password
                                </button>
                            </UserProfileInfo>

                            <hr className=" w-full border-stone-600" />
                        </div>

                        <div className=" w-full flex-container items-start gap-10 ">
                            <div className=" flex-box flex-col gap-1 items-start">
                                <h1 className=" text-5xl text-red-700 font-semibold ">
                                    Danger Zone
                                </h1>
                                <p className=" text-zinc-800 ">
                                    Action that can be dangerous
                                </p>
                            </div>

                            <hr className=" w-full border-red-600" />
                            <UserProfileInfo>
                                <h1 className=" text-lg  text-red-400 ">
                                    {"Stop the Challenge"}
                                </h1>
                                <button className=" p-2 flex-box gap-1 bg-red-800  group-hover:visible  text-red-200 text-[0.8rem]  rounded-lg">
                                    Stop Challenge
                                </button>
                                <h1 className=" text-lg font-semibold  text-red-400 ">
                                    {"Once its gone its gone"}
                                </h1>
                                <button className=" p-2 flex-box gap-1 bg-red-800  group-hover:visible  text-red-200 text-[0.8rem]  rounded-lg">
                                    Delete Account
                                </button>
                            </UserProfileInfo>

                            <hr className=" w-full border-red-600" />
                        </div>
                    </div>
                </div>
            </section>
        </ProtectedRoute>
    );
}

export const UserProfileInfo = (props) => {
    return (
      <div  className='flex-container gap-3 items-start ml-[3rem]'>
          {props.children}
      </div>
    )
  }


export const SmallTitle = ({text}) => {
    return (
      <p className=' text-md font-[500] text-zinc-800 '>{text}</p>
    )
  }
  
export default UserProfile