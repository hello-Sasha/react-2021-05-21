import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { decrement, increment, addtocart } from '../../redux/actions';
import {useState} from 'react';

const Product = ({ product, amount, increment, decrement, fetchData, addtocart    }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

const [newAmount, setnewAmount] = useState(0);
  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
              {newAmount}
            
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
               // onClick={decrement}
                onClick={() => {
                  decrement();
           
                }}
                data-id="product-decrement"
              >
                <Minus />
              </button>
              <button
                className={styles.button}
                onClick={() => {
                  setnewAmount(newAmount+1);
                   addtocart();
                //increment();
                 
      
                 
                }}
                data-id="product-increment"
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  fetchData: PropTypes.func,
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
 
    amount: state.order[props.product.id] || 0,
    activeitem: state.order[props.product.id] || 0,
    
    
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props, state) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  addtocart: ()=> dispatch(addtocart(props.product.id,props.product.name, props.product.price, props.newAmount ))
  //setname: ()=>dispatch(setname( props.product.name)),
  //addnewproduct:() =>dispatch(addnewproduct(props.product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
