import React, { Component } from 'react';
import { coreCleanTheRoom } from './../challenge-core';

class CleanTheRoom extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            givenArray: [],
            cleanedArray: []
        }
    }

    onCleanRoomClick = () => {

        const { cleanTheRoom } = coreCleanTheRoom;

        const givenNumbers = document.getElementById('clean-room-array').value;
        let userArr;
        let resultArr;

        if (givenNumbers.length < 1) {
            userArr = 'No Array Given';
            resultArr = 'No Cleaning';            
        } else {
            try {
                userArr = ((givenNumbers.split(',')).map(el => el.trim()));
                userArr = userArr.map(el => (el.startsWith('"') || el.startsWith("'")) ? (el.slice(1, el.length-1)).toString() : Number(el));
            } catch(err) {
                console.log('error', err.message);
            }
            resultArr = cleanTheRoom(userArr);
        }

        this.setState({
            inputValue: '',
            givenArray: userArr,
            cleanedArray: resultArr
        });
    }

    onRandomClick = () => {
        const { generateRandomArrayToClean } = coreCleanTheRoom;
        const randomArr = JSON.stringify(generateRandomArrayToClean());
        this.setState({
            inputValue: randomArr.slice(1, randomArr.length-1),
            givenArray: [],
            cleanedArray: []
        });
    }

    render() {
        return (
            <div className='bg-light-red pa2'>
                <h2>Clean The Room</h2>
                <div>
                <label htmlFor='to-be-cleaned'>Cleaned From: </label>
                <input id='clean-room-array' type='text' value={ this.state.inputValue}/>
                <button type='button' onClick={this.onRandomClick}>Random</button>
                </div>
                <button type='button' onClick={this.onCleanRoomClick}>Clean!</button>
                <p>Given Array: { JSON.stringify(this.state.givenArray) }</p>
                <p>Cleaned Array: { JSON.stringify(this.state.cleanedArray) }</p>
            </div>
        );
    }
}

export default CleanTheRoom;
