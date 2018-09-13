import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  
  Promise.all([
    Icon.getImageSource("md-map", 30, "black"),
    Icon.getImageSource("ios-share-alt", 30, "black")
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-project.FindPlaceScreen",
          label: "Find Place",
          title: "Find PLace",
          icon: sources[0]
        },
        {
          screen: "awesome-project.SharePlaceScreen",
          label: "Share Place",
          title: "Share PLace",
          icon: sources[1]
        }
      ]
    });
  });
};


export default startTabs;