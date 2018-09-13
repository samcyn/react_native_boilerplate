import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = ({ selectedPlace, onItemDeleted, onModalClose }) => {
  let ModalContent = null;

  if (selectedPlace) {
    ModalContent = (
      <View>
        <Image source= { selectedPlace.image } style={ styles.placeImage }/>
        <Text style={ styles.placeName }>{ selectedPlace.name }</Text>
      </View>
    );
  };
  
  return (
    <Modal 
      onRequestClose={ onModalClose } 
      visible={ selectedPlace !== null } 
      animationType="slide">
      <View style={ styles.ModalContent }>
        { ModalContent }
        <View>
          <TouchableOpacity onPress= { onItemDeleted }>
            <View style={ styles.deleteButton }>
              <Icon name="trash" size={30} color="red" />
            </View>
          </TouchableOpacity>
          <Button title = "Close" onPress = { onModalClose }/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default PlaceDetail;