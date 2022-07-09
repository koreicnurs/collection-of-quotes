import React from 'react';

const Button = props => {
    return (
        <button className={`btn btn-${props.classType}`} type={props.type} onClick={props.clicked}>{props.name}</button>
    );
};

export default Button;