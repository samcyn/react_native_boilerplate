import React, { Component } from 'react';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const PlaceInput = ({placeName, onChangeText }) => ( 
  <DefaultInput 
    placeholder="Place Name" 
    value={ placeName } 
    onChangeText = { onChangeText } />
);  




export default PlaceInput;