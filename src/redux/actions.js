import { DECREMENT, INCREMENT, ADDTOCART   } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
//export const increment = (id,  namee, price) => ({ type: INCREMENT, id,   name: namee, price: price });
export const decrement = (id) => ({ type: DECREMENT, id });
//export const setname = ( name) => ({ type: SETNAME, name }); //
//export const addnewproduct = ( id) => ({ type: ADDNEWPRODUCT, id }); //
export const addtocart  = (id, name, price, amount) => ({ type: ADDTOCART, id, name, price, amount });
   
