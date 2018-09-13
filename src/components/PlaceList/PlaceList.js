import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = ({ places, onItemSelected }) => {
  
  return (
    <FlatList 
      style = { styles.listContainer }
      data = { places }
      renderItem = { (info) => (
        <ListItem
          placeName= { info.item.name }
          placeImage = { info.item.image } 
          onItemPress = { () => onItemSelected(info.item.key) } />
      ) }
      keyExtractor = { (item, index) => index.toString() }
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;