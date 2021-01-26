import React from 'react';
import { Link } from 'react-router-dom';

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.iexFetchNews(window.iexcloudAPIKey);
    }

    render() {
        const { entities } = this.props;
        debugger
        return (
            <div className="news-container">
                <p>Hello This Is News Component</p>
                <p>This is news: {entities.news.source} </p>
                {
                    entities.news.map(news_info => (
                        <p>{news.source}</p>
                    ))
                }
                {/* <a href={news.url}>
                    <div className="news-souce">news.source</div>
                    <div className="news-title">news.headline</div>
                    <div className="news-desc">news.summary</div>
                    <div className="news-related-symbols">news.related</div>
                    <div className="news-picture">news.image</div>
                </a> */}
            </div>
        )
    }
};

export default News;