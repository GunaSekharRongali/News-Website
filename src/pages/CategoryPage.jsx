import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import axios from 'axios';

const CategoryPage = () => {
    const [articles, setArticles] = React.useState({});
    const { category } = useParams();

    const GetArticle = async (category) => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${category}&apiKey=abc24c26b4a54357b2de4642666cc4e3`);
        console.log(response.data);
        
        setArticles(response.data.articles);
    }
    // Fetch article details using the id (can use API or static data)

    useEffect(() => {
        GetArticle(category);
    }, [category]);

    return (
        <div className="category-page" style={{marginTop: '76px', color: 'black', backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className="articles">
                {articles.length > 0 && articles && articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
