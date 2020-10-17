import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides : ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {die1: 1, die2: 1, rolling: false, started: false}
    }

    roll() {
        let face1 = Math.floor(Math.random() * this.props.sides.length) + 1;
        let face2 = Math.floor(Math.random() * this.props.sides.length + 1);
        console.log(face1, face2)
        this.setState({
            die1: face1,
            die2: face2,
            rolling: true,
            started: true
        })

        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000);
    }

    render() {
        const winLose = this.state.die1 + this.state.die2 === 7 ? 'Winner' : 'Loser';
        return (
            <div className="RollDice">
                <h3>If sum is 7, you win!</h3>
                 {!this.state.started ?
                <h1 className="RollDice-start">Roll Dice to start game</h1> :
                <h1 className={this.state.die1 + this.state.die2 === 7 ? 'RollDice-winner' : 'RollDice-loser'}>
                    {winLose}
                </h1>}
                <div className="RollDice-die">
                    <Die face={this.props.sides[this.state.die1-1]} rolling={this.state.rolling}/>
                    <Die face={this.props.sides[this.state.die2-1]} rolling={this.state.rolling}/>
                </div>

                <button onClick={() => this.roll()} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;

