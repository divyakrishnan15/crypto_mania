import React,{useReducer,useContext,createContext} from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();


const cartReducer =(state,action)=>{
  switch (action.type){
      case "ADD_TO_CART":
          return [...state, action.item]
      case "REMOVE_FROM_CART":
        const newArr = [...state]
        newArr.splice(action.index,1)
        return newArr
      case "INCREASE_QTY":
        const eachitem=state.find(i=>i.id===action.index)
        eachitem.qty=eachitem.qty+1
        return [...state,action.item]
      case "DECREASE_QTY":
        return {count:state.count-1}
      case "CHANGE_CART_QTY":
          return {...state, cart:state.cart.filter((i)=> i.id === action.payload ? (i.qty = action.payload.qty) : i.qty)}
      default:
          // return state
          throw new Error(`error = ${action.type}`)
  }
}

export function CartProvider({children}) {


    const [state,dispatch]=useReducer(cartReducer,[])
    

    return (
     <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
             {children}
        </CartStateContext.Provider>
     </CartDispatchContext.Provider>


  )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)

