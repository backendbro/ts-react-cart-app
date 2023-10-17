export type CartItemType = {
    sku:string,
    name:string,
    price:number, 
    qty:number 
}


type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD:"ADD",
    REMOVE:"REMOVE",
    QUANTITY:"QUANTITY",
    SUBMIT:"SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE 

export type ReducerAction = {
    type:string,
    payload?: CartItemType
}

const reducer = (state: CartStateType, action:ReducerAction): CartStateType => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.ADD:{
            if (!action.payload){
                throw new Error ("action.payload missing in ADD action")
            }   
            
            
            return {...state, }
        }
    
        case REDUCER_ACTION_TYPE.REMOVE:{
            if (!action.payload){
                throw new Error ("action.payload missing in REMOVE action")
            }
            return {...state}
        }

        case REDUCER_ACTION_TYPE.QUANTITY:{
            if (!action.payload){
                throw new Error ("action.payload missing in QUANTITY action")
            }
            return {...state}
        }

        // submit this to a server. 
        case REDUCER_ACTION_TYPE.SUBMIT:{
            if (!action.payload){
                throw new Error ("action.payload missing in SUBMIT action")
            }
            return {...state, cart:[]}
        }
        
        default:
            throw new Error ("Unidentified action type") 
        }
}



