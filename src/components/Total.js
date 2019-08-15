import React from "react";
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state", state)
  return{
    price: state.price,
    additionalPrice: state.additionalPrice,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Total);
