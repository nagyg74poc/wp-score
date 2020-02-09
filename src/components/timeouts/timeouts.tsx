import React from 'react';
import { Component } from 'react';
import './timeouts.scss'

interface TimeoutsProps {
    value: number;
    increase: any;
    decrease: any;
}

export class Timeouts extends Component<TimeoutsProps> {

    constructor(props: TimeoutsProps) {
        super(props);

        this.clickTimeouts = this.clickTimeouts.bind(this);
    }

    render() {
        return (
            <div className="Timeouts unselectable" onClick={this.clickTimeouts}>
                <div className="Timeouts-icons">{this.createTimeouts()}</div>
            </div>
        )
    }

    createTimeouts(){
        const timeouts:JSX.Element[] = [];
        for (let i = 1; i <= 4; i++) {
            let className = 'Timeouts-icon';
            if (i <= this.props.value) {
                className += ' Timeouts-icon__active';
            }
            timeouts.push(<div className={className} key={i}>
                {
                    //inner loop to create columns
                }
            </div>)
        }
        return timeouts;
    }

    clickTimeouts(event: any) {
        if (event.ctrlKey || event.altKey || event.shiftKey) {
            this.props.decrease();
        } else {
            this.props.increase();
        }
    }
}