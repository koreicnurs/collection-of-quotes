import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import Button from "../../UI/Button/Button";

const Quotes = () => {
    const [quotes, setQuotes] = useState(null);
    const [loading, setLoading] = useState(false);

    const getPosts = async () => {
        setLoading(true);
        try {
            const response = await axios(`https://bn-task-63-default-rtdb.europe-west1.firebasedatabase.app/quotes.json`);
            const quotesArray = [];
            if (response.data) {
                for (let key of Object.entries(response.data)) {
                    quotesArray.push({
                        id: key[0],
                        category: key[1].quote.category,
                        author: key[1].quote.author,
                        quoteText: key[1].quote.quoteText
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


    useEffect(() => {
        getPosts().catch();
    }, []);

    return loading ? (<Spinner/>)
        :
        quotes && (
            <>
                <NavBar/>

                <div className='posts'>
                    {quotes.map(q => {
                        return (
                            <div className="card" key={q.author}>
                                <div className="card-body">
                                    <p className="card-text">{q.quoteText}</p>
                                    <h6 className='card-title'>- {q.author}</h6>
                                    <Button
                                        classType='warning'
                                        type='button'
                                        // clicked={}
                                        name='Edit'
                                    />
                                    <NavLink className="btn btn-danger" to={`posts/${q.id}`}>X</NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
};

export default Quotes;