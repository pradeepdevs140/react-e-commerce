import { createSlice } from "@reduxjs/toolkit";
let datafromweb = JSON.parse(localStorage.getItem("cart"))
const CartSlice = createSlice({
    name :"cart",
    initialState:datafromweb,
    reducers : {
        additem (state,action){
            alert("Item add successfully  ")
            localStorage.setItem("cart", JSON.stringify([...state]))
            state.push(action.payload)
            console.log(action)
        },
        removeitem(state ,action){
            let newproduct = state.filter( carproduct=> carproduct.id!=action.payload)
              localStorage.setItem("cart", JSON.stringify([...newproduct]))
            return newproduct

        }
    }
})
export default CartSlice.reducer
export let {additem , removeitem} = CartSlice.actions