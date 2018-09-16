import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity,
  Platform  
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions';

class PlaceDetailScreen extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render () {
    const { selectedPlace } = this.props;

    return (
      <View style={ styles.container }>
        <View>
          <Image source= { selectedPlace.image } style={ styles.placeImage }/>
          <Text style={ styles.placeName }>{ selectedPlace.name }</Text>
        </View>
        <View>
          <TouchableOpacity onPress= { this.placeDeletedHandler }>
            <View style={ styles.deleteButton }>
              <Icon 
                name={ Platform.OS === "android" ? "md-trash" : "ios-trash"} 
                size={30} 
                color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    
    );
  }

};

const styles = StyleSheet.create({
  container: {
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);