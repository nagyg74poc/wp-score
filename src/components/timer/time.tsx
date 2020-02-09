import React from 'react';
import { Component } from 'react';
import './time.scss'
import { decreaseCurrentPart, increaseCurrentPart, setCurrentPart } from '../../store/actions';
import { connect } from 'react-redux';

class TimeComponent extends Component<any, any> {

    render() {
        return (
            <div className="Time">
                <div className="parts">parts: {this.props.maxParts}</div>
                <div className="parts">currentPart: {this.props.currentPart}</div>
                <div className="Counter">8:00</div>
                <div className="Controls">
                    <button onClick={this.props.increasePart}>Increase part</button>
                    <button onClick={this.props.decreasePart}>Decrease part</button>
                    <button onClick={() => this.props.setPart(3)}>Set part</button>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ...state.game.parts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increasePart() {
            dispatch(increaseCurrentPart());
        },
        decreasePart() {
            dispatch(decreaseCurrentPart());
        },
        setPart(part: number) {
            dispatch(setCurrentPart(part));
        }
    }
};

export const Time = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeComponent);