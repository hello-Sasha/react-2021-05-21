import { createStore } from 'redux';

function orderTypeReducer  (state , action ) {
  switch (action.type){
    case 'ADDTOCART':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          amount: action.amount
        }
      ]
    case 'REMOVEFROMCART':
      return[
        ...state,

      ]
    default:
      return state
  }
};

const initialCart=[] ;
const store = createStore(orderTypeReducer, initialCart);

store.dispatch({
  type: 'ADDTOCART',
  id: 1,
  name: 'chicken',
  price: 12,
  amount: 1
});
store.getState() ;

