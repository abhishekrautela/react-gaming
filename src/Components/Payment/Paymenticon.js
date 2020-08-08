import React from 'react';
const Paymenticon = (props) => {
  return (
    <div className="Payment-icon">
      <img src={require('../../assets/images/payment/' + props.src)} alt={props.alt} />
    </div>
  )
};
export default Paymenticon;