import React, {useState} from 'react';
import Form from "../../components/Form/Form";
import axiosApi from "../../axiosApi";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import NavBar from "../../components/NavBar/NavBar";

const EditQuote = ({match}) => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState( {
        category: '',
        author: '',
        quoteText: '',
    });

    useEffect(() => {
        setLoading(true);
        const getDataPost = async () => {
            const response = await axiosApi(`/quotes/${match.params.id}.json`);
            setQuote(response.data.quote);
        };

        getDataPost().catch();
        setLoading(false);

    }, [match.params.id]);

    const onChangeInput = e => {
        const {name, value} = e.target;

        setQuote(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const editPost = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosApi.put(`/quotes/${match.params.id}.json`, {'quote': quote});
        } catch (e) {

        } finally {
            setLoading(false);
            history.push('/');
        }
    };

    return loading ? (<Spinner/>) :
        quote && (
        <>
            <NavBar/>

            <Form
                selectChange={onChangeInput}
                formSubmit={editPost}
                inputName='author'
                inputValue={quote.author}
                changeInputForm={onChangeInput}
                name='quoteText'
                value={quote.quoteText}
                textOnChangeTextArea={onChangeInput}
                btnType='submit'
                btnName='Save'
            />
        </>

    );
};

export default EditQuote;