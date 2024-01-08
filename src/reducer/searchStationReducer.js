export const initialState = {

}


export const searchStationReducer = (prevState,action)=>{
    switch (action.type){
        case "add" :
            return [...action.payload]
        case "update" :
            return [...prevState,...action.payload];

        case "reset" :
            return null;    
    }   
}