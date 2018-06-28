import React, { Component } from 'react';
import Button from './Button';

class HexToRgb extends Component {
    constructor() {
        super();
        this.state = {
            givenCode: '',
            convertedCode: ''
        }
    }

    onRgbHexClick = () => {

        const simpleRgbHexConverter = require('simple-rgb-hex-converter');

        let userCode = document.getElementById('hex-rgb-code').value;

        if (userCode.length < 1) {
            userCode = simpleRgbHexConverter.generateRandomHex();
        }

        this.setState({
            givenCode: userCode,
            convertedCode: simpleRgbHexConverter.converter(userCode)
        });
    }

    render() {
        return (
            <div className='pa2' style={{backgroundColor: this.state.convertedCode}}>
                <h2>Hex-RGB Converter</h2>
                <div>
                <label htmlFor='color-converter'>Hex or RGB Code </label>
                <input id='hex-rgb-code' type='text' placeholder='(255, 120, 63) or #ff783f'/>
                </div>
                <Button clickFunc={this.onRgbHexClick} buttonText={'Convert!'}/>
                <div className="bg-washed-yellow br3 mw6 center pa1">
                    <p>Given Code: <span className="b f4">{ JSON.stringify(this.state.givenCode) }</span></p>
                    <p>Converted Code: <span className="b f4">{ JSON.stringify(this.state.convertedCode) }</span></p>
                </div>
            </div>
        );
    }
}

export default HexToRgb;
