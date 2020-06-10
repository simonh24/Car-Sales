import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/featuresActions";

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature.id)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  addFeature: feature => dispatch(addFeature(feature))
})

export default connect(null, mapDispatchToProps)(AdditionalFeature);