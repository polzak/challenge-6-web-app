import React from 'react';

const Button = (props) => {
    return (
        <button type="button" onClick={props.clickFunc} className="ba bw1 ph3 pv2 ma2 bg-mid-gray white">
            {props.buttonText}
        </button>
    )
}

export default Button;