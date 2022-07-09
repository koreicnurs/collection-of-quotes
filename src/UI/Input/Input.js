import React from 'react';

const Input = props => {
    return (
        <input type='text'
               className="form-control"
               style={{width: '60%'}}
               name={props.name}
               value={props.value}
               onChange={props.changeInput}
        />
    );
};

export default Input;