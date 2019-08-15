import React from "react";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  console.log('props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={e => {
          e.preventDefault();
          props.addFeature(props.feature)
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
