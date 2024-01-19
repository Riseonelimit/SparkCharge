export const initialState = {
    _id:null,
    name:null,
    email:null,
    phone:null,
    isAdmin:false,
    createdAt:null,
    vehicles:[]
}

export const userReducer = (prevState,action)=>{

    switch(action.type){
        case "logIn":
            return {...prevState,...action.payload}
        case "logOut":
            return initialState
        case "updateVehicles":
            return {...prevState,vehicles:action.payload}
    }
}