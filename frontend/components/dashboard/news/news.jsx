import React from 'react';
import { Link } from 'react-router-dom';

class News extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        debugger
        this.props.iexFetchNews(window.iexcloudApiKey);
    }

    render() {
        const { news } = this.props;
        debugger
        return (
            <div className="news-container">
                Hello This Is News Component
                This is news: {news}
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