import './App.css';
import Axios from "axios";
import {useState} from "react";



function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const url = "https://api.lyrics.ovh/v1/" + artist + "/" + song + "/"
  

  function searchLyrics() {
    console.log(url);
    console.log(artist);
    console.log(song);

    if (artist === "" || song === "") {
      return;
    } 
     Axios.get(url).then(res => {
      setLyrics(res.data.lyrics);
    })
  }

  return (
    <div className="App">
      <h1>Апликацијата на Ангела за избор на текст од песна</h1>

      <input className="inp" type="text" placeholder='Име на изведувач'
      onChange={(e) => {
        setArtist(e.target.value)
        console.log(artist)}}/>
       <input className="inp" type="text" placeholder='Име на песната'
      onChange={(e) => {
        setSong(e.target.value)
        console.log(song)}}/>
        <button className="btn" onClick={() => searchLyrics()}>Пребарaj</button>
        <hr/>

        <pre>{lyrics}</pre>      
    </div>
  );
}

export default App;
