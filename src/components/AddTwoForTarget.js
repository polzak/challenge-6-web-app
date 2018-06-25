import React, { Component } from 'react';
import { addTwoForTarget, generateRandomArray, generateRandomTarget } from './features/add-two-for-target/index';

class AddTwoForTarget extends Component {
    constructor() {
        super();
        this.state = {
            givenArray: [],
            givenTarget: ''        
        }
    }

    onAddTwoClick = () => {
        const givenNumbers = document.getElementById('add-two-array').value;
        let targetNum = document.getElementById('add-two-target').valueAsNumber;
        let userArr;

        try {
            userArr = (givenNumbers.split(',')).map(el => Number(el));
        } catch(err) {
            console.log('error', err.message);
        }

        console.log(userArr);
        userArr = userArr.filter(el => typeof(el) === 'number' && !isNaN(el));
        if (userArr.length < 2) {
            console.log(`Sorry, there should be at least TWO numbers in the given array.`);
            userArr = generateRandomArray();
        }

        console.log(userArr);
        
        if (isNaN(targetNum)) {
            targetNum = generateRandomTarget();
        }

        this.setState({
            givenArray: userArr,
            givenTarget: targetNum
        });
    }

    render() {
        const result = addTwoForTarget([this.state.givenArray, this.state.givenTarget]);
        const resultStr = (typeof(result) === 'string') ? result : `${result[0]} and ${result[1]} are added to produce ${this.state.givenTarget}.`;
    
        return (
            <div className='bg-light-yellow pa2'>
                <h2>Add Two For Target</h2>
                <div>
                <label htmlFor='array'>Numbers: </label>
                <input id='add-two-array' type='text' />
                </div>
                <div>
                <label htmlFor='target'>Target Number: </label>      
                <input id='add-two-target' type='number' />
                </div>
                <button type='button' onClick={this.onAddTwoClick}>Find!</button>
                <p>Given Array: { JSON.stringify(this.state.givenArray) }</p>
                <p>Target Number: { this.state.givenTarget }</p>
                <p>Result: { resultStr }</p>
            </div>
    
        );
    }

}

export default AddTwoForTarget;
