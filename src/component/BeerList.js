import React, { Component } from 'react';
import BeerItem from './BeerItem';

export default class BeerList extends Component {
    constructor() {
        super();
        this.state = {
            Beerlist: [],
            loading: false,
            page: 1,
            search: '' // Add a state for search query
        };
    }

    async componentDidMount() {
        let url = `https://api.punkapi.com/v2/beers`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ Beerlist: parsedData });
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {
        const filteredBeers = this.state.Beerlist.filter(beer =>
            beer.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

        return (
            <div>
                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">Home</a>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search For Any Beer"
                                aria-label="Search"
                                value={this.state.search}
                                onChange={this.handleSearchChange}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    <h1 className="mt-3 text-center" style={{color:"black",fontStyle:"T"}}>Beer List</h1>
                    <div className="contains">
                        <div className="row p-3 my-3">
                            {filteredBeers.map((beer) => {
                                return (
                                    <div className="col-md-4 p-3" key={beer.id}>
                                        <BeerItem name={beer.name} image_url={beer.image_url} description={beer.description.slice(0, 60)} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
