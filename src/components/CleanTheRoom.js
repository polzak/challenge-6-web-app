import React, { Component } from 'react';
import { coreCleanTheRoom } from './../challenge-core';

class CleanTheRoom extends Component {
    constructor() {
        super();
        this.state = {
            givenArray: [],
            cleanedArray: []
        }
    }

    onCleanRoomClick = () => {

        const { cleanTheRoom, generateRandomArrayToClean } = coreCleanTheRoom;

        const givenNumbers = document.getElementById('clean-room-array').value;
        let userArr;

        if (givenNumbers.length < 1) {
            userArr = generateRandomArrayToClean();
            
        } else {
            try {
                userArr = ((givenNumbers.split(',')).map(el => el.trim()));
                userArr = userArr.map(el => (el.startsWith('"') || el.startsWith("'")) ? (el.slice(1, el.length-1)).toString() : Number(el));
            } catch(err) {
                console.log('error', err.message);
            }
        }

        const resultArr = cleanTheRoom(userArr);

        this.setState({
            givenArray: userArr,
            cleanedArray: resultArr
        });
    }

    render() {
        return (
            <div className='bg-light-red pa2'>
                <h2>Clean The Room</h2>
                <div>
                <label htmlFor='to-be-cleaned'>Cleaned From: </label>
                <input id='clean-room-array' type='text'/>
                </div>
                <button type='button' onClick={this.onCleanRoomClick}>Clean!</button>
                <p>Given Array: { JSON.stringify(this.state.givenArray) }</p>
                <p>Cleaned Array: { JSON.stringify(this.state.cleanedArray) }</p>
            </div>
        );
    }
}

export default CleanTheRoom;
