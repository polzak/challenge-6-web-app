import React, { Component } from 'react';
import { coreRgbHexConverter } from './../challenge-core';

class HexToRgb extends Component {
    constructor() {
        super();
        this.state = {
            givenCode: '',
            convertedCode: ''
        }
    }

    onRgbHexClick = () => {
        const { converter, generateRandomHex, generateRandomRGB } = coreRgbHexConverter;

        let userCode = document.getElementById('hex-rgb-code').value;

        if (userCode.length < 1) {
            userCode = generateRandomHex();
        }

        this.setState({
            givenCode: userCode,
            convertedCode: converter(userCode)
        });
    }

    render() {
        return (
            <div className='pa2' style={{backgroundColor: this.state.convertedCode}}>
                <h2>Hex-RGB Converter</h2>
                <div>
                <label htmlFor='color-converter'>Hex or RGB Code: </label>
                <input id='hex-rgb-code' type='text'/>
                </div>
                <button type='button' onClick={this.onRgbHexClick}>Convert!</button>
                <p>Given Code: { JSON.stringify(this.state.givenCode) }</p>
                <p>Converted Code: { JSON.stringify(this.state.convertedCode) }</p>
            </div>
        );
    }
}

export default HexToRgb;
