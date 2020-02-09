import { Component } from 'react';

interface NumberFormatterProps {
    value: number;
    leadingZero?: boolean;
    digits: number;
}

export class NumberFormatter extends Component<NumberFormatterProps> {
    render() {
        let value = '' + this.props.value;
        if (this.props.leadingZero) {
            if (value.length < this.props.digits) {
                let zeros = new Array(this.props.digits - value.length + 1).join('0');
                value = zeros + value;
            }
        }
        return (
             value
        );
    }
}