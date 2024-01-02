import React, { createContext, useReducer } from 'react'
import { initialState, userReducer } from '../reducer/userReducer';

export const Data = createContext();

const DataContext = (props) => {

    const [userData,userDataDispatch] = useReducer(userReducer,initialState);

  return (
    <Data.Provider value={{
      USER_DATA:userData,
      USER_DATA_DISPATCH:userDataDispatch,
    }}>
      {props.children}
    </Data.Provider>
  )
}

export default DataContext