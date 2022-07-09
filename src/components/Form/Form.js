import React from 'react';
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/TextArea/TextArea";
import Button from "../../UI/Button/Button";
import {categoryName} from "../../categoryName";
import './Form.css';

const Form = props => {

    const category = categoryName.map(c => {
        return (
            <option value={c.id} key={c.id}>{c.title}</option>
        );
    });

    return (
        <form className='form' onSubmit={props.formSubmit}>
            <select name='category' onChange={props.selectChange}>
                {category}
            </select>
            <Input
                name={props.inputName}
                value={props.inputValue}
                changeInput={props.changeInputForm}
            />
            <TextArea
                name={props.name}
                value={props.value}
                onChangeTextArea={props.textOnChangeTextArea}
            />
            <Button
                classType='info'
                type={props.btnType}
                name={props.btnName}
            />
        </form>
    );
};

export default Form;