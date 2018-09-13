// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

//Register screen
Navigation.registerComponent("awesome-project.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-project.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-project.FindPlaceScreen", () => FindPlaceScreen);


//Start A App
Navigation.startSingleScreenApp({
  screen : {
    screen: "awesome-project.AuthScreen",
    title: "Login"
  }
});

