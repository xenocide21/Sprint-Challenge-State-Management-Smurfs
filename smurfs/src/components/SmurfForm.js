import React, {useState} from 'react'
import axios from 'axios'

export default function SmurfForm() {

    const [newSmurf, setNewSmurf] = useState({})
    const handleChange = e =>{
        e.preventDefault()
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }
    const handleSubmit = () =>{
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(r =>{
                console.log(r)
            })
            .catch(err =>{
                console.log(err)
            })
    }
    return(
        <form className='smurf-form' onSubmit={handleSubmit}>
            Name: <input type='text'
                         name='name'
                         value={newSmurf.name}
                         onChange={handleChange}
                    />
            Age: <input type='text'
                        name='age'
                        value={newSmurf.age}
                        onChange={handleChange}
                    />
            Height: <input type='text'
                           name='height'
                           value={newSmurf.height}
                           onChange={handleChange}
                    />
            <button type='submit'>Add Smurf</button>
        </form>
    )
}