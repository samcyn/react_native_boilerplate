import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ placeName, placeImage, onItemPress }) => (
  <TouchableOpacity onPress = { onItemPress } >
    <View style = { styles.listItem } >
      <Image resizeMode="contain" resizeMethod="resize" source = { placeImage } style={ styles.placeImage }/>
      <Text>{ placeName }</Text>
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#EEE",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});


export default ListItem;