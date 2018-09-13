import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";


const initialState = {
  places: []
};

const placesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://i.ytimg.com/vi/Ww5k4pn8BGc/maxresdefault.jpg"
          }
        })
      };
  
    case DELETE_PLACE:
      console.log("deleting..")
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default placesReducer;
