import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import { SmurfContext } from '../contexts/SmurfContext'
import SmurfList from "./SmurfList";

function App() {

    const [smurfs, setSmurfs] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(r => {
                console.log(r.data);
                setSmurfs(r.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <SmurfContext.Provider value={{ smurfs }}>
          <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
          </div>
            <SmurfList smurfs={smurfs}/>
        </SmurfContext.Provider>
    );
}

export default App;
