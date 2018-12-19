import React from 'react';
import Song from './Song'

const SongList = (props) => {

  // console.log("PROPS ARE: ", props.songs);

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song => < Song key={song.id} song={song} handleClickPlay={props.handleClickPlay}/>)}

      </tbody>
    </table>
  )
}

export default SongList;
