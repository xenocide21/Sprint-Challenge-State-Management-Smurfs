import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import { SmurfContext } from '../contexts/SmurfContext'
import SmurfList from "./SmurfList";
import SmurfForm from './SmurfForm'
import Search from "./SearchByName";

function App() {

    const [smurfs, setSmurfs] = useState([])
    // const [findSmurf, setFindSmurf] = useState([])
    //
    // useEffect(()=>{
    //     axios
    //         .get('http://localhost:3333/smurfs/')
    //         .then(r => {
    //             setFindSmurf(r.data.name)
    //         })
    // })


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
            <h1>Smurfs in Smurf Village</h1>
          </div>
            <SmurfForm />
            <Search/>
            <SmurfList smurfs={smurfs}/>
        </SmurfContext.Provider>
    );
}

export default App;
