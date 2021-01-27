import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './news_card';

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.iexFetchNews(window.iexcloudAPIKey);
    }

    render() {
        const { entities } = this.props;
        debugger
        if(entities.length === 0) {
            return null;
        }

        return (
            <div className="news-container">
                <div className="news-list">
                    <h1 className="news-title">News</h1>
                    {
                        entities.news.map((news_data, i) => <NewsCard 
                            news={news_data}
                            key={i}
                        />)
                    }
                </div>
            </div>
        )
    }
};

export default News;