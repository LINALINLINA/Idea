import React, { Component } from 'react';
import img1 from '../static/img/1.jpg';
import img2 from '../static/img/2.jpg';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {imgArrary: [img1, img2]}};
    }
    render() {
        console.log(this.state);
        
        return(
            <div>
                <ul>
                    {this.state.data.imgArrary.map((item)=>(
                        <li key={item}><img src={item} alt={item}/></li>
                    ))}
                    
                    
                </ul>
            </div>
        )
    }
}
