import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

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


Navigation.registerComponent("awesome-project.PlaceDetailScreen", 
  () => PlaceDetailScreen,
  store,
  Provider
);


Navigation.registerComponent("awesome-project.SideDrawerScreen", 
  () => SideDrawer
);


//Start A App
Navigation.startSingleScreenApp({
  screen : {
    screen: "awesome-project.AuthScreen",
    title: "Login"
  }
});

