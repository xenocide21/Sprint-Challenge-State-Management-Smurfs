import React, { Component } from 'react';
import axios from 'axios'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: null,
            smurfs: [],
        }
    }


    componentDidMount() {
        this.searchSmurf(this.state.query);
    }

    onChange(e) {
        this.setState({ query: e.target.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.searchSmurf(this.state.query);
                }
            } else {
                this.searchSmurf(this.state.query);
            }
        })
    }

    searchSmurf(query) {
        const url = "http://localhost:3333/smurfs/";

        if (query) {
            // if get value ion query so filter the data based on the query.
            axios
                .get(url)
                .then(r => {
                    return r.data;
                })
                .then(data => {
                let smurfs = data.filter(smurfs => smurfs.name === query).map((smurfs) => {
                    return (
                        <ul key={smurfs.name}>
                            <h2>{smurfs.name}</h2>
                            <li>Age:{smurfs.age}</li>
                            <li>Height:{smurfs.height}</li>
                        </ul>
                    )
                })
                this.setState({ smurfs: smurfs });
                console.log("state", smurfs)
            })
        } else {
            axios
                .get(url)
                .then(r => {
                return r.data;
                })
                .then(data => {
                let smurfs = data.map((smurfs) => {
                    return ( ''
                        // <ul key={smurfs.name}>
                        //     <li>{smurfs.name}</li>
                        // </ul>
                    )
                })
                this.setState({ smurfs: smurfs });
                console.log("state", smurfs)
            })
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search for..."
                    onChange={this.onChange.bind(this)}
                />
                {this.state.smurfs}
            </form>
        )
    }
}