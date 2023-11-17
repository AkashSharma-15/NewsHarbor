import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const pageSize = 9
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgres] = useState(0)
  const setProgress = (progress) => {
    setProgres(progress)
  }

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/'
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}
          />
          <Route path='/about'
            element={<About category="about" />}
          />
          <Route path='/business'
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}
          />
          <Route path='/entertainment'
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}
          />
          <Route path='/health'
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}
          />
          <Route path='/science'
            element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}
          />
          <Route path='/sports'
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}
          />
          <Route path='/technology'
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}
          />
        </Routes>
      </Router>
    </div>
  )

}

export default App



