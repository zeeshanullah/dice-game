import React, { Component } from 'react'
import './Die.css';

export class Die extends Component {
    render() {
        return (
            <div className={`Die ${this.props.rolling && 'Die-shaking'}`}>
                <i className={`fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Die;
