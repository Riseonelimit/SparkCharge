export const initialState = {
    _id:null,
    name:null,
    email:null,
    phone:null,
    isAdmin:false,
    createdAt:null,
}

export const userReducer = (prevState,action)=>{

    switch(action.type){
        case "logIn":
            return {...action.payload}
    }
}