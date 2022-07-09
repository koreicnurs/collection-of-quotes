import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Spinner from "../../UI/Spinner/Spinner";
import Button from "../../UI/Button/Button";
import axiosApi from "../../axiosApi";

const Quotes = () => {
    const [quotes, setQuotes] = useState(null);
    const [loading, setLoading] = useState(false);

    const getPosts = async () => {
        setLoading(true);
        try {
            const response = await axiosApi(`/quotes.json`);
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

    const deleteQuote = async (id) => {
        setLoading(true);
        try {
            const q = quotes.filter(k => k.id === id)
            await axiosApi.delete(`/quotes/${q[0].id}.json`);
            getPosts().catch();
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

                <div className='quotes'>
                    {quotes.map(q => {
                        return (
                            <div className="card" key={q.id}>
                                <div className="card-body">
                                    <p className="card-text">{q.quoteText}</p>
                                    <h6 className='card-title'>{q.author}</h6>
                                    <Button
                                        classType='danger'
                                        type='button'
                                        name='Delete'
                                        clicked={e => deleteQuote(q.id)}
                                    />
                                    {/*<NavLink className="btn btn-danger" to={`quotes/${q.id}`}>X</NavLink>*/}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
};

export default Quotes;