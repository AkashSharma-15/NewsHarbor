import React from 'react';
import monkeyImage from '../monkey.jpg'
function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
        <div className='my-3  '>
            <div className="card news-card " style={{ height: '100%', }}>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>

                <img src={!imageUrl ? monkeyImage : imageUrl} className="card-img-top" alt="..." height='200px' />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{!description ? "No description available" : description}</p>
                    <p className='card-text'><small className='text-muted'> By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                    <a rel="noreferrer" href={!newsUrl ? "" : newsUrl} target='_blank' className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );

}

export default NewsItem;
