import React, {useState} from 'react';
import {useEffect} from "react";
import axiosApi from "../../axiosApi";
import Spinner from "../../UI/Spinner/Spinner";
import {NavLink, useHistory} from "react-router-dom";
import Button from "../../UI/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import Navigation from "../Navigation/Navigation";


const Category = ({match}) => {

    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        const getDataPost = async () => {
            const response = await axiosApi(`/quotes.json?orderBy="category"&equalTo="${match.params.category}`);
            const categoryArray = [];
            if (response.data) {
                for (let key of Object.entries(response.data)) {
                    categoryArray.push({
                        id: key[0],
                        category: key[1].category,
                        author: key[1].author,
                        quoteText: key[1].quoteText
                    });
                }
            }
            setCategory(categoryArray);
        };

        getDataPost().catch();
        setLoading(false);

    }, [match.params.category]);


    const deleteQuote = async (id) => {
        setLoading(true);
        try {
            const q = category.filter(k => k.id === id);
            await axiosApi.delete(`/quotes/${q[0].id}.json`);
        } finally {
            setLoading(false);
            history.push('/');
        }
    };

    return loading ? (<Spinner/>) :
        category && (
            <>
                <NavBar/>
                <div className='main'>
                    <Navigation/>
                    <div className='quotes'>
                        {category.map(q => {
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
                </div>
            </>

        );
};

export default Category;