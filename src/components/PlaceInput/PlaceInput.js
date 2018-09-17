import React, { Component } from 'react';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const PlaceInput = ({ onChangeText, placeData }) => ( 
  <DefaultInput 
    placeholder="Place Name" 
    value={ placeData.value } 
    valid = { placeData.valid }
    touched = { placeData.touched }
    onChangeText = { onChangeText } />
);  




export default PlaceInput;