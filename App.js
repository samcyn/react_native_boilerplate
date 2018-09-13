import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

//Redux
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register screen
Navigation.registerComponent("awesome-project.AuthScreen", 
  () => AuthScreen, 
  store, 
  Provider 
);

Navigation.registerComponent("awesome-project.SharePlaceScreen", 
  () => SharePlaceScreen,
  store,
  Provider
);

Navigation.registerComponent("awesome-project.FindPlaceScreen", 
  () => FindPlaceScreen,
  store,
  Provider
);


//Start A App
Navigation.startSingleScreenApp({
  screen : {
    screen: "awesome-project.AuthScreen",
    title: "Login"
  }
});


// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { connect } from 'react-redux';
// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';


// class App extends React.Component {
  
//   placeAddedHandler = placeName => {
//     //dispatch an action
//     this.props.onAddPlace(placeName);
//     console.log("Place Added");
//   };
//   placeDeleteHandler = () => {
//     this.props.onDeletePlace();
//     console.log("deleted", this.props.selectedPlace, this.props.places );
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };
//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   };

//   render() {
//     return (
//       <View style={ styles.container }>
//         <PlaceDetail 
//           selectedPlace = { this.props.selectedPlace } 
//           onItemDeleted = { this.placeDeleteHandler } 
//           onModalClose = { this.modalClosedHandler }/>
//         <PlaceInput onPlaceAdded = { this.placeAddedHandler } />
//         <PlaceList places = { this.props.places } onItemSelected = { this.placeSelectedHandler }/>
//       </View>
//     );
//   };
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   }
// });


// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: name => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: key => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);