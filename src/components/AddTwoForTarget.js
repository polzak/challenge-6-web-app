import React, { Component } from 'react';
import { coreAddTwoForTarget } from './../challenge-core';
import Button from './Button';

class AddTwoForTarget extends Component {
    constructor() {
        super();
        this.state = {
            givenArray: [],
            givenTarget: '',
            result: ''        
        }
    }

    onAddTwoClick = () => {
        const { addTwoForTarget, generateRandomArray, generateRandomTarget } = coreAddTwoForTarget;

        const givenNumbers = document.getElementById('add-two-array').value;
        let targetNum = document.getElementById('add-two-target').valueAsNumber;
        let userArr;

        try {
            userArr = (givenNumbers.split(',')).map(el => Number(el));
        } catch(err) {
            console.log('error', err.message);
        }

        userArr = userArr.filter(el => typeof(el) === 'number' && !isNaN(el));
        if (userArr.length < 2) {
            console.log(`Sorry, there should be at least TWO numbers in the given array.`);
            userArr = generateRandomArray();
        }

        if (isNaN(targetNum)) {
            targetNum = generateRandomTarget();
        }

        const result = addTwoForTarget([userArr, targetNum]);
        const resultStr = (typeof(result) === 'string') ? result : `${result[0]} and ${result[1]} are added to produce ${targetNum}.`;

        this.setState({
            givenArray: userArr,
            givenTarget: targetNum,
            result: resultStr
        });
    }

    render() {
        return (
            <div className='bg-light-yellow pa2'>
                <h2>Add Two For Target</h2>
                <div>
                <label htmlFor='array'>Numbers </label>
                <input id='add-two-array' type='text' className="w-30" placeholder='Type numbers separated with commas.'/>
                </div>
                <div>
                <label htmlFor='target'>Target Number: </label>      
                <input id='add-two-target' type='number' placeholder='Type a number.'/>
                </div>
                <Button clickFunc={this.onAddTwoClick} buttonText={'Find!'}/>
                <p>Given Array: { JSON.stringify(this.state.givenArray) }</p>
                <p>Target Number: { this.state.givenTarget }</p>
                <p className="b f4 red">{ this.state.result }</p>
            </div>
        );
    }
}

export default AddTwoForTarget;
