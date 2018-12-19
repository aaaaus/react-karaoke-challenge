import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
//import songs from '../data/songs'; //comment out when db is turned on

const API = "http://localhost:4000/users/1/songs"

class KaraokeContainer extends Component {

  state = {
    songs: [],
    selectedSong: [],
    filterText: ''
  }

  componentDidMount() {
    //fetch songs from db instead!
    fetch(API).then(resp => resp.json()).then(songData => {
      this.setState({
        songs: songData
      })
    })
  }

  handleClickPlay = (id) => {
    const song = this.state.songs.find(song => song.id === id )
    this.setState({
      selectedSong: song
    })
  }

  handleFilter = (event) => {
    // console.log(event.target.value);
    this.setState({
      filterText: event.target.value
    })
  }

  //filter works because when filterText equals '' all songs are true and full array of songs is returned
  filteredSongs = () => {
    return this.state.songs.filter(song => song.title.includes(this.state.filterText))
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
          handleFilter={this.handleFilter} />
          <SongList
          songs={this.filteredSongs()}
          handleClickPlay={this.handleClickPlay} />
        </div>
        <KaraokeDisplay selectedSong={this.state.selectedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
