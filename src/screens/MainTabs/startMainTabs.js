import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-project.FindPlaceScreen",
          label: "Find Place",
          title: "Find PLace",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerTogle"
              }
            ]
          }
        },
        {
          screen: "awesome-project.SharePlaceScreen",
          label: "Share Place",
          title: "Share PLace",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerTogle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "awesome-project.SideDrawerScreen"
        }
      }
    });
  });
};


export default startTabs;