import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [articles, setArticles] = React.useState([]);

    const GetArticle = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=abc24c26b4a54357b2de4642666cc4e3`);
        console.log(response.data);
        
        setArticles(response.data.articles);
    }
  
    useEffect(() => {
        GetArticle();
    }, []);
    return (
        <aside className="sidebar">
            <h2>Popular Articles</h2>
            <ul style={{listStyle: 'none', marginTop: '10px', color: 'black', backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', boxSizing: 'border-box'}}>
            {articles.map((article, index) => (
                    <li key={index} style={{listStyle: 'none', color: 'black', boxSizing: 'border-box',border:'1px solid rgba(0, 0, 0, 0.1)', padding: '10px', width: '95%', borderRadius: '10px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', cursor: 'pointer'}}>
                        <h3 style={{ color: 'black'}}>{article.title}</h3>
                        <p style={{ color: 'black' }}>{article.description}</p>
                    </li>
                ))}
            </ul>
            <div className="newsletter">
                <h2 style={{ marginBottom: '10px', color: 'black', fontSize: '25px'}}>Subscribe</h2>
                <input style={{color: 'black', border: '1px solid black', borderRadius: '5px', marginBottom: '10px', padding: '10px', width: '100%'}} type="email" placeholder="Enter your email" />
                <button style={{backgroundColor: 'black', color: 'white', border: '1px solid black', borderRadius: '5px', padding: '10px', width: '60%'}}>Subscribe</button>
            </div>
        </aside>
    );
}

export default Sidebar;
