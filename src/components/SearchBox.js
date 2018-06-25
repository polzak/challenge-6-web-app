import React from 'react';

const SearchBox = ({ inputChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='text' 
                placeholder='input numbers separated with commas' 
                onChange={ inputChange }
                />
        </div>
    );
}

export default SearchBox;