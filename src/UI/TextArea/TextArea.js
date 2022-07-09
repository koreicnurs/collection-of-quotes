import React from 'react';

const TextArea = props => {
    return (
        <textarea
            className="form-control"
            style={{width: '60%'}}
            name={props.name}
            value={props.value}
            onChange={props.onChangeTextArea}
        />
    );
};

export default TextArea;