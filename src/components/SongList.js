import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

//FUNCTIONAL COMPONENT IMPLEMENTATION
const SongList = ({ songs, selectSong }) => {
  const renderSongs = songs.map((song) => (
    <li key={song.id}>
      <p>Name: {song.title}</p>
      <button onClick={() => selectSong(song)}>Show details</button>
      <hr />
    </li>
  ));

  return <ul>{renderSongs}</ul>;
};

//gets called whenever user clicks select
//state refers to value of combined reducers in store
const mapStateToProps = (state) => {
  //anything returned here can be accessed via this.props in render
  return { songs: state.songs };
};

// {selectSong} refers to the action creator. Shortened K:V syntax
export default connect(mapStateToProps, { selectSong })(SongList);

/** 
//CLASS COMPONENT IMPLEMENTATION
class SongList extends React.Component {
  renderList() {
    //array returned here
    return this.props.songs.map((song) => {
      //jsx returns here
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//gets called whenever user clicks select
//state refers to value of combined reducers in store
const mapStateToProps = (state) => {
  //anything returned here can be accessed via this.props in render
  return { songs: state.songs };
};

// {selectSong} refers to the action creator. Shortened K:V syntax
export default connect(mapStateToProps, { selectSong })(SongList);
*/
