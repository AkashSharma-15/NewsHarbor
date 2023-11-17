import React from 'react'

function About(props) {
    let capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    document.title = `NewsHarbor-${capital(props.category)}`;
    return (
        <div>
            <div style={{ width: '100%', height: '100%' }}
                className="container">
                <h2 className='mb-4'>About Us</h2>
                <p>
                    Welcome to NewsHarbor, your reliable source for the latest news and updates. We strive to deliver accurate and timely information on a variety of topics, including Business, Entertainment, Health, Sports, Science, and various other fields.
                </p>
                <p>
                    Our team of dedicated journalists and contributors work hard to bring you insightful and engaging content. We believe in the power of information to empower individuals and contribute to a well-informed society.
                </p>
                <p>
                    NewsHarbor is built on the principles of transparency, integrity, and journalistic excellence. We are committed to providing a platform that fosters meaningful discussions and keeps you informed about the world around you.
                </p>
                <h3 className='mt-4'>Our Mission</h3>
                <p>
                    Our mission is to deliver the latest information to our users. Whether it's breaking news, in-depth analysis, or thought-provoking features, we aim to be your go-to source for reliable information and insights.
                </p>
                <h3 className='mt-4'>Contact Us</h3>
                <p>
                    Have a suggestion, feedback, or a news tip? We value your input. Feel free to reach out to us at <a href='mailto:your@email.com'>your@email.com</a>.
                </p>
            </div>
        </div>
    )
}

export default About
