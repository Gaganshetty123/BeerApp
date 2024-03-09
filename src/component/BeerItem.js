import React, { Component } from 'react';
import '../App.css'
export default class BeerItem extends Component {
    render() {
        let {name, image_url,description} = this.props;
        return (
            <div>
                <div className="card p-3" style={{width: "18 rem", height: '400px',border:'2px solid #D19710',backgroundColor:"#9DA6B8",color:"black"}}>
                    <img src={image_url} className="card-img-top" alt={name} style={{width: '100%', height: '60%', objectFit: 'contain'}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text-center">{description}....</p>
                        <div  class=" row d-flex justify-content-center align-content-center "  >
                        <a href="/" className="btn btn-dark" style={{width:"50%"}}>Read More</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
