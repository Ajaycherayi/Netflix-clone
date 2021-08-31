import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { Actions, NetflixOriginals } from "./urls";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={NetflixOriginals} title='Netflix Originals' />
     <RowPost url={Actions} title='Actions' isSmall  />
    </div>
  );
}

export default App;
