import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:05" },
    { title: "smells like", duration: "2:03" },
    { title: "waterfalls", duration: "7:00" },
    { title: "fly eagle", duration: "3:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
