import React, { Component } from 'react';
import './team.scss';
import { Score } from '../score/score';
import { Timeouts } from '../timeouts/timeouts';

interface TeamProps {
    side: string;
}

interface TeamState {
    score: number;
    timeouts: number
}

export class Team extends Component<TeamProps, TeamState> {
    constructor(props: TeamProps) {
        super(props);
        this.state = {
            score: 1,
            timeouts: 0,
        } as TeamState;

        this.increaseScore = this.increaseScore.bind(this);
        this.decreaseScore = this.decreaseScore.bind(this);
        this.increaseTimeout = this.increaseTimeout.bind(this);
        this.decreaseTimeout = this.decreaseTimeout.bind(this);
    }

    render() {
        return (
            <div className="Team">
                <div className="Team-name">{this.props.side}</div>
                <Score value={this.state.score} increase={this.increaseScore} decrease={this.decreaseScore}/>
                <button onClick={this.increaseScore}>+</button>
                <button onClick={this.decreaseScore}>-</button>
                <button onClick={this.increaseTimeout}>+</button>
                <button onClick={this.decreaseTimeout}>-</button>
                <Timeouts value={this.state.timeouts} increase={this.increaseTimeout} decrease={this.decreaseTimeout}/>
            </div>
        );
    }

    private increaseScore() {
        this.setState((state) => {
            return {
                score: state.score + 1,
                timeouts: state.timeouts,
            }
        });
    }

    private decreaseScore() {
        if (this.state.score){
            this.setState((state) => {
                return {
                    score: state.score - 1,
                    timeouts: state.timeouts,
                }
            });
        }
    }

    private increaseTimeout() {
        if (this.state.timeouts < 4) {
            this.setState((state) => {
                return {
                    score: state.score,
                    timeouts: state.timeouts + 1,
                }
            });
        }
    }

    private decreaseTimeout() {
        if (this.state.timeouts){
            this.setState((state) => {
                return {
                    score: state.score,
                    timeouts: state.timeouts -1,
                }
            });
        }
    }
}