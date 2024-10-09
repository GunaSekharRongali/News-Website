import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticlePage = () => {
    const [articleData, setArticleData] = useState({});
    const { name } = useParams();

    const GetArticle = async (name) => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${name}&apiKey=abc24c26b4a54357b2de4642666cc4e3`);
        console.log(name);
        
        // setArticleData(response.data.articles[0]);
    }
    // Fetch name details using the id (can use API or static data)

    useEffect(() => {
        GetArticle(name);
    }, [name]);


    return (
        <div className="article-page">
            <img style={{ width: '100%', borderRadius: '10px'}} src={articleData.urlToImage} alt={articleData.title} />
            <h3 style={{ color: 'black', marginTop: '10px', marginBottom: '10px'}}>{articleData.title}</h3>
            <p style={{ color: 'black', marginBottom: '10px', marginTop: '10px', fontSize: '12px' }}>{articleData.publishedAt}</p>
            <p style={{ color: 'black', marginBottom: '10px', marginTop: '10px' }}>{articleData.description}</p>
            <p style={{ color: 'black', marginBottom: '10px', marginTop: '10px', fontSize: '12px' }}>{articleData.content}</p>
        </div>
    );
}

export default ArticlePage;
