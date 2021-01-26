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
                <p>Hello This Is News Component</p>
                {/* {
                    entities.news.map((news_info, i) => {
                        debugger
                        return <p key={news_info.source + `-${i}`}>{news_info.source}</p>
                    })
                } */}
                {
                    entities.news.map((news_data, i) => <NewsCard 
                        news={news_data}
                        key={i}
                    />)
                }
            </div>
        )
    }
};

export default News;