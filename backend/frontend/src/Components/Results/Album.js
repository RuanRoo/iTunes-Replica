import React from 'react';

// Album component that renders the informtaion for each instance received from the api

class Album extends React.Component {
 
  getSrcSet = (artworkUrl100) => 
  {
    let artworkUrl = artworkUrl100.replace('100x100bb.jpg', '');

    let artwork1x = artworkUrl + '200x200bb.jpg 1x';
    let artwork2x = artworkUrl + '400x400bb.jpg 2x';

    return artwork1x + ", " + artwork2x;
  }


    render() {
      const albumResult = {
        key: this.props.trackId,
        artworkUrl100: this.props.artworkUrl100,
        kind: this.props.kind,
        trackName: this.props.trackName,
        artistName: this.props.artistName,
        collectionName: this.props.collectionName
      }
      return(
        <div className="album-container">
          <div className="image-container">
            <i key={this.props.trackId}>
            <img className="img-responsive" srcSet={this.getSrcSet(this.props.artworkUrl100)} alt={this.props.collectionName} />
            <div className="top-left"> { this.props.kind } </div>
          <div className="album-text">
            <h5 className="name">
            { this.props.trackName } </h5>
          <div className="description">
          <button className='heart' onClick={() => this.props.addFavourite(albumResult)}></button>
            <p> { this.props.artistName }</p>
          </div>
        </div>
        </i>
        </div>
      </div>
    )
  }
}



export default Album;