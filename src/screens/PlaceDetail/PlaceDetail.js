import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity,
  Platform,
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions';

class PlaceDetailScreen extends Component {
  constructor (props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  state = {
    viewMode: "portrait"
  }

  componentWillUnmount () {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render () {
    const { selectedPlace } = this.props;

    return (
      <View 
        style={ [
          styles.container, 
          this.state.viewMode === "portrait" 
          ? styles.portraitContainer 
          : styles.landscapeContainer 
        ]}>
        <View style = { styles.subContainer }>
          <Image source= { selectedPlace.image } style={ styles.placeImage }/>
        </View>
        <View style = { styles.subContainer }>
          <View>
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
      </View>
    
    );
  }

};

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
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
  },
  subContainer: {
    flex: 1
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);