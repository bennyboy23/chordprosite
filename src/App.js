import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChordEditor from './components/ChordEditor';
import {BrowserRouter, Route, Link} from 'react-router-dom';


class App extends Component {
    constructor(){
        super();
        this.updateSong = this.updateSong.bind(this);
        this.state = {
            songs:{
        "1":{id:1,chordpro:"Type lyrics."},
        "2":{id:2,chordpro:"Type lyrics here."}
        }};
    }
    updateSong(song){
        const songs = {...this.state.songs};
        songs[song.id] = song;
        this.setState({songs})
    }
  render() {
    return (
      <div>
        <Header/>
          <BrowserRouter>
              <div className="main-content">
                    <div className="workspace">
                        <Route exact path="/songs" render={(props) =>{
                        const songIds = Object.keys(this.state.songs);
                            return(
                                <ul>
                                    {songIds.map((id) => {
                                       return( <li key={id}>
                                        <Link to={`/songs/${id}`}>Song {id}</Link>
                                        </li>)
                                    })}
                                </ul>
                            )
                        }}/>
                        <Route path="/songs/:songId" render={(props)=>{
                           const song = this.state.songs[props.match.params.songId];
                           return(
                               song ?
                            <ChordEditor song={song} updateSong={this.updateSong}/>
                                   : <h1>Song not found</h1>
                           )}} />


                    </div>
                  </div>
          </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
