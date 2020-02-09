import React, { ChangeEvent, Component } from 'react';
import './config.scss';
import {
    decreaseMaxPart,
    increaseMaxPart,
    setMaxPart,
} from '../../store/actions';
import { connect } from 'react-redux';
import { TextField, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

class ConfigComponent extends Component<any, any> {

    state = {
        theme: 'classic',
    };


    constructor(props){
        super(props);
        this.setTheme = this.setTheme.bind(this);
        this.setParts = this.setParts.bind(this);
    }

    setTheme = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState((state: any) => {
            return {
                theme: event.target.value
            }
        });
    };

    setParts = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.setMaxPart(event.target.value);
    };

    render() {
        return (
            <div className="Config">
                <h3>Config</h3>
                <form
                    noValidate
                    autoComplete="off"
                    className="Config-form">
                    <FormControl className="Config-control">
                        <InputLabel htmlFor="theme">Theme</InputLabel>
                        <Select
                            value={this.state.theme}
                            onChange={this.setTheme}
                            inputProps={{
                                name: 'theme',
                                id: 'theme',
                            }}
                        >
                            <MenuItem value='classic'>Classic</MenuItem>
                            <MenuItem value='cwpm'>CWPM</MenuItem>
                            <MenuItem value='fina'>Fina</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="Config-control">
                        <TextField
                            type="number"
                            id="parts"
                            label="Parts"
                            value={this.props.parts.maxParts}
                            onChange={this.setParts}
                            margin="normal"
                        >
                        </TextField>
                    </FormControl>
                </form>
                <span>{this.state.theme}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parts: { ...state.game.parts }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseMaxPart() {
            dispatch(increaseMaxPart());
        },
        decreaseMaxPart() {
            dispatch(decreaseMaxPart());
        },
        setMaxPart(part: number) {
            dispatch(setMaxPart(part));
        }
    }
};

export const Config = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigComponent);