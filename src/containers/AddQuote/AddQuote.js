import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import {useHistory} from "react-router-dom";
import Form from "../../components/Form/Form";
import Spinner from "../../UI/Spinner/Spinner";
import axiosApi from "../../axiosApi";

const AddQuote = () => {
    const [quote, setQuote] = useState( {
        category: "",
        author: "",
        quoteText: "",
    });
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onChangeInput = e => {
        const {name, value} = e.target;

        setQuote(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const addQuote = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosApi.post('/quotes.json', quote);
        } finally {
            setLoading(false);
            history.push('/');
        }
    };



    return loading ? (<Spinner/>) :(
        <>
            <NavBar/>

            <Form
                selectChange={onChangeInput}
                formSubmit={addQuote}
                inputName='author'
                inputValue={quote.author}
                changeInputForm={onChangeInput}
                name='quoteText'
                value={quote.quoteText}
                textOnChangeTextArea={onChangeInput}
                btnType='submit'
                btnName='Add'
            />
        </>
    );
};

export default AddQuote;