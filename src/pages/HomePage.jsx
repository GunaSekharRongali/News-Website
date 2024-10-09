import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import axios from 'axios';


const HomePage = () => {
const ApiKey = 'abc24c26b4a54357b2de4642666cc4e3';
const [articles, setArticles] = useState([]);
    const getArticles = async () => {
        try { 
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=abc24c26b4a54357b2de4642666cc4e3');
            setArticles(response.data.articles);
            console.log(response);
            
        }    
        catch (error) { 
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);


    return (
        <div className="homepage" style={{marginTop: '76px', color: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className="main-content">
                {articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
            <Sidebar />
        </div>
    );
}

export default HomePage;
