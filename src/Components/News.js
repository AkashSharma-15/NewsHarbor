import React from 'react'
import { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(60)
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)

    }

    useEffect(() => {
        updateNews()
        document.title = `NewsHarbor-${capital(props.category)}`
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    return (
        <div className='container my-3'>
            <h1 className='text-center' style={{ margin: '35px 0', marginTop: '90px' }} >NewsHarbor-Top  {capital(props.category)}  Headlines</h1>

            <InfiniteScroll style={{ overflow: 'hidden' }}
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={loading && <Spinner />}
            >
                <div className="conatiner">
                    <div className="row ">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title.length >= 45 ? element.title.slice(0, 45) : element.title}
                                    description={!element.description ? "" : element.description.slice(0, 60)}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    date={element.publishedAt}
                                    author={element.author}
                                    source={element.source.name}
                                    mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>


        </div>

    )



}


export default News
