import React from 'react';

const NewsCard = ({ news }) => {
    debugger
    return (
        <a href={news.url}>
            <div className="news-card">
                <div className="news-info-list">
                    <div className="news-card-source">Source: {news.source}</div>
                    <div className="news-card-headline">Headline: {news.headline}</div>
                    <div className="news-card-related-symbols">Related: {news.related}</div>
                </div>
                <div className="news-image-container">
                    <div className="news-card-image"><p>Image: {news.image}</p></div>
                </div>
            </div>
        </a>
    )
}

export default NewsCard;