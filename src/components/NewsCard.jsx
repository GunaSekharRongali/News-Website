import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
    return (
        <div className="news-card" style={{marginBottom: '20px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px'}}>
            <img style={{ width: '100%', borderRadius: '10px'}} src={article.urlToImage} alt={article.title} />
            <h3 style={{ color: 'black',padding: '10px', marginTop: '10px', marginBottom: '10px'}}>{article.title}</h3>
            <p style={{ color: 'black',padding: '10px', marginBottom: '10px', marginTop: '10px' }}>{article.description}</p>
            <Link style={{ color: 'black', textDecoration: 'none',padding: '10px', marginBottom: '15px', fontSize: '12px'}} to={'/'}>Read More......</Link>
        </div>
    );
}

export default NewsCard;
