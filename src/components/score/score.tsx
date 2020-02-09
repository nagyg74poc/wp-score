import React, { Component } from 'react';
import './score.scss';
import { NumberFormatter } from '../number-formatter/number-formatter';

interface ScoreProps {
    value: number;
    increase: any;
    decrease: any;
}

export class Score extends Component<ScoreProps> {

    constructor(props: ScoreProps) {
        super(props);

        this.clickScore = this.clickScore.bind(this);
    }

    render() {
        return (
            <div className="Score">
                <div className="Score-value unselectable" onClick={this.clickScore}>
                    <NumberFormatter value={this.props.value} digits={2} leadingZero={true}/>
                </div>
            </div>
        );
    }

    clickScore(event: any) {
        if (event.ctrlKey || event.altKey || event.shiftKey) {
            this.props.decrease();
        } else {
            this.props.increase();
        }
    }

}