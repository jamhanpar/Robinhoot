import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <a href={news.url}>
            <div className="news-card">
                <div className="news-card-outline">
                    <div className="news-info-list">
                        <div className="news-card-source">Source: {news.source}</div>
                        <div className="news-card-headline">Headline: {news.headline}</div>
                        <div className="news-card-related-symbols">Related: {news.related}</div>
                    </div>
                    <div className="news-image-container">
                        <img className="source-menu-icon" src={window.newsDots} />
                        <div className="news-card-image">
                            <img className="news-image" src={window.newsFiller} />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default NewsCard;