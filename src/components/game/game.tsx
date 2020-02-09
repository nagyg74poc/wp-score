import React, { Component } from 'react';
import './game.scss';
import { Team } from '../team/team';
import { Time } from '../timer/time';

export class Game extends Component {
    render() {
        return (
            <div className="Game">
                <Team side="Home"/>
                <Time/>
                <Team side="Visitor"/>
            </div>
        )
    }
}