import React from 'react';

const NewsCard = ({ news }) => {
    debugger
    return (
        <div>
            <a href={news.url}>
                <div className="news-souce">Source: {news.source}</div>
                <div className="news-title">Headline: {news.headline}</div>
                <div className="news-desc">Summary: {news.summary}</div>
                <div className="news-related-symbols">Related: {news.related}</div>
                <div className="news-picture">Image: {news.image}</div>
            </a>
        </div>
    )
}

export default NewsCard;