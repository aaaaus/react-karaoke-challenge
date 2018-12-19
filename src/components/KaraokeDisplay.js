import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {

  // console.log("K DISPLAY PROPS ARE: ", props.selectedSong.title);

  return (
    <div className="karaoke-display">
      <h2>{props.selectedSong.title}</h2>
      <Lyrics lyrics={props.selectedSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
