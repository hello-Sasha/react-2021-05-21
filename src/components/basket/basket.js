//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { useEffect } from 'react';

//import { Component } from 'react';
//import { connect } from 'react-redux';

const Basket = ({amount}) =>{
    
    return(
        <div>
            <p>Basket</p>
            {Object.entries(amount).map(([key,value])=>(
                <div key={key}>{key}:{value}</div>
            ))}
        </div>
    )
};



const mapStateToProps = (state, props) => ({
    //amount: state.order['d75f762a-eadd-49be-8918-ed0daa8dd024'] || 0,
    amount: state.order
    
  });
  
export default connect(mapStateToProps)(Basket);
//export default Basket;