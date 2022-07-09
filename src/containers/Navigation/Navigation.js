import React from 'react';
import axiosApi from "../../axiosApi";
import NavLink from "react-router-dom/es/NavLink";
import {useEffect, useState} from "react";
import {categoryName} from "../../categoryName";

const Navigation = props => {
    console.log(props);
    const [category, setCategory] = useState(null);

    const getCategory = async () => {
        const resp = await axiosApi(`/quotes.json?orderBy="category"&equalTo="star-wars"`);
        console.log(resp.data);
    };

    // const getQuotes = async () => {
    //     // setLoading(true);
    //     try {
    //         const response = await axiosApi(`/quotes.json`);
    //         const quotesArray = [];
    //         if (response.data) {
    //             for (let key of Object.entries(response.data)) {
    //                 quotesArray.push({
    //                     id: key[0],
    //                     category: key[1].quote.category,
    //                     author: key[1].quote.author,
    //                     quoteText: key[1].quote.quoteText
    //                 });
    //             }
    //         }
    //         setQuotes(quotesArray);
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         // setLoading(false);
    //     }
    // };

    useEffect(() => {
        getCategory().catch();
    }, []);

    // const getQuoteByCategory = async () => {
    //   await axiosApi('/quotes.json?orderBy="category"&equalTo="star-wars"')
    // }

    return (
        <>
            <nav>
                <NavLink to='/'>All</NavLink>
                {/*{categoryName.map(c => {*/}
                {/*    return (*/}
                {/*        <NavLink key={c.id} to={`/quotes.json?orderBy="category"&equalTo="${c.id}"`}>{c.title}</NavLink>*/}
                {/*    )*/}
                {/*})}*/}
            </nav>

        </>
    );
};

export default Navigation;