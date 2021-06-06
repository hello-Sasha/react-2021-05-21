import { DECREMENT, INCREMENT, ADDTOCART } from '../constants';

// { [productId]: amount }
export default (state = [], action,  ) => {
  const { type, id, name, price, amount } = action;
  switch (type) {
    case INCREMENT:
      return { ...state,   [id]: (state[id] || 0) + 1 };
  //  case DECREMENT:
 //     return { ...state, [id]: (state[id] || 0) - 1 };
    case ADDTOCART:
    return {
      ...state,
      id: [id],
      name: [name],
      price: [price],
      amount: [amount]
     
    }
   
    default:
      return state;
  }
};
