import React, {useEffect, useState} from 'react';
import Spinner from "../../UI/Spinner/Spinner";
import Button from "../../UI/Button/Button";
import axiosApi from "../../axiosApi";
import {NavLink} from "react-router-dom";
import './Quotes.css';

const Quotes = () => {
    const [quotes, setQuotes] = useState(null);
    const [loading, setLoading] = useState(false);

    const getQuotes = async () => {
        setLoading(true);
        try {
            const response = await axiosApi(`/quotes.json`);
            const quotesArray = [];
            if (response.data) {
                for (let key of Object.entries(response.data)) {
                    quotesArray.push({
                        id: key[0],
                        category: key[1].category,
                        author: key[1].author,
                        quoteText: key[1].quoteText
                    });
                }
            }
            setQuotes(quotesArray);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const deleteQuote = async (id) => {
        setLoading(true);
        try {
            const q = quotes.filter(k => k.id === id)
            await axiosApi.delete(`/quotes/${q[0].id}.json`);
            getQuotes().catch();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getQuotes().catch();
    }, []);

    return loading ? (<Spinner/>)
        :
        quotes && (
            <>
                <div className='quotes'>
                    {quotes.map(q => {
                        return (
                            <div className="card" key={q.id}>
                                <div className="card-body">
                                    <div className='card-body-left'>
                                        <p className="card-text">{q.quoteText}</p>
                                        <h5 className='card-title'>Quote by: {q.author}</h5>
                                    </div>
                                    <div className='right'>
                                        <NavLink className="btn btn-warning" to={`quotes/${q.id}/edit`}>Edit</NavLink>
                                        <Button
                                            classType='danger'
                                            type='button'
                                            name='X'
                                            clicked={e => deleteQuote(q.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
};

export default Quotes;