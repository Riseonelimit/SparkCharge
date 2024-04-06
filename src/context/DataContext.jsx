import React, { createContext, useReducer, useState } from "react";
import { initialState, userReducer } from "../reducer/userReducer";
import { searchStationReducer } from "../reducer/searchStationReducer";

export const Data = createContext();

const DataContext = (props) => {
    const [loading, setLoading] = useState(true);
    const [userData, userDataDispatch] = useReducer(userReducer, initialState);
    const [searchStationData, useSearchStationDispatch] = useReducer(
        searchStationReducer,
        null
    );

    return (
        <Data.Provider
            value={{
                loading,
                setLoading,
                USER_DATA: userData,
                USER_DATA_DISPATCH: userDataDispatch,
                SEARCH_STATION: searchStationData,
                SEARCH_STATION_DISPATCH: useSearchStationDispatch,
            }}
        >
            {props.children}
        </Data.Provider>
    );
};

export default DataContext;
